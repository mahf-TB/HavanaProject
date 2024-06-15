const db = require('../models');
const Article = db.Article;
const Stock = db.Stock;


const createArticle = async (articleData) => {
  try {
    const newArticle = await Article.Stock(articleData);
    return newArticle;
  } catch (error) {
    throw new Error('Error creating article');
  }
};

const updateArticle = async (id, articleData) => {
  try {
    const [updated] = await Article.update(articleData, { where: { id } });
    if (!updated) {
      throw new Error('Article not found');
    }
    const updatedArticle = await Article.findByPk(id);
    return updatedArticle;
  } catch (error) {
    throw new Error('Error updating article');
  }
};


module.exports = {
  createArticle,
  updateArticle,

};

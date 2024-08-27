const db = require("../models");
const Article = db.Article;
const Fourni = db.Fournisseur;
const Categorie = db.Categorie;
const Image = db.Image;

const ajouterProduit = async (req, res) => {
  const { reference, nom_article, description, categorie_id, fournisseur_id } = req.body;
  const imagePath = req.file ? req.file.path : null;
  try {
    const articles = await Article.create({
      reference,
      nom_article,
      description,
      categorie_id,
      fournisseur_id,
    });
    if (articles) {
      if (imagePath) {
        const imageUpload = await Image.create({
          path: imagePath,
          article_id: articles.id,
        });
        if (!imageUpload) {
          return res.status(500).json({ error: "Failed to create image" });
        }
      }
      res.status(201).send(articles);
    }
  } catch (error) {
    console.log(error);
  }
};

const get_allArticles = async (req, res) => {
  try {
    const data = await Article.findAll({
      include: [{ model: Fourni }, { model: Categorie }, { model: Image }],
    });
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  ajouterProduit,
  get_allArticles,
};

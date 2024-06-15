const db = require("../models");
const Article = db.Article;
const Fourni = db.Fournisseur;
const Categorie = db.Categorie;

const ajouterProduit = async (req, res) => {
  const {
    reference,
    nom_article,
    description,
    categorie_id,
    fournisseur_id,
  } = req.body;

  console.log(req.body.noms);
  try {
    const articles = await Article.create({
      reference,
      nom_article,
      description,
      categorie_id,
      fournisseur_id,
    });
    res.status(201).send(articles);
  } catch (error) {
    console.log(error);
  }
};

const get_allArticles = async (req, res)=>{
  try {
    const data = await Article.findAll({
      include: [
        { model: Fourni },
        { model: Categorie },
      ]
    });
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  ajouterProduit,
  get_allArticles,
};

const db = require("../models");
const Fournisseur = db.Fournisseur;
const article = db.Article;
const ajouterFournisseur = async (req, res) => {
  const { noms_fournisseur, adresse, telephone, email } = req.body;

  try {
    const FournisseurB = await Fournisseur.create({
      noms_fournisseur,
      adresse,
      telephone,
      email,
    });
    res.status(201).send(FournisseurB);
  } catch (error) {
    console.log(error);
  }
};

const show_FournisseurArticles = async (req, res) => {
  let key = req.params.id;
  try {
    const data = await Fournisseur.findByPk(key, {
      include: [{ model: article }],
    });
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ message: 'Article non trouvé' });
    }

  } catch (error) {
    console.log(error);
  }
};


const get_fournisseur = async (req, res) => {
  try {
    const data = await Fournisseur.findAll();
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ message: 'Article non trouvé' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  ajouterFournisseur,
  show_FournisseurArticles,
  get_fournisseur,
};

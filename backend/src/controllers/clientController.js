const db = require("../models");
const Client = db.Client;

const listeClient = async (req, res) => {
    try {
      const Clis = await Client.findAll();
      res.status(201).send(Clis);
    } catch (error) {
      console.log(error);
    }
  };

const newClient = async (req, res) => {
    const { nom_client, adresse, telephone } = req.body;
  let stt = false
    if (!nom_client || !adresse || !telephone) {
      return res.status(201).send({ message:"Remplire tout les formulaire", status: 401 });  
    }
    try {
      const newCli = await Client.create({
        nom_client,
        adresse,
        telephone,
      });
      if (newCli) {
        stt = true
      }
      res.status(201).send({newCli, status:stt});
    } catch (error) {
      console.log(error);
    }
  };


  const updateCLient = async (req, res) => {
    const { nom_client, adresse, telephone } = req.body;
  let stt = false
    try {
      const newCli = await Client.create({
        nom_client,
        adresse,
        telephone,
      });
      if (newCli) {
        stt = true
      }
      res.status(201).send({newCli, status:stt});
    } catch (error) {
      console.log(error);
    }
  };


  module.exports = {
    newClient,
    listeClient,
    updateCLient
  };
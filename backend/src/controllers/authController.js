const db = require("../models");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");


const User = db.User;

const user_Auth =  (req, res) => {
  res.status(200).send(req.auth_user);
}


const registerUser = async (req, res) => {
  const { noms, username, password, email, role, isActive } = req.body;

  console.log(req.body.noms);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      noms,
      username,
      password: hashedPassword,
      email,
      role,
      isActive,
    });
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const { identifiant, password } = req.body;

  try {
    // Rechercher l'utilisateur par username
    const user_auth = await User.findOne({
      where: { 
        [db.Sequelize.Op.or]: [
          { username: identifiant },
          { email: identifiant },
        ],
      },
    });

    if (!user_auth) {
      return res.status(404).send({ message: "Utilisateur non trouvé." });
    }

    // Comparer le mot de passe fourni avec le mot de passe haché
    const passwordIsValid = await bcrypt.compare(password, user_auth.password);
    if (!passwordIsValid) {
      return res.status(401).send({ message: "Mot de passe incorrect." });
    }

    var users = {
      id: user_auth.id,
      username: user_auth.username,
      email: user_auth.email,
      role: user_auth.role,
      isActive: user_auth.isActive,
    }
    const token = generateToken(users)
    res
      .status(200)
      .send({
        message: "Connexion réussie.",
        role: user_auth.role,
        isActive: user_auth.isActive,
        token,
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  user_Auth
};

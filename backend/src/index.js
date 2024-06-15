const express = require('express');
const cors = require('cors');
require('dotenv').config();

// const bodyParser = require('body-parser');


const routerUser = require('./routes/user.routes');
const routerAuth = require('./routes/auth.routes');
const routerArticle = require('./routes/article.routes');
const router_fournisseur = require('./routes/fournisseur.routes');

const app = express();

// middleware bodyParser
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// router
app.use('/auth', routerAuth);
app.use('/user', routerUser); 
app.use('/article', routerArticle);
app.use('/fournisseur', router_fournisseur);


module.exports = app
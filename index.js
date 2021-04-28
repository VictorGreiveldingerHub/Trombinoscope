// Require des dépendances
const express = require('express');

// Utilisation de cookie-parser, après npm cookie-parser
const cookieParser = require('cookie-parser'); // MDW pour s'occuper des cookies


// Initialisation d'un port ==> nouvelle méthode avec .env / dotenv
require('dotenv').config();


const PORT = process.env.PORT || 3000;
// Cette ligne est équivalent de :
// if (process.env.PORT existe) {PORT = process.env.PORT;} else {PORT = 3000;}

// Instance de serveur express
const app = express();


// On passe le MDW cookies à l'application
app.use(cookieParser());


// Le système de views
app.set('view engine', 'ejs');
app.set('views', 'views');

// Définit le dossier des fichiers statiques
app.use(express.static('public'));

// Pour récupérer les données dans le body, pour un POST !!!
// Ligne à placer AVANT l'initialisation du router sinon il ne reconnait pas req.body (undefined)
app.use( express.urlencoded({extended: true}) );

// Utilisation d'un router
const router = require('./app/router');
app.use(router);


app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});
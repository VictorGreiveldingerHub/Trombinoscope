// Require des dépendances
const express = require('express');

// Utilisation de cookie-parser, après npm cookie-parser
// const cookieParser = require('cookie-parser'); // MDW pour s'occuper des cookies
// EDIT ==> express-session
const session = require('express-session');

// Initialisation d'un port ==> nouvelle méthode avec .env / dotenv
require('dotenv').config();


const PORT = process.env.PORT || 3000;
// Cette ligne est équivalent de :
// if (process.env.PORT existe) {PORT = process.env.PORT;} else {PORT = 3000;}

// Instance de serveur express
const app = express();


// On passe le MDW cookies à l'application
// app.use(cookieParser());

// EDIT : finalement on va pas utiliser les cookies directement, on va se servir des sessions 
// avec npm install express-session

app.use(session({
    secret: 'keyboard cat', // la graine (seed) utilisée pour générer les IDs de session
    // tout ce qui compte c'est de mettre une chaine non vide, et de ne pas trop la changer
    // parce que a chaque fois cela invalide les sessions d'avant

    resave: true, // On dit au MDW "sauve la session à chaque requete", Sans cette option
    // on est obligé de faire `req.session.save()` à chaque fois (=> callbacks etc)

    saveUninitialized: true, // indique au MDW de sauver les sessions, même vide.
    cookie: { // Les options du cookie
        secure: false, // pour activer les cookies en http (si true => ne marche qu'en httpS )
        maxAge: 10000
    }
}));


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
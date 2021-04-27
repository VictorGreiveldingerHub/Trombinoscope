// Require des dépendances
const express = require('express');
// Initialisation d'un port ==> nouvelle méthode avec .env / dotenv
require('dotenv').config();


const PORT = process.env.PORT || 3000;
// Cette ligne est équivalent de :
// if (process.env.PORT existe) {
    //    PORT = process.env.PORT;
    //} else {
        //     PORT = 3000;
        // }
        
        
// Instance de serveur express
const app = express();
// Utilisation d'un router
const router = require('./app/router');
app.use(router);


// Définit le dossier des fichiers statiques
app.use(express.static('public'));

// Le système de views
app.set('view engine', 'ejs');
app.set('views', 'views');

// Pour récupérer les données dans le body, pour un POST !!!
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});
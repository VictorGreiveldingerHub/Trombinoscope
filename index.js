// Require des dépendances
const express = require('express');
// Initialisation d'un port
const port = 3000;
// Instance de serveur express
const app = express();
// Utilisation d'un router
const router = require('./app/router');
app.use(router);

// Le système de views
app.set('view engine', 'ejs');
app.set('views', 'views');

// Définit le dossier des fichiers statiques
app.use(express.static('public'));

app.listen(port, () => {
    console.log('Server listening on port' + port);
});
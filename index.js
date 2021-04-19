// Require des dépendances
const express = require('express');
// Initialisation d'un port
const port = 3000;
// Instance de serveur express
const app = express();
// Utilisation d'un router
const router = require('./app/router');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(router);

app.listen(port, () => {
    console.log('Server listening on port' + port);
});
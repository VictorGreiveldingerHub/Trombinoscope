/*
SoC : Separation of concerns
L'unique rôle de ce module, c'est de définir les routes
Ne contient pas de logique (calculs, manipulations ...), TOUTES les manipulations
on va les déléguer à d'autres modules (==> controllers) 
*/
const express = require('express');
const router = express.Router();

// Pour importer la logique de la route '/'
const mainController = require('./controllers/mainController');

// Ce qui revient à faire
router.get('/', mainController.homePage);

// Au lieu de 
// router.get('/', (req, res, next) => {
    // res.render('index');
// });

module.exports = router;
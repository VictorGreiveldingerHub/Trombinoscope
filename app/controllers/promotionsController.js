const promos = require('../../data/promos.json');

const promotionsController = {
    // Afficher la liste des promos
    displayPromotions: (req, res) => {
        console.log(promos);
        // On affiche la view promo
        // en lui passant la liste des promotions
        res.render('promos', {
            // promos: promos,
            // ES6
            promos,
        });
    },
};

module.exports = promotionsController;
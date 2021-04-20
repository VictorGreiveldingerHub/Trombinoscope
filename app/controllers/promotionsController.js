const promos = require('../../data/promos.json');
const students = require('../../data/students.json');

const promotionsController = {
    // Afficher la liste des promos
    displayPromotions: (req, res) => {
        // On affiche la view promo
        // en lui passant la liste des promotions
        res.render('promos', {
            // promos: promos,
            // ES6
            promos,
        });
    },

    showStudentsInPromotion: (req, res) => {
        const idPromo = req.params.id;

        const findStudents = students.filter(student => student.promo == idPromo);

        const goodPromo = promos.find(promo => promo.id == idPromo)
        if (goodPromo){
            res.render('students', {
                findStudents,
                goodPromo,
            });
        };
    },
};

module.exports = promotionsController;
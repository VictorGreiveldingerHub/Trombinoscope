const promos = require('../../data/promos.json');
const students = require('../../data/students.json');

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

    showStudentsInPromotion: (req, res) => {
        const idPromo = req.params.id;

        const findStudents = students.filter(student => student.promo === idPromo);

        if (findStudents){
            res.render('students', {
                students,
            });
        }
    },
};

module.exports = promotionsController;
// const promos = require('../../data/promos.json');
// const students = require('../../data/students.json');
const sqlite3 = require('sqlite3');
const database = new sqlite3.Database('trombi.db');

const promotionsController = {
    // Afficher la liste des promos
    displayPromotions: (req, res, next) => {
        // Version Sqlite3
        const query = `SELECT * FROM "promo"`;

        // Au lieu d'écrire data, on ecrit le nom de ce que l'on recup
        database.all(query, (error, promos) => {
            if (error) {
                console.trace(error);
                res.status(500).send(error);
            } else {
                // On affiche la view promo
                // en lui passant la liste des promotions
                res.render('promos', {
                    // du coup ES6
                    // promos: promos,
                    promos,
                });
            };
        });
        // res.render('promos', {
        //     // promos: promos,
        //     // ES6
        //     promos,
        // });
    },

    showStudentsInPromotion: (req, res, next) => {
        const idPromo = parseInt(req.params.id, 10);

        // const findStudents = students.filter(student => student.promo == idPromo);
        const query = `SELECT * FROM "student" WHERE "promo_id"=${idPromo}`;

        // const goodPromo = promos.find(promo => promo.id == idPromo)
        // 

        database.all(query, (error, findStudents) => {
            if (error) {
                console.trace(error);
                res.status(500).send(error);
            } else {
                // res.render('students', {
                //     findStudents: student,
                //     // goodPromo: student,
                // });
                const queryPromo = `SELECT * FROM "promo" WHERE "id"=${idPromo}`;
                // On veut seulement le premier résultat donc au lieu d'aller recupérer tous les résultats avec
                //database.all ===========> On prefera utiliser database.get (=> qui lui récup le premier)
                database.get(queryPromo, (error2, goodPromo) => {
                    if (error2) {
                        console.trace(error2);
                        res.status(500).send(error2);
                    } else {
                        if (goodPromo) {
                            res.render('students', {
                                findStudents,
                                goodPromo,
                            });
                        } else {
                            next();
                        };
                    };
                });
            };
        });
        // if (goodPromo){
        //     res.render('students', {
        //         findStudents,
        //         goodPromo,
        //     });
        // } else {
        //     // Pour passer au middleware suivant, càd notFound
        //     // Les autres middlewares ne captureront pas ce next() car il ne correspond pas à leur route
        //     next();
        // };
    },
};

module.exports = promotionsController;
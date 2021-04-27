// const promos = require('../../data/promos.json');
// const students = require('../../data/students.json');

// SQlite pour voir comment ça marche 
// const sqlite3 = require('sqlite3');
// const database = new sqlite3.Database('trombi.db');

// Maintenant POSTGRES

// Comment pour React et semantic ui react par exmeple on peut require directement dans un objet 
// { Client } au lieu de faire
// const pg = require('pg');
// const client = new pg.Client(); VOIR DATABASE.JS

// Plutot que de créer une nouvelle connexion à chaque fois qu'on en à besoin, on se sert de notre
// client partagé qu'on a juste à require.

// On utilise p^lus database ici mais dans dataMapper, qui lui require 
// const client = require('../database');
const dataMapper = require('../dataMapper');

const promotionsController = {
    // Afficher la liste des promos
    displayPromotions: (req, res, next) => {
        // Version Sqlite3
        // Vers DataMapper
        // const query = `SELECT * FROM "promo"`;
        // Au lieu d'écrire data, on ecrit le nom de ce que l'on recup
        // Avant avec sqlite3 
        // database.all(query, (error, promos) => {
        // client.query(query, (error, data) => {
        dataMapper.getAllPromo((error, data) => {
            if (error) {
                console.trace(error);
                res.status(500).send(error);
            } else {
                // On affiche la view promo
                // en lui passant la liste des promotions
                res.render('promos', {
                    // du coup ES6
                    // promos: promos,
                    // promos,
                    promos: data.rows
                });

                // Finalement non on laisse la connexion ouverte
                // client.end();
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

        // Direction dataMapper, pour garder ${idPromo} on le passe en parametre dans DM
        // const query = `SELECT * FROM "student" WHERE "promo_id"=${idPromo}`;

        // const goodPromo = promos.find(promo => promo.id == idPromo)
        // 

        // client.query(query, (error, data) => {
        dataMapper.getStudentsFromPromotion(idPromo, (error, data) => {
            if (error) {
                console.trace(error);
                res.status(500).send(error);
            } else {
                // res.render('students', {
                //     findStudents: student,
                //     // goodPromo: student,
                // });


                // const queryPromo = `SELECT * FROM "promo" WHERE "id"=${idPromo}`;
                // On veut seulement le premier résultat donc au lieu d'aller recupérer tous les résultats avec
                //database.all ===========> On prefera utiliser database.get (=> qui lui récup le premier)
                // database.get(queryPromo, (error2, goodPromo) => {
                dataMapper.getPromo(idPromo, (error2, data2) => {
                    if (error2) {
                        console.trace(error2);
                        res.status(500).send(error2);
                    } else {
                        if (data2.rowCount) {
                            res.render('students', {
                                findStudents: data.rows,
                                goodPromo: data2.rows[0],
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
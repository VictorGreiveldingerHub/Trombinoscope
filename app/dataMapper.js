// SoC : Le role de ce module c'est de centralisé toute les requete SQL nécessaire à notre application
// à chaque fois qu'on aura besoin d'une donnée, on ne retapera pas la requete on viendra chercher la 
// méthode correspondante.
const client = require('./database');

// Dans ce module on définit une méthode pour une requete
const dataMapper = {

    getAllPromo: (callback) => {
        // Méthode pour récup toutes les promos
        const query = `SELECT * FROM "promo"`;
        // Je lance la requete mais le callback je ne le définis pas dans dataMapper
        client.query(query, callback);
    },

    getAllStudents: (callback) => {
        const query = "SELECT * FROM student";
        client.query(query, callback);
    },

    getStudentsFromPromotion: (idPromo, callback) => {
        const query = `SELECT * FROM "student" WHERE "promo_id"=${idPromo}`;
        client.query(query, callback);
    },

    getPromo: (idPromo, callback) => {
        const query = `SELECT * FROM "promo" WHERE "id"=${idPromo}`;
        client.query(query, callback);
    },

    addStudent: (studentInfo, callback) => {
        const query = `INSERT INTO "student" (
            "first_name",
            "last_name",
            "github_username",
            "promo_id"
        ) VALUES (
            ${studentInfo.firstName},
            ${studentInfo.lastName},
            ${studentInfo.githubUsername},
            ${studentInfo.promoId}
        )`;
        client.query(query, callback);
    },
};

module.exports = dataMapper;
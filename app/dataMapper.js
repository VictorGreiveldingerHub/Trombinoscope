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
        // Pour éviter les attaques par injection SQL, on ne met pas ${idPromo} dans la requete
        // On prépare avec $1 et un tableau les informations qui vont être intégrées
        // const query = `SELECT * FROM "student" WHERE "promo_id"=${idPromo}`;
        const query = `SELECT * FROM "student" WHERE "promo_id"=$1`;
        const values = [idPromo];
        // Et on le passe en paramètre 
        client.query(query, values, callback);
    },

    getPromo: (idPromo, callback) => {
        // Idem
        const query = `SELECT * FROM "promo" WHERE "id"=$1`;
        const values = [idPromo];
        client.query(query, values, callback);
    },

    addStudent: (studentInfo, callback) => {
        const {first_name, last_name, github_username, promo} = studentInfo;
        // const query = `INSERT INTO "student" (
        //     "first_name",
        //     "last_name",
        //     "github_username",
        //     "promo_id"
        // ) VALUES (
        //     '${first_name}',
        //     '${last_name}',
        //     '${github_username}',
        //     '${promo}'
        // )`;
        const query = `INSERT INTO "student" (
            "first_name",
            "last_name",
            "github_username",
            "promo_id"
        ) VALUES ($1, $2, $3, $4)`;
        const values = [first_name, last_name, github_username, promo];
        client.query(query, values, callback);
    },
};

module.exports = dataMapper;
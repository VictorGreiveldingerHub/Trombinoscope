// On test d'abord pg dans un fichier pour comprendre comment il marche et comment on se connecte 
// à la BDD.

const { Client } = require('pg');

// On créé un client

// const db_url = "protocole://login:password@domaine:port/path"; // == chaine de caractere au format URL 
// https://localhost:3000/home par exmeple

// Pour la sécurité on place cette url dans .env pour que personne ne puisse voir le mdp de la bdd
// const db_url = "postgres://user:mdp@localhost/trombi";
// Et on utilise le module dotenv
require('dotenv').config();
const client = new Client(process.env.PG_URL);


// Ici on ouvre la connection à la BDD, un peu à la manière de psql -U ... etc 
client.connect();

client.query(`SELECT * FROM "promo"`, (error, data) => {
    if (error) {
        console.trace(error);
    } else {
        // console.log(data);
        // d'après la réponse node test_pg.js les vraies données sont dans data.rows
        console.log(data.rows);
    };

    // Et donc on doit venir fermé la connection à la fin de la requete à la maniere de ctrl d dans la console
    client.end();
});
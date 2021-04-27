// SoC : le rôle de ce fichier est de se connecter une bonne fois pour toute au serveur de la BDD
// et d'exporter la connexion OUVERTE

// Ainsi à chaque fois qu'on à besoin d'une connexion à la BDD, on aura juste à require ce module

const { Client } = require('pg');

const client = new Client(process.env.PG_URL);

client.connect();


module.exports = client;
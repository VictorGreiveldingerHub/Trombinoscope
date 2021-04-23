const sqlite3 = require('sqlite3');
const database = new sqlite3.Database('./trombi.db');

const query = "SELECT * FROM student WHERE first_name LIKE '%max%' OR last_name LIKE '%max%'";
console.log(query);

const resultats = database.all(query, (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    };
});
// console.log(resultats);
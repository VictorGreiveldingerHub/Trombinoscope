// const students = require('../../data/students.json');
const sqlite3 = require('sqlite3');
const database = new sqlite3.Database('./trombi.db');

const studentsController = {
    showAllStudents: (req, res) => {
        // const findStudents = students.filter(student => student);
        // console.log(findStudents);

        const query = "SELECT * FROM student";

        database.all(query, (error, data) => {
            if (error) {
                console.trace(error);
                res.status(500).send(error);
            } else {
                res.render('students', {
                    findStudents: data,
                });
            };
        });
        // res.render('students', {
        //     findStudents: students,
        // });
    },
};

module.exports = studentsController;
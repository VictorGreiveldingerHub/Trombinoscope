// const students = require('../../data/students.json');
// const sqlite3 = require('sqlite3');
// const database = new sqlite3.Database('./trombi.db');

// Direction dataMapper
// const client = require('../database');
const dataMapper = require('../dataMapper');

const studentsController = {
    showAllStudents: (req, res) => {
        // const findStudents = students.filter(student => student);
        // console.log(findStudents);

        // Direction dataMapper
        // const query = "SELECT * FROM student";

        // dataMapper
        // client.query(query, (error, data) => {
        dataMapper.getAllStudents((error, data) => {
            if (error) {
                console.trace(error);
                res.status(500).send(error);
            } else {
                res.render('students', {
                    findStudents: data.rows,
                });
            };
        });
        // res.render('students', {
        //     findStudents: students,
        // });
    },
};

module.exports = studentsController;
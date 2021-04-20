const students = require('../../data/students.json');

const studentsController = {
    showAllStudents: (req, res) => {
        // const findStudents = students.filter(student => student);
        // console.log(findStudents);
        res.render('students', {
            findStudents: students,
        });
    },
};

module.exports = studentsController;
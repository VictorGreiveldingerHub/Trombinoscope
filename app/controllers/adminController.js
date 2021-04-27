const dataMapper = require('../dataMapper');

const adminController = {

    showAddStudentForm: (req, res) => {
        dataMapper.getAllPromo((error, data) => {
            if (error) {
                console.trace(error);
                res.status(500).send(error);
            } else {
                res.render('admin/addStudent', {
                    allPromos: data.rows,
                });
            };
        });
    },

    addStudent: (req, res) => {
        const studentInfo = {
            firstname,
            lastname,
            githubUsername,
            promoId
        };
        console.log('Info student :',studentInfo)
        dataMapper.addStudent(studentInfo, (error, data) => {
            if (error) {
                console.trace(error);
                res.status(500).send(error);
            } else {
                res.redirect(`/promotion/${promoId}`).send(studentInfo);
            };
        });
    },
};

module.exports = adminController;
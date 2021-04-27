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
        // Grâce au urlencoded les infos du formulaire sont dans req.body
        // Première chose à faire : NTUI !!!
        // Never TRust Users Input
        // On vérifie donc que les données sont cohérentes
        // y'a t'il un prénom ? un last_name etc ...
        if (!req.body.first_name || !req.body.last_name || !req.body.github_username || !req.body.promo) {
            return res.redirect('/admin/addStudent'); // Pour éviter le else ==> return
        };
        dataMapper.addStudent(req.body, (error, data) => {
            if (error) {
                console.trace(error);
                console.log(req.body);
                res.status(500).send(error);
            } else {
                console.log(data);
                res.redirect('/promotion/'+ req.body.promo);
            };
        });
    },
};

module.exports = adminController;
// SoC : l'unique rôle de ce module, c'est d'afficher la page d'acceuil
const mainController = {
    homePage: (req, res) => {
        res.render('index');
    },
    
    notFound: (req, res) => {
        res.status(404).render('404');
    },
};

module.exports = mainController;
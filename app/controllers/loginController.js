// Ce controller va servir à gérer la page /login
// 2 méthodes : 
// Une pour afficher le formulaire
// Une pour traiter le formulaire (POST)

const loginController = {
    // Affiche le form
    showLoginForm: (req, res) => {
        res.render('login');
    },

    // Traite le form
    handleLoginForm: (req, res) => {
        console.log("traiter le formulaire")
        // l'information qui m'interesse (le username) est dans req.body
        const username = req.body.username;

        // si on a pas d'info, on redirige
        if (!username) {
            return res.redirect('/login');
        };

        // Si j'ai un nom d'utilisateur (dans le futur, j'irai vérifer le mot de passe ...)

        // Aujourd'hui on laisse tout le monde entrer
        // je vais donc DIRE ("répondre") au navigateur "enregistre cette info dans un cookie"
        // pour faire ça, on utilise la méthode "cookie" de res
        res.cookie('username', username);

        // maintenant que l'info est dans un cookie, je peux rediriger vers '/'
        res.redirect('/');
        
    },
};

module.exports = loginController;
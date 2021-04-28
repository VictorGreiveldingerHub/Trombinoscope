// SoC : l'unique rôle de ce module, c'est d'afficher la page d'acceuil
const mainController = {
    homePage: (req, res) => {
        // SESSIONS ET COOKIES

        // PREMIERE METHODE EN UTILISANT COOKIE-PARSER !!!!!
        // // Afficher les cookies (dans la console nav => document.cookie = "username=truc")
        // // Tant que nous ne fermerons pas le nav, on aura en réponse au console.log => username=truc
        // // PERSISTANCE DE DONNEES STOCKES DANS LE NAV !!
        console.log(req.headers.cookie); // On peut voir une clé id maintenant (= avec express-session)

        // // Premier constat, req.headers.cookie est une chaine de caractère, c'est très difficile à
        // // manipuler => on va utiliser un middleware pour transformer ça ! === cookie-parser
        // console.log(req.cookies); // maintenant on a bien un objet !

        // /**
        //  * Premiere version :
        //  * on va tester si "username" est présent dans les cookie
        //  * 
        //  * si c'est le cas, on envoie la view index (page d'acceuil)
        //  * on appelle la méthode render de la réponse, en lui passant le nom de l'utilisateur connecté
        //  * 
        //  * sinon on redirige vers l'url de connexion (/login)
        // */

        // if (req.cookies.username) {
        //     res.render('index', {
        //         username: req.cookies.username,
        //     });
        // } else {
        //     res.redirect('/login');
        // }

        // DEUXIEME METHODE EN UTILISANT EXPRESS-SESSION !!!!
        console.log(req.session);
        // plutot que de tester la présence de username dans les cookies, on test la présence 
        // de username dans la session
        if (req.session.username) {
            res.render('index', {
                username: req.session.username
            });
        } else {
            // y'a rien dans la session ==> va te connecter
            res.redirect('/login');
        };
    },
    
    notFound: (req, res) => {
        res.status(404).render('404');
    },
};

module.exports = mainController;
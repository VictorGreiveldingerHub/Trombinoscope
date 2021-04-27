# Ecrire des rêquetes SQL pour obtenir les infos suivantes :

## toutes les promos, dans l'ordre alphabétique
SELECT * FROM promo ORDER BY name ASC;

## tous les étudiants, dans l'ordre alphabétique des noms de famille
SELECT * FROM student ORDER BY last_name ASC;

## tous les étudiants de la promo 135
SELECT * FROM student WHERE promo_id=135;

## les étudiants dont le nom ou le prénom ressemble à "max"
SELECT * FROM student WHERE first_name LIKE '%max%' OR last_name LIKE '%max%';


Requêtes depuis le serveur
En t'inspirant de ce qui a été fait dans test.js, et dans promotionController.js, modifie la méthode showAllStudents du studentController pour qu'elle utilise une requête SQL.

Bonus
Sur le même principe, modifie la méthode showStudentsInPromotion.

Quand tu es sur de toi, supprime les fichiers json du dossier data !


# Challenge SO4E03
Écrire (dans le même fichier que la veille), les requêtes SQL pour :
Insérer un nouvel étudiant dans la table correspondante.
INSERT INTO "student" VALUES
    ('48484', 'Jean', 'René', 'jeanRené', '135');

Insérer une nouvelle promo dans la table correspondante.
INSERT INTO "promotion" VALUES
    ('48484', 'Prométhé', 'https://github.com/O-clock-Prométhé');

Modifier le prénom d'un étudiant.
UPDATE "student" SET "first_name" = 'Jeannot' WHERE "id" = '42';

Supprimer un étudiant selon son id.
DELETE FROM "student" WHERE "id" = 42; 

# *NodeJS/React*

![yeah christmas](https://media.giphy.com/media/11EjiLDatd0syA/giphy.gif)

## Fais ta liste au Père Noël !

![type](https://media.giphy.com/media/RRerwvHrb0nxm/giphy.gif)

## Instructions

**Cloner** ce repo (**ne pas faire un fork**).

Dès le début, créer une branche indiquant ta ville et ton nom/prénom, par exemple `toulouse_dupont_martin`.

A la fin du test, **faire une Pull Request**. 

Le dépôt contient les répertoires suivants:
* `front/` : Le projet en React (généré _via_ `create-react-app`)
* `back/` : Le projet Node.js

## Étape 1 - le front

Pour le front tu devras :
* Afficher l'ensemble des cadeaux
* Ajouter la possibilité d'ajouter un cadeau _via_ le formulaire présent
* Permettre de supprimer un cadeau au clic sur la croix

Quelques indications :
* Un composant `Gift` t'est fourni, et il est appelé depuis `App`.
* Il faut adapter le code de façon à pouvoir passer des props à `Gift`, et de façon à afficher la liste en fonction du tableau stocké dans le state de `App`.
* Pour l'instant, toutes les fonctionnalités peuvent être implémentées uniquement sur le front (manipuler la liste des cadeaux dans le state)

## Étape 2 - le back

Pour la partie back tu auras trois routes principales sur le `/` : 

* `GET /` : Récupération des cadeaux
* `POST /` : Création du cadeau 
* `DELETE /:id` : Suppression du cadeau spécifié par un certain `id`

Ces trois routes seront à implémenter dans le fichier `routes/index.js` qui est déjà fourni.

Pour les données :
* La route pour récupérer les cadeaux existe déjà, et lit simplement les fichiers depuis un fichier JSON (`data/gifts.json`)
* Tu peux commencer par connecter ton front et ton back, pour afficher, sur le front, la liste récupérée depuis le back
* Tu pourras ensuite créer une base de données (tu n'as besoin que d'une table) pour y stocker les cadeaux.
* Il faudra alors remplacer le code de la route existante, de façon à lire les cadeaux depuis la base de données
* Il faudra également implémenter les routes pour ajouter et effacer un cadeau dans la base de données

## Etape 3 - Front + back

* Le formulaire d'ajout devra envoyer les données vers le back pour ajouter un cadeau dans la BDD, et l'ajouter à la liste des cadeaux affichés
* La petite croix permettra de supprimer un cadeau dans la base de données, et de le supprimer de la liste sur le front

### (bonus) Sympa une belle liste, mais l'idée, c'est quand même que Santa la reçoive non ?
  
* En utilisant NodeMailer, envoie un mail à ton Santa préféré, voilà son adresse: thomas.lechevalier@wildcodeschool.fr)

![joy](https://media.giphy.com/media/26n62j7cS0aZOYCu4/giphy.gif)

Tu peux te baser sur la quête [Envoyer un email](https://odyssey.wildcodeschool.com/quests/124).

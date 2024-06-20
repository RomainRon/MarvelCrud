const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
const database = require ("./database")

/**
 * Configuration de mustache
 * comme moteur de template
 * pour l'extension .mustache
 */
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

/**
 * Configuration de express
 * pour récupérer les données d'un formulaire
 * et pour servir les fichiers statiques
 * (css, js, images, etc.)
 */

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Routes à ajouter ici
app.get('/personnages', (req, res) => {
    res.send('Home');
  });
  app.get('/personnages/:id', (req, res) => {
    res.send('Home');
  });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
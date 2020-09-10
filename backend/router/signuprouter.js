const express = require("express");
const route = express.Router();
const authentifController = require("../controler/signupcontroler");
7;
const TokenVerif = require("../controler/authToken");
const { register, login, getProfil } = require("../controler/signupcontroler");

/***************** User Authentification ************ */
route.post("/register", authentifController.register);
route.post("/login", authentifController.login);
route.get("/profil", TokenVerif, authentifController.getProfil);
route.post("/logout",authentifController.logout)

//route.post("/logout", authentifController.logout);
module.exports = route;

// router.post("/ajouter", compteControler.ajoutcompte);
// router.delete("/supprimer/:id", compteControler.supprimercompte);
// router.patch("/changer/:id", compteControler.modifiercompte);
// module.exports = router;

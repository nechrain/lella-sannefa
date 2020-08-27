const express = require("express");
const router = express.Router();
const compteControler = require("../controler/signupcontroler")




/***************** User Authentification ************ */
route.post("/register", authentifController.register);
route.post("/login", authentifController.login);
route.get("/profil", authentifController.getProfil);
route.post("/logout", authentifController.logout);
module.exports = route;

// router.post("/ajouter", compteControler.ajoutcompte);
// router.delete("/supprimer/:id", compteControler.supprimercompte);
// router.patch("/changer/:id", compteControler.modifiercompte);
// module.exports = router;

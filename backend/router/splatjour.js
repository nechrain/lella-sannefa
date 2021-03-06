const express = require("express");
const router = express.Router();
const splatjourControler = require("../controler/splatjour");

router.get("/gettallplats", splatjourControler.getPlatjourS);
router.post("/ajouter", splatjourControler.addPlatjourS);
router.delete("/supprimer/:id", splatjourControler.deletePlatjourS);
router.patch("/changer/:id", splatjourControler.editPlatjourS);
router.patch("/publier/:id", splatjourControler.publishPlatjourS);
router.get("/getidplat/:id", splatjourControler.getidplat);

module.exports = router;

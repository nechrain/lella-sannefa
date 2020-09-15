const Splatjour = require("../model/splatjour");

module.exports = {
  /* get plates*/
  getPlatjourS: (req, res) => {
    Splatjour.find(function (err, data) {
      if (err) res.send(err);
      res.send(data);
    });
  },

  /* adding  plates*/
  addPlatjourS: async (req, res) => {
    console.log({ ...req.body, state: "non publiee" });
    const nouveauplat = await new Splatjour(req.body);
    nouveauplat
      .save()
      .then((status) =>
        res.status(200).send("votre plat du jour a été bien ajouté")
      )
      .catch((err) => res.status(500).send("error server"));
  },

  /* deleting plates*/
  deletePlatjourS: (req, res) => {
    console.log(`${req.params.id}deleted`);
    Splatjour.findByIdAndDelete(req.params.id)
      .then(res.json("plat du jour a été bien supprimé"))
      .catch((err) => console.log(err));
  },

  /* modifying plates*/
  editPlatjourS: (req, res) => {
    console.log(req.body, req.params.id);
    Splatjour.findByIdAndUpdate(req.params.id, req.body)

      .then(() => {
        () => res.json(req.body);
        console.log(req.body);
      })
      .catch((err) => console.log(err))
      .then(() => res.json("vous pouvez changer votre plat du jour"));
  },

  /*******-*******************publier le plat************************* */
  publishPlatjourS: (req, res) => {
    Splatjour.findByIdAndUpdate(req.params.id, { state: "publiee" })

      .then((data) => {
        res.json(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  },

  /********************************obtenir contact sannefa pour plat******** */
  getidplat: (req, res) => {
    Splatjour.findOne({ _id: req.params.id })
      .populate("iduser")
      .exec((erreur, user) => {
        if (erreur) console.log("erreur", erreur);
        else {
          console.log(user.iduser);
          res.json(user.iduser);
        }
      });
  },
};

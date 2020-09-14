const express = require("express");
const mongoose = require("mongoose");
//const nodemon= require ("nodemon");
const cookie = require("cookie-parser");
const app = express();

app.use(cookie());
const multer = require("multer");
const port = 1305;
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"),
    res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  next();
});

const uri =
  "mongodb+srv://NessrineChammakhi:NessrineChammakhi@nesscluster.dieq5.mongodb.net/sannefa?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoDB Connected…");
  })

  .catch((err) => console.log(err));

const routerplatjS = require("./router/splatjour");
app.use("/platjour/", routerplatjS);

const routerinsription = require("./router/signuprouter");
app.use("/inscription", routerinsription);
// app.use("/authentification/",routerauthentification)

/*********************************************************** */
//upload image
const path = require("path");

//upload image/;
app.use(express.static("./public"));

app.get("/", (req, res) => res.send("index"));
// Set The Storage Engine
const storage = multer.diskStorage({
  destination: "./public",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 3000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("file");

app.post("/image", (req, res) => {
  upload(req, res, (err) => {
    console.log("immage", req.file);
    if (err) {
      res.send({ msg: "errrrrrrrrrrrrrr" });
    } else {
      if (req.file == undefined) {
        res.send({ msg: "Error: No File Selected!" });
      } else {
        if (req.file) res.send(req.file.filename);
        else res.send("file undefind");
      }
    }
  });
});

Controller js :

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
require("cookie-parser")();
const User = require("../models/userSchema");

module.exports = {
/********************************inscription************************* */
register: async (req, res) => {
try {
const { nom_prenom, email, password, role } = req.body;

user = new User({
nom_prenom,
email,
password,
role,
});
const salt = await bcrypt.genSalt(10);
user.password = await bcrypt.hash(password, salt);
await user.save();
/********************************/
const token = user.generateToken(); //héritage des méthodes
res.json({ token });
} catch (err) {
console.error(err.message);
res.status(500).send("Server error"); // 500 données fausses
}
},
/****************************************** CONNEXION ***************** ***/
login: async (req, res) => {
let user = await User.findOne({ email: req.body.email });
if (!user) {
return res.status(401).send("email ou password sont incorrects");
}

const checkPassword = await bcrypt.compare(
req.body.password,
user.password
);
if (!checkPassword) {
return res.status(401).send("email ou password sont incorrects");
}
try {
console.log(user);

let token = user.generateToken();

res
.cookie("token", token, {
expires: new Date(Date.now() + 900000000),
httpOnly: true,
})
.send(_.pick(user, ["nom_prenom", "email", "role"])); //////////////
} catch (err) {
console.log(err);
}
},

/********************************* get profil *********************** */
getProfil: async (req, res) => {
const token = req.cookies.token; // ijib token fil header mta3 req
if (!token) return res.send("error");
try {
let decodeToken = jwt.verify(token, "privateKey"); //décodage de token par privatekey
req.user = decodeToken;

const user = await User.findOne({ _id: req.user._id }).select(
"-password"
); //vérification(ilawij 3al user :identification)
res.send(user); // ijib user
} catch (e) {
res.send("token wrong ");
}
},
logout: async (req, res) => {
res.clearCookie("token").send("token deleted"); //cookie mnin yitb3ath yitfassa5 donc fil back
},
};

//fil browser fama storage pour le stockage parmi les on trouve local, cookie....
 route :

const route = require("express").Router();

const authentifController = require("../controllers/userController");
/***************** User Authentification ************ */
route.post("/register", authentifController.register);
route.post("/login", authentifController.login);
route.get("/profil", authentifController.getProfil);
route.post("/logout", authentifController.logout);
module.exports = route;

actions :
import axios from "axios";
import { REGISTER_SUCCESS, USER_LOADED, LOGIN_SUCCESS } from "./types";

export function register(el) {
console.log(el);
return (dispatch) =>
axios
.post("http://localhost:8000/chef-d'oeuvre/authentif/register", el)
.then((res) =>
dispatch(
{ type: REGISTER_SUCCESS, payload: res.data }
// console.log("amira", res.data)
)
)
.catch((err) => alert("Créez un compte"));
}

export function login(el) {
return (dispatch) =>
axios
.post("http://localhost:8000/chef-d'oeuvre/authentif/login", el, {
withCredentials: true,
})
.then(
(res) =>
dispatch(
{
type: LOGIN_SUCCESS,
payload: res.data,
},
localStorage.setItem("Role", res.data.role),
window.location.reload()
),

dispatch(getUser())
)
.catch((err) => alert("Créez un compte"));
}
export const getUser = () => async (dispatch) => {
try {
const res = await axios.get(
"http://localhost:8000/chef-d'oeuvre/authentif/profil",
{ withCredentials: true }
);
dispatch({
type: USER_LOADED,
payload: res.data,
});
} catch (err) {
console.log(err);
}
};
export function logout() {
return () =>
axios
.post(
"http://localhost:8000/chef-d'oeuvre/authentif/logout",
{},
{ withCredentials: true }
)
.then((rep) => {
console.log(rep.data);
if (rep.data === "token deleted") {
window.location.href = "/";
}
})
.catch((err) => console.log(err));
}

reducer :
import {USER_LOADED} from "../actions/types";

const initialState = []

const authReducer = (state = initialState, action) => {
if(action.type=== USER_LOADED){
return action.payload
}
else return state
};
export default authReducer;

types :

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const USER_LOADED = "USER_LOADED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

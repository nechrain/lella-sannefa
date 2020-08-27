import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./home.css";
import NavbarS from "../sannefa/navbar/navbar";
import Pub from "./carousel";

import Chercher from "./chercher";
import FooterC from "../client/footer/footer";
import CarteVisiteur from "./cartevisiteur";
import NavbarVisiteur from "./navbar/navbar";



const Home=()=>{
return (
<div >
<NavbarVisiteur/>
<Pub/>
<Chercher/>
 <CarteVisiteur/> 
<FooterC/>
 
</div> 
)
}

export default Home;
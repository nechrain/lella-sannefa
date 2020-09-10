import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./sannefa.css";
import NavbarS from "../navbar/navbar";
import AddPlatjour from "./ajoutplatjourS";
import CartePlatjourS from "./carteplatjourS";
import "../../visiteur/footer/footerV"
import Advertsment from "./publicité";
import FooterVisiteur from "../../visiteur/footer/footerV";





const PlatjourS = () => {
  return (
    <div>
      

    <NavbarS/>
 
 
  <Advertsment/>
    <AddPlatjour/>
   <CartePlatjourS/>
    <FooterVisiteur/>
  

     
    
    </div>
  );
};

export default PlatjourS;

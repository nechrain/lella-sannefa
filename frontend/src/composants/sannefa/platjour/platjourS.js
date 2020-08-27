import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./sannefa.css";
import NavbarS from "../navbar/navbar";
import AddPlatjour from "./ajoutplatjourS";
import CartePlatjourS from "./carteplatjourS";
import Footersannefa from "../footer/footer";
import Advertsment from "./publicité";





const PlatjourS = () => {
  return (
    <div>
      

    <NavbarS/>
 
 
  <Advertsment/>
    <AddPlatjour/>
   <CartePlatjourS/>
    <Footersannefa/>
  

     
    
    </div>
  );
};

export default PlatjourS;

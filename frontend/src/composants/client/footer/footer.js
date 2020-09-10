import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./footerclient.css";
import logo from "./logo.png";

const FooterC = () => {
  return (
    <div className="wave">
      <section className="footer">
     <center> <img src={logo} className="logoo" ></img> </center> 
        
      </section>
    </div>
  );
};

export default FooterC;

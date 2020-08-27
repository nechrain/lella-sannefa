import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./footerclient.css";
import logo from "./logo.png"
const Footersannefa = () => {
  return (
    <div>
      <section className="footer">
      <img src={logo} className="logoo" ></img>  
        <div className="wave">
          
        </div>
      </section>
    </div>
  );
};

export default Footersannefa;

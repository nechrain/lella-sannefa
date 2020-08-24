import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./client.css";
import Search from "./search";
import Footer from "../footer/footer";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import { MDBContainer, MDBRating } from "mdbreact";
import Searche from "./search";
import Footerclient from "../footer/footer";
import Navbar from "../navbar/navbar";
import ModalPage from "./modaldetails";
import CartePlat from "./carteplatjour";

const Platjour = () => {
  return (
    <div>
     <div className="containent">
        <Navbar />
        <Searche />
       <CartePlat/>
        <Footerclient/>
      </div>

     
    
    </div>
  );
};

export default Platjour;

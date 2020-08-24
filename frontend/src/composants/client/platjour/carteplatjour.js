
import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./client.css";

import ModalPage from "./modaldetails";
import {

  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
 
} from "mdbreact";
const CartePlat=()=>{
return (
<div className="cardes">
<MDBRow>
  <MDBCol md="4">
    <MDBCard cascade>
      <MDBCardImage
        cascade
        className="img-fluid"
        overlay="white-light"
        hover
        src="https://femmesdetunisie.com/wp-content/uploads/2015/12/Borghol.jpg"
      />
    <ModalPage/>
      <MDBCardBody cascade>
        <MDBCardTitle>Coucous bl 3alouch</MDBCardTitle>
        <hr />
        <MDBCardText>
          <MDBCardText> <b>Ingredient </b></MDBCardText>
          3alouch, felfel a7mer, kosksi smid, hrissa,zit zitouna
        </MDBCardText>
        <MDBCardText> <b>Prix:</b>  8 TND</MDBCardText>
      </MDBCardBody>

      <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
        <center>
          {" "}
          <div className="white-text"> Soliman Nabeul</div>
        </center>
      </div>
    </MDBCard>
  </MDBCol>
</MDBRow>
</div> 
)
}

export default CartePlat;
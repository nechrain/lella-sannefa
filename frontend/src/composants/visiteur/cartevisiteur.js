import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./home.css";
import DétailClient from "../client/platjour/modaldetails";
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

const CarteVisiteur = (props) => {
  return (
    <div>
      <MDBRow>
        <MDBCol md="4">
          <MDBCard style={{ width: "22rem" }} className="bottom">
            <center>
              {" "}
              <MDBCardImage
                cascade
                className="img-fluid w-100 p-3"
                overlay="white-light"
                hover
                style={{ height: "18rem" }}
                src={"http://localhost:1305/" + props.el.image}
              />
            </center>

            <MDBCardBody>
              <center>
                <div>
                  {" "}
                
                </div>
                <MDBCardTitle className="almond-text ml-1 font-weight-bold">
                  {props.el.title}
                </MDBCardTitle>
              </center>
              <hr />
              <MDBCardText>
                <MDBCardText>
                  {" "}
                  <b>Ingredient: </b>
                  {props.el.ingredient}
                </MDBCardText>
              </MDBCardText>
              <MDBCardText>
                {" "}
                <b>Prix:</b> {props.el.price}
              </MDBCardText>
            </MDBCardBody>

            <div className="rounded-bottom colorbottomcard text-center pt-3">
              <center>
                {" "}
                <div className="white-text">
                  {" "}
                  {props.el.gouvernorat} in {props.el.region}
                </div>
              </center>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default CarteVisiteur;

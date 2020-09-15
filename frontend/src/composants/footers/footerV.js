import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBCardTitle,
} from "mdbreact";
import "./footerVisiteur.css";
import logo from "./logo.png";
import FormFooter from "./formfooter";
const Footers = () => {
  return (
    <MDBFooter color="green" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol size="2">
            <img
              src={logo}
              className="bg-white  rounded-circle hoverable"
              width="70px"
            />
          </MDBCol>
          <MDBCol size="2"></MDBCol>
          <MDBCol size="3">
            <FormFooter />{" "}
          </MDBCol>
          <MDBCol size="2"></MDBCol>
          <MDBCol size="3" className="float-right">
            {" "}
            <div>
              <b>Abonnez vous sur nos réseaux</b>

              <div className="m mb-2 ml-3">
                <MDBIcon fab icon="twitter" size="3x" className="mr-4" />
                <MDBIcon fab icon="facebook" size="3x" className="mr-4" />
                <MDBIcon fab icon="google-plus-g" size="3x" />
              </div>
            </div>
          </MDBCol>
        </MDBRow>

        {/* fin part 1 footer */}
      </MDBContainer>

      <div className="footer-copyright text-center py-3 mt-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.lellaessanefa.tn"> lella essanefa.tn </a>{" "}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footers;

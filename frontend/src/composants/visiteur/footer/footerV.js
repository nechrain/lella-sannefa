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
const FooterVisiteur = () => {
  return (
    <div style={{ width: "100%" }}>
      {/* parts */}
      <MDBFooter color="green" className="font-small pt-4 mt-4 dark ">
        <MDBContainer fluid className="text-center text-md-left">
          {/* part 1 logo */}
          <div className="row">
            <div className="blockss col-md-2">
              <MDBCol>
                <img src={logo} className="logofooter"></img>
              </MDBCol>
            </div>

            {/* part 2 */}

            <div className="Fform blockss col-md-5">
              <FormFooter />
            </div>

            {/* part 3 */}
            <div className="blockss col-md-3">
              <MDBCardTitle>
                <b>Abonnez vous sur nos réseaux</b>
              </MDBCardTitle>
              <br></br>
              <div className="rowss">
                <MDBIcon fab icon="twitter" size="3x" />
                <MDBIcon fab icon="facebook" size="3x" />
                <MDBIcon fab icon="google-plus-g" size="3x" />
              </div>
            </div>
          </div>

          {/* fin part 1 footer */}
        </MDBContainer>

        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.lellaessanefa.tn"> lella essanefa.tn </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default FooterVisiteur;

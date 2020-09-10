import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footerVisiteur.css";
import logo from "./logo.png"
const FooterVisiteur = () => {
  return (
    <div>
    
    <MDBFooter color="green" className="font-small pt-4 mt-4 dark ">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>

          <MDBCol md="6">
           <img src={logo} className="logoo" ></img> 
          <h5 className="title">Lella essanefa</h5>
          </MDBCol>

          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <div>
              <span className="list-unstyled">
                <a href="#!">Link 1</a>
              </span>
              <span className="list-unstyled">
                <a href="#!">Link 2</a>
              </span>
              <span className="list-unstyled">
                <a href="#!">Link 3</a>
              </span>
              <span className="list-unstyled">
                <a href="#!">Link 4</a>
              </span>
              </div>
          </MDBCol>


        </MDBRow>
      </MDBContainer>
      
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.lellaessanefa.tn"> lella essanefa.tn </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterVisiteur;
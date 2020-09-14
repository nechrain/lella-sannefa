import React from "react";
import "./abouts.css";
import logoC from "./logo.png"

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import imgcontact from "./contact.jpg"
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation,
} from "mdbreact";

class Contact extends React.Component {
  state = {
    collapseID: "",
    email: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
 
  render() {
    console.log("hello", this.props.authReducer);
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="classicformpage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <span className="losss">Lella Essanafa</span>
                  <hr className="hr-light" />
                  <center>
                   <img   src={imgcontact}   className="imgout"    />
                  
                  </center>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                <MDBContainer>
  <MDBRow>
    <MDBCol md="12" >
      <form >
        <p className="h4 text-center mb-4 goodbye">Écrivez-nous</p>
        <label htmlFor="defaultFormContactNameEx" className="epais">
          Votre Nom
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="epais">
          Votre email
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="epais">
          Sujet
        </label>
        <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="epais">
          Votre message
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
        <div className="text-center mt-4">
                  <MDBBtn color="light-green" >
                 <span className="  Envoyer">  Envoyer</span>
                    <MDBIcon  icon="paper-plane" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}



export default Contact;

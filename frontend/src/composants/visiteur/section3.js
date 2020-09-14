import React from "react";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation,
} from "mdbreact";
import "./home.css";
import Publicité from "./tunisianFood/publicité";
import { Link, Router } from "react-router-dom";
class Section3 extends React.Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                   
                  
                    <h6 className="mb-4 title13">
                   " شبيك لبيك ،مع للا الصنافة ماكلة الدار بين إديك "
                    </h6>
                    <hr className="hr-light" />
                    <MDBBtn color="green"> 
                    {" "}
                      <Link to="/SignIn"><span className="titlesign"> Sign In</span></Link></MDBBtn>


                    <MDBBtn outline color="white">
                    {" "}
                    <Link to="/SignUp"><span className="titlesign">Sign up</span></Link>
                    </MDBBtn>

                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="6" className="mt-xl-7">
                  <Publicité />
                 
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default Section3;

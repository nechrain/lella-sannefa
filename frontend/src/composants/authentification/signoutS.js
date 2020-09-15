import React from "react";
import "./signup.css";
import { login, getUser } from "../../actions/authentification";
import { connect } from "react-redux";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import imgout from "./sannefaaa.jpeg";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation,
} from "mdbreact";

class SignoutS extends React.Component {
  state = {
    collapseID: "",
    email: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  componentDidMount() {
    this.props.getUser();
  }

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
      <div >
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
                    <img src={imgout} className="imgout" />
                    <MDBAnimation type="bounce" infinite>
                      <span className="goodbye">
                        Au revoir, notre cher sannefa ,<br></br>au prochain
                        rendez-vous.{" "}
                      </span>
                    </MDBAnimation>
                  </center>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBContainer className="placess">
                      <MDBCard
                        className="card-image"
                        style={{
                          backgroundColor: "grey",
                          width: "28rem",
                        }}
                      >
                        <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                          <div className="text-center">
                            <h3 className="white-text mb-5 mt-4 font-weight-bold">
                              <strong>SIGN</strong>
                              <a
                                href="#!"
                                className="green-text font-weight-bold"
                              >
                                <strong> IN</strong>
                              </a>
                            </h3>
                          </div>

                          <MDBInput
                            label="Votre email"
                            group
                            type="text"
                            validate
                            labelClass="white-text"
                            className="titlelabelS"
                            onChange={(e) =>
                              this.setState({ email: e.target.value })
                            }
                          />

                          <MDBInput
                            label="Votre mot de passe"
                            group
                            type="password"
                            validate
                            labelClass="white-text"
                            className="titlelabelS"
                            onChange={(e) =>
                              this.setState({ password: e.target.value })
                            }
                          />

                          <MDBRow className="d-flex align-items-center mb-4">
                            <div className="text-center mb-3 col-md-12">
                              <Link
                                to={
                                  this.props.authReducer.role === "sannefa"
                                    ? "/platjour"
                                    : "/client"
                                }
                              >
                                <MDBBtn
                                  color="green"
                                  rounded
                                  type="button"
                                  className="btn-block z-depth-1"
                                  onClick={() =>
                                    this.props.login({
                                      email: this.state.email,
                                      password: this.state.password,
                                    })
                                  }
                                >
                                  Sign in
                                </MDBBtn>
                              </Link>
                            </div>
                          </MDBRow>
                        </div>
                      </MDBCard>
                    </MDBContainer>
                  </MDBAnimation>
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

const mapDispatchToProps = (dispatch) => ({
  login: (x) => dispatch(login(x)),
  getUser: () => dispatch(getUser()),
});
const mapSTateToProps = (state) => ({
  authReducer: state.authReducer,
});

export default connect(mapSTateToProps, mapDispatchToProps)(SignoutS);

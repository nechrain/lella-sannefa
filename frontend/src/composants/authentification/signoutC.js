import React from "react";
import "./signup.css";
import { login, getUser } from "../../actions/authentification";
import { connect } from "react-redux";
import logo from "./logo.png"
import { Link } from "react-router-dom";
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


class SignoutC extends React.Component {
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
                    {" "}
                    <img src={logo} className="logooo"></img>{" "}
                  </center>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBContainer className="placess">
                      <MDBCard
                        className="card-image"
                        style={{
                          backgroundImage:
                            "url(https://d1e3z2jco40k3v.cloudfront.net/-/media/ducrosfr-2016/recipes/800/couscous_bio_800.jpg?vd=20200704T132211Z&hash=4BFB07DD08ED633E24F41EC7BE5D15F1)",
                          width: "28rem",
                        }}
                      >
                        <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                          <div className="text-center">
                            <h3 className="white-text mb-5 mt-4 font-weight-bold">
                              <strong>SIGN</strong>
                              <a
                                href="#!"
                                className="purple-text font-weight-bold"
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
                                  color="purple"
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

export default connect(mapSTateToProps, mapDispatchToProps)(SignoutC);

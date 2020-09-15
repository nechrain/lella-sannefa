import React from "react";

import { register, getUser } from "../../actions/authentification";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./logo.png";
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
  MDBCardTitle,
} from "mdbreact";

class SignUP extends React.Component {
  state = {
    collapseID: "",
  };
  componentDidMount() {
    this.props.getUser();
  }
  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  render() {
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
                            "url(https://www.elsekosberg.com/uploads/8/8/7/5/88759786/woman-holding-pan-with-food-3171154_orig.jpg)",
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
                                <strong> UP</strong>
                              </a>
                            </h3>
                          </div>

                          <div>
                            <span className="title2">Choisi ton ROLE</span>
                            <select
                              className="browser-default custom-select"
                              onChange={(e) =>
                                this.setState({ role: e.target.value })
                              }
                            >
                              <option value="">Role</option>
                              <option value="client">Client</option>
                              <option value="sannefa">Sannefa</option>
                            </select>
                          </div>
                          <MDBInput
                            label="Prénom"
                            group
                            type="text"
                            validate
                            labelClass="white-text"
                            className="titlelabelS"
                            onChange={(e) =>
                              this.setState({ firstname: e.target.value })
                            }
                          />
                          <MDBInput
                            label="Nom"
                            group
                            type="text"
                            validate
                            labelClass="white-text"
                            className="titlelabelS"
                            onChange={(e) =>
                              this.setState({ name: e.target.value })
                            }
                          />
                          <MDBInput
                            label="Votre numéro de téléphone"
                            group
                            type="number"
                            validate
                            labelClass="white-text"
                            className="titlelabelS"
                            onChange={(e) =>
                              this.setState({ phone: e.target.value })
                            }
                          />
                          <MDBInput
                            label="Votre email"
                            group
                            type="text"
                            validate
                            labelClass="white-text"
                            className="titlelabelS"
                            onChange={(e) =>
                              this.setState({ mail: e.target.value })
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

                          <div className="md-form pb-3">
                            <MDBInput
                              label={
                                <>
                                  Accept the&nbsp;
                                  <a
                                    href="#!"
                                    className="green-text font-weight-bold"
                                  >
                                    Terms and Conditions
                                  </a>
                                </>
                              }
                              type="checkbox"
                              id="checkbox1"
                              labelClass="white-text"
                            />
                          </div>
                          <MDBRow className="d-flex align-items-center mb-4">
                            <div className="text-center mb-3 col-md-12">
                              <MDBBtn
                                color="success"
                                rounded
                                type="button"
                                className="btn-block z-depth-1"
                                onClick={() =>
                                  this.props.register({
                                    name: this.state.name,
                                    firstname: this.state.firstname,
                                    phone: this.state.phone,
                                    mail: this.state.mail,
                                    password: this.state.password,
                                    role: this.state.role,
                                  })
                                }
                              >
                                Sign up
                              </MDBBtn>
                            </div>
                          </MDBRow>
                          <MDBCol md="12">
                            <p className="font-small white-text d-flex justify-content-end">
                              Have an account?
                              <Link to="/SignIn">
                                <span className="green-text ml-1 font-weight-bold">
                                  {" "}
                                  Sign In
                                </span>
                              </Link>
                            </p>
                          </MDBCol>
                        </div>
                      </MDBCard>
                    </MDBContainer>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  register: (x) => dispatch(register(x)),
  getUser: () => dispatch(getUser()),
});
const mapSTateToProps = (state) => ({
  authReducer: state.authReducer,
});

export default connect(mapSTateToProps, mapDispatchToProps)(SignUP);

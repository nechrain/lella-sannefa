import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./home.css";
import { getPlatJourSData } from "../../actions/sannefaaction";
import { connect } from "react-redux";
import DétailClient from "./modalclient";
import Section3 from "./section3";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBAnimation,
} from "mdbreact";

import NavbarC from "../navbars/navbarC";
import Footers from "../footers/footerV";
import Publicité from "./tunisianFood/publicité";

class Client extends React.Component {
  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  state = {
    region: "",
    title: "",
    Filter: { title: "", region: "" },
    collapsed: false,
    FilteredPlatDuJourS: this.props.platdujourS,
  };

  componentDidMount() {
    this.props.platJour();
    this.setState({ FilteredPlatDuJourS: this.props.platdujourS });
  }

  handleClickFilter = () => {
    this.setState({
      Filter: { title: this.state.title, region: this.state.region },
    });
  };

  render() {
    return (
      <div>
        <NavbarC />

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

        <MDBContainer>
         <center> <MDBRow className="mt-4 mb-3 align-items-center">
            <MDBCol>
              <div className="form-group">
                <input
                  placeholder="Selectionner votre région"
                  size="small"
                  type="text"
                  className="form-control form-control-md ml-1 mt-3 "
                  onChange={(e) => this.setState({ region: e.target.value })}
                />
              </div>
            </MDBCol>

            <MDBCol>
              {" "}
              <div className="form-group">
                <input
                  placeholder="Selectionner votre titre"
                  size="small"
                  type="text"
                  className="form-control form-control-md mt-3"
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
              </div>
            </MDBCol>
            <MDBCol>
              {" "}
              <button
                type="button"
                class="btn btn-pink"
                onClick={() => this.handleClickFilter()}
              >
                Rechercher
              </button>
            </MDBCol>
            
          </MDBRow>
          </center>
          <div className="groupse">
            {this.props.platdujourS
              .filter((el) => {
                if (this.state.region !== "") {
                  return el.region
                    .toLowerCase()
                    .includes(this.state.Filter.region.toLowerCase());
                } else {
                  return el;
                }
              })
              .filter((el) => {
                if (this.state.title !== "") {
                  return el.title
                    .toLowerCase()
                    .includes(this.state.Filter.title.toLowerCase());
                } else {
                  return el;
                }
              })
              .filter((el) => el.state === "publiee")
              .map((el) => (
                <>
                  <MDBCol md="4" className="mb-4  p-3">
                    <MDBCard style={{ width: "22rem" }}>
                      <center>
                        <MDBCardImage
                          cascade
                          className="img-fluid w-100 p-3"
                          overlay="white-light"
                          hover
                          style={{ height: "18rem" }}
                          src={"http://localhost:1305/" + el.image}
                        />
                      </center>
                      <MDBCardBody>
                        <center>
                          <MDBCardTitle className="almond-text ml-1 font-weight-bold">
                            {el.title}
                          </MDBCardTitle>
                        </center>
                        <hr></hr>
                        <DétailClient idplat={el._id} />
                        <MDBCardText>
                          <MDBCardText>
                            {" "}
                            <b>Ingredient: </b>
                            {el.ingredient}
                          </MDBCardText>
                        </MDBCardText>
                        <MDBCardText>
                          {" "}
                          <b>Prix:</b> {el.price} TND
                        </MDBCardText>
                        {/* <DétailClient /> */}
                      </MDBCardBody>

                      <div className="rounded-bottom mdb-color green text-center pt-3">
                        <center>
                          {" "}
                          <div className="white-text mb-3"> {el.region}</div>
                        </center>
                      </div>
                    </MDBCard>
                  </MDBCol>
                </>
              ))}
          </div>
        </MDBContainer>
        <Footers />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  platdujourS: state.platdujourSS,
});
const mapDispatchToProps = (dispatch) => ({
  platJour: () => dispatch(getPlatJourSData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Client);

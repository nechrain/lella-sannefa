import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./home.css";
import { getPlatJourSData } from "../../actions/sannefaaction";
import { connect } from "react-redux";
import DétailClient from "./modalclient";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdbreact";

import NavbarC from "././../client/navbar/navbar";
import FooterVisiteur from "./footer/footerV";
import NavbarS from "../sannefa/navbar/navbar";
class CarteClient extends React.Component {
  componentDidMount() {
    this.props.platJour();
  }
  state = {
    region: "",
  };
  render() {
    return (
      <div>
        <div className="navspace">
        <NavbarS/>
          <div className="optionss">
            {/* partie 1 */}
            <div>
              <select className="browser-default custom-select title3">
                <option value="1">Ariana</option>
                <option value="2">Béja</option>
                <option value="3">Ben Arous</option>
                <option value="4">Bizerte</option>
                <option value="5">Gabès</option>
                <option value="6">Gafsa</option>
                <option value="7">Jendouba</option>
                <option value="8"> Kairouan</option>
                <option value="9">Kasserine</option>
                <option value="10">Kébili</option>
                <option value="11">kef</option>
                <option value="12">Mahdia</option>
                <option value="13">Manouba</option>
                <option value="14">Médenine</option>
                <option value="15">Monastir</option>
                <option value="16">Nabeul</option>
                <option value="17">Sfax</option>
                <option value="18">Sidi Bouzid</option>
                <option value="19">Siliana</option>
                <option value="20">Sousse</option>
                <option value="21">Tataouine</option>
                <option value="22">Tozeur</option>
                <option value="23">Tunis</option>
                <option value="24">Zaghouan</option>
              </select>
            </div>

            {/* partie 2 */}
            {/* <div> 
               <div class="container">
  <span id="rateMe2"  class="empty-stars"></span>
</div>

<!-- rating.js file -->
<script src="js/addons/rating.js"></script>
                   </div> */}
            <div className="form-group">
              <label htmlFor="example1"></label>
              <input
                type="text"
                id="example1"
                className="form-control form-control-md title2"
                onChange={(e) => this.setState({ region: e.target.value })}
              />
            </div>
            {/* partie 3 */}
          </div>
          <div></div>
        </div>

        <MDBContainer className="groupse">
          {this.props.platdujourS
            .filter((el) => this.state.region ?el.region == this.state.region : el)
            .map((el) => (
              <>
                <MDBRow>
                  <MDBCol md="4">
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
                        <hr />
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
                          <b>Prix:</b> {el.price}
                        </MDBCardText>
                        {/* <DétailClient /> */}
                      </MDBCardBody>

                      <div className="rounded-bottom mdb-color green text-center pt-3">
                        <center>
                          {" "}
                          <div className="white-text">
                            {" "}
                            {el.gouvernorat} in {el.region}{" "}
                          </div>
                        </center>
                      </div>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </>
            ))}
        </MDBContainer>
        <div className="footerspace">
          <FooterVisiteur />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CarteClient);

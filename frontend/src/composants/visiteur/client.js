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

import NavbarC from "../navbars/navbarC";
import Footers from "../footers/footerV";

class Client extends React.Component {
  componentDidMount() {
    this.props.platJour();
  }
  state = {
    region: "",
  };
  render() {
    return (
      <div>
        <NavbarC />
        <MDBContainer>
          <MDBRow className="mt-4 mb-3">
            <div className="form-group">
              <input
                placeholder="Selectionner votre région"
                size="small"
                type="text"
                className="form-control form-control-md "
                onChange={(e) => this.setState({ region: e.target.value })}
              />
            </div>
          </MDBRow>
          <div className="groupse">
            {this.props.platdujourS
              .filter((el) =>
                this.state.region
                  ? el.region == this.state.region ||
                    el.title == this.state.region
                  : el
              )
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
                          <b>Prix:</b> {el.price}
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

{
  /* partie 1 */
}

{
  /* partie 2 */
}
{
  /* <div> 
               <div class="container">
  <span id="rateMe2"  class="empty-stars"></span>
</div>

<!-- rating.js file -->
<script src="js/addons/rating.js"></script>
                   </div> */
}

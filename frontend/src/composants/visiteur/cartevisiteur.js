import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./home.css";
import { getPlatJourSData } from "../../actions/sannefaaction";
import { connect } from "react-redux";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

class CarteVisiteur extends React.Component {
  componentDidMount() {
    this.props.platJour();
  }
  state = {
    region: "",
  };
  render() {
    return (
      <div>
        <MDBRow className="mt-4 mb-3">
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
                  <MDBCol md="4">
                    <MDBCard style={{ width: "22rem" }} className="bottom">
                      <center>
                        {" "}
                        <MDBCardImage
                          cascade
                          className="img-fluid w-100 p-3"
                          overlay="white-light"
                          hover
                          style={{ height: "18rem" }}
                          src={"http://localhost:1305/" + this.props.el.image}
                        />
                      </center>

                      <MDBCardBody>
                        <center>
                          <div> </div>
                          <MDBCardTitle className="almond-text ml-1 font-weight-bold">
                            {this.props.el.title}
                          </MDBCardTitle>
                        </center>
                        <hr />
                        <MDBCardText>
                          <MDBCardText>
                            {" "}
                            <b>Ingredient: </b>
                            {this.props.el.ingredient}
                          </MDBCardText>
                        </MDBCardText>
                        <MDBCardText>
                          {" "}
                          <b>Prix:</b> {this.props.el.price}
                        </MDBCardText>
                      </MDBCardBody>

                      <div className="rounded-bottom colorbottomcard text-center pt-3">
                        <center>
                          {" "}
                          <div className="white-text">
                            {" "}
                            {this.props.el.region}
                          </div>
                        </center>
                      </div>
                    </MDBCard>
                  </MDBCol>{" "}
                </>
              ))}
          </div>
        </MDBRow>
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

export default connect(mapStateToProps, mapDispatchToProps)(CarteVisiteur);

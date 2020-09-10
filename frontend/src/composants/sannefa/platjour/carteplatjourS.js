import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./sannefa.css";
import { connect } from "react-redux";
import {
  getPlatJourSData,
  supprimerPlatduData,
  publierDataPlatjour,
} from "../../../actions/sannefaaction";

import {
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBView,
} from "mdbreact";
import ChangerPlat from "./changerplat";

class CartePlatjourS extends React.Component {
  componentDidMount() {
    this.props.platJour();
  }
  render() {
    return (
      <div className="spaceCarte">
        <MDBRow>
          {this.props.platdujourS.map((el, _id) => (
            <MDBCol md="4">
              <MDBCard narrow>
                <MDBView cascade>
                  <MDBCardImage
                    hover
                    overlay="pink-slight"
                    className="card-img-top"
                    src={"http://localhost:1305/" + el.props.image}
                    // src="/static/media/logo.d7273074.png"
                    waves
                  />
                </MDBView>
                <MDBCardBody>
                  <MDBCardTitle className="pink-text">{el.title} </MDBCardTitle>
                  <hr></hr>
                  <MDBCardText>
                    <b>Les ingredient :</b>
                    {el.ingredient}{" "}
                  </MDBCardText>
                  <MDBCardText>
                    <b>Prix :</b>
                    {el.price}{" "}
                  </MDBCardText>

                  <MDBCardText>
                    <b>Gouvernorat :</b>
                    {el.gouvernorat}{" "}
                  </MDBCardText>
                  <MDBCardText>
                    <b>Localisation:</b>
                    {el.region}
                  </MDBCardText>

                  <hr></hr>

                  <div className="butonet">
                    <div>
                      {" "}
                      <MDBBtn
                        onClick={() => this.props.supprimer(el._id)}
                        color="green"
                        icon="trash"
                      >
                        {" "}
                        <MDBIcon icon="trash" />
                        supprimer
                      </MDBBtn>
                    </div>

                    <div>
                      {" "}
                      <ChangerPlat platS={el._id} />
                    </div>
                  </div>

                  <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
                    <MDBBtn
                      color="transparent"
                      icon="trash"
                      className="place"
                      onClick={() => this.props.publier(el)}
                    >
                      Publier
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  platdujourS: state.platdujourSS,
});
const mapDispatchToProps = (dispatch) => ({
  platJour: (el) => dispatch(getPlatJourSData(el)),
  supprimer: (id) => dispatch(supprimerPlatduData(id)),
  publier: (el) => dispatch(publierDataPlatjour(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartePlatjourS);

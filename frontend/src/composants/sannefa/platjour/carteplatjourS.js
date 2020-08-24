import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./sannefa.css";
import { connect } from "react-redux";
import {
  getPlatJourSData,
  supprimerPlatduData,
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
} from "mdbreact";
import ChangerPlat from "./changerplat";

class CartePlatjourS extends React.Component {
  componentDidMount() {
    this.props.platJour();
  }
  render() {
    return (
      <div className="thecards">
        {this.props.platdujourS.map((el, i) => (
          <MDBCard style={{ maxWidth: "22rem" }} key={i}>
            <MDBCardImage
              className="img-fluid"
              src={"http://localhost:1305/" + el.image}
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>{el.title}</MDBCardTitle>
              <hr></hr>
              <MDBCardText><b>Les ingredient :</b>{el.ingredient} </MDBCardText>
              <MDBCardText><b>Prix :</b>{el.price} </MDBCardText>

              <MDBCardText><b>Gouvernorat :</b>{el.gouvernorat} </MDBCardText>
              <MDBCardText><b>Localisation:</b>{el.region} </MDBCardText>
            
             <hr></hr>

              <div className="butonet"> 
             <div> <MDBBtn onClick={() => this.props.supprimer(el._id)}  color="pink" icon="trash">  <MDBIcon icon="trash" />
                supprimer
              </MDBBtn></div>
              
              <div>
                {" "}
                <ChangerPlat platS={el} />
              </div>

              </div>

            </MDBCardBody>
          </MDBCard>
        ))}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CartePlatjourS);

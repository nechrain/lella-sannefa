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
              <MDBCard narrow className="ahbet">
                <MDBView>
                  <MDBCardImage
                    hover
                    overlay="pink-slight"
                    className="img-fluid w-100 p-3 "
                    style={{ height: "20rem" }}
                    src={`http://localhost:1305/${el.image}`}
                    
                    waves
                  />
                </MDBView>
                <MDBCardBody>
                <center>  <MDBCardTitle className="pink-text">{el.title} </MDBCardTitle></center>
                  <hr></hr>
                  <MDBCardText>
                    <b>Les ingredient :</b>
                    {el.ingredient}{" "}
                  </MDBCardText>
                  <MDBCardText>
                    <b>Prix :</b>
                    {el.prix}{" "}
                  </MDBCardText>

                  <MDBCardText>
                    <b>Gouvernorat :</b>
                    {el.gouvernorat}{" "}
                  </MDBCardText>
                  <MDBCardText>
                    <b>Localisation: </b>{el.region}
                  </MDBCardText>

                  <hr></hr>

                  <div className="butonet">

  <div >
                      <MDBBtn
                        color="green"
                          
                        onClick={() => this.props.publier(el)}
                      >
                         <MDBIcon icon="eye" />
                        Publier
                      </MDBBtn>
                    </div>
                    

                    <ChangerPlat platS={el._id} />


                  <div>
                      {" "}
                      <MDBBtn
                        onClick={() => this.props.supprimer(el._id)}
                        color="red"
                        icon="trash"
                      >
                        {" "}
                        <MDBIcon icon="trash" />
                        supprimer
                      </MDBBtn>
                    </div>{" "}



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

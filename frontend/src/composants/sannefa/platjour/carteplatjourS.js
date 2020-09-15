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
  MDBContainer,
} from "mdbreact";
import ChangerPlat from "./changerplat";
const userid = localStorage.getItem("userid");
class CartePlatjourS extends React.Component {
  state = {
    userid: "",
  };

  componentDidMount() {
    this.props.platJour();
    this.setState({ userid: userid });
    console.log(this.state.userid);
  }
  render() {
    return (
      <div className="p-5">
        <MDBRow>
          {this.props.platdujourS
            .filter((rl) => rl.iduser === this.props.userinfos._id)
            .map((el, _id) => (
              <MDBCol size="4">
                <MDBCard className="mb-5 ">
                  <MDBView>
                    <img
                      hover
                      className=" w-100 p-3"
                      src={`http://localhost:1305/${el.image}`}
                      waves
                      height="290px"
                    />
                  </MDBView>
                  <MDBCardBody>
                    <center>
                      {" "}
                      <MDBCardTitle className="pink-text">
                        {el.title}{" "}
                      </MDBCardTitle>
                    </center>
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
                      <b>Localisation: </b>
                      {el.region}
                    </MDBCardText>
                    <hr></hr>
                    <MDBRow>
                      <MDBCol size="4">
                        {" "}
                        <MDBBtn
                          color="green"
                          size="sm"
                          onClick={() => this.props.publier(el)}
                        >
                          <MDBIcon icon="eye" />
                          <small> Publier</small>
                        </MDBBtn>
                      </MDBCol>
                      <MDBCol size="4">
                        {" "}
                        <ChangerPlat platS={el} />{" "}
                      </MDBCol>
                      <MDBCol size="4">
                        {" "}
                        <MDBBtn
                          size="sm"
                          onClick={() => this.props.supprimer(el._id)}
                          color="red"
                        >
                          {" "}
                          <MDBIcon icon="trash" />
                          <small> supprimer</small>
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
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
  userinfos: state.authReducer,
});
const mapDispatchToProps = (dispatch) => ({
  platJour: (el) => dispatch(getPlatJourSData(el)),
  supprimer: (id) => dispatch(supprimerPlatduData(id)),
  publier: (el) => dispatch(publierDataPlatjour(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartePlatjourS);

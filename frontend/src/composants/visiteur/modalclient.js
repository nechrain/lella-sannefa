import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import { getET_IDSANNEFAData } from "../../actions/SanefaID";
import { connect } from "react-redux";
import "./home.css"

class DétailClient extends Component {
  state = {
    modal8: false,
    modal9: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  componentDidMount() {
    this.props.sannefaIDact(this.props.idplat);
  }

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="amber" onClick={this.toggle(8)}>
         Détails
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal8}
          toggle={this.toggle(8)}
          fullHeight
          position="left"
        >
          <MDBModalHeader toggle={this.toggle(8)}>
            information de notre sannefa
          </MDBModalHeader>
          <MDBModalBody>
            <MDBCard>
              <center><MDBCardImage
                className="img-fluid profilimage"
                src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043251-avatar-female-girl-woman_113291.png"
                waves
              /></center>

              <MDBCardBody>
                <MDBCardTitle>NOM</MDBCardTitle>
                <MDBCardText> {this.props.sannefaID.name} </MDBCardText>

                <MDBCardTitle>PRÉNOM </MDBCardTitle>
                <MDBCardText> {this.props.sannefaID.firstname} </MDBCardText>

                <MDBCardTitle>NUMÉRO DE TÉLÉPHONE </MDBCardTitle>
                <MDBCardText>{this.props.sannefaID.phone} </MDBCardText>

                <MDBCardTitle>MAIL </MDBCardTitle>
                <MDBCardText> {this.props.sannefaID.mail} </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="green" onClick={this.toggle(8)}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  sannefaID: state.sannefaID,
});
const mapDispatchToProps = (dispatch) => ({
  sannefaIDact: (id) => dispatch(getET_IDSANNEFAData(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DétailClient);
import React, { Component } from 'react';
import { 
  MDBTable, MDBTableBody,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,MDBCard, MDBCardImage, MDBIcon, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {
state = {
  modal14: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
      <MDBContainer>
            <MDBBtn
                floating
                tag="a"
                className="ml-auto mr-4 lighten-3 mdb-coalor"
                action
                onClick={this.toggle(14)}
              >
                <MDBIcon icon="chevron-right" className="mdb-color lighten-3" />
                
              </MDBBtn>
  
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}></MDBModalHeader>
          <MDBModalBody>
          <MDBCard cascade>
              <MDBCardImage
                cascade
                className="img-fluid"
                overlay="white-light"
                hover
                src="https://femmesdetunisie.com/wp-content/uploads/2015/12/Borghol.jpg"
              />
          <MDBCardBody cascade>
                <MDBCardTitle>Coucous bl 3alouch</MDBCardTitle>
                <hr />
                <MDBTable responsive bordered>
    
      <MDBTableBody >
        <tr>
          <td className="rounded-bottom mdb-color lighten-3 text-center pt-3 white-text"><b>Prénom</b></td>
          <td>*********</td>
        </tr>

        <tr>
          <td className="rounded-bottom mdb-color lighten-3 text-center pt-3 white-text"><b>Nom</b></td>
          <td>******</td>
        </tr>

        <tr>
          <td className="rounded-bottom mdb-color lighten-3 text-center pt-3 white-text"><b>Téléphone</b></td>
          <td>+216****</td>
        </tr>
        <tr>
          <td className="rounded-bottom mdb-color lighten-3 text-center pt-3 white-text"><b>Adresse email:</b></td>
          <td>******@**.**</td>
        </tr>

        <tr>
          <td className="rounded-bottom mdb-color lighten-3 text-center pt-3 white-text"><b>Adresse</b></td>
          <td>********</td>
        </tr>

        <tr>
          <td className="rounded-bottom mdb-color lighten-3 text-center pt-3 white-text"><b>Gouvernorat</b></td>
          <td>********</td>
        </tr>

        <tr>
          <td className="rounded-bottom mdb-color lighten-3 text-center pt-3 white-text"><b>Région  Q²</b></td>
          <td>********</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBModalBody>
          <MDBModalFooter>
          <center>  <MDBBtn color="primary" onClick={this.toggle(14)}>Close</MDBBtn></center>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
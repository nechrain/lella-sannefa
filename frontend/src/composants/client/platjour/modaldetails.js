import React, { Component } from 'react';
import { 
  MDBTable, MDBTableBody,
  MDBCardBody,
  MDBCardTitle,MDBRating,
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
            
          <MDBCardBody cascade>
                <MDBCardTitle>Coucous bl 3alouch</MDBCardTitle>
                <center><MDBCardTitle> <MDBRating/></MDBCardTitle></center>
                <hr />
                <MDBTable responsive bordered>
    
      <MDBTableBody >
        <tr>
          <td className="rounded-bottom mdb-color lighten-3 text-center pt-3 white-text"><b>prenom</b></td>
          <td>Naima</td>
        </tr>

        <tr>
          <td className="rounded-bottom mdb-color lighten-3 text-center pt-3 white-text"><b>nom </b></td>
          <td>tamzini</td>
        </tr>

        <tr>
          <td className="rounded-bottom mdb-color lighten-3 text-center pt-3 white-text"><b>telephone</b></td>
          <td>+216 255 888</td>
        </tr>
        <tr>
          <td className="rounded-bottom mdb-color lighten-3 text-center pt-3 white-text"><b>Adresse email:</b></td>
          <td>naimatamzini@yahoo.fr</td>
        </tr>

        <tr>
          <td className="rounded-bottom mdb-color lighten-3 text-center pt-3 white-text"><b>Adresse</b></td>
          <td>8 avenue mohamed V</td>
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
import React, { Component } from "react";
import {
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
} from "mdbreact";
import { Fragment } from "react";
import { connect } from "react-redux";
import { addPlatJourSToApi } from "../../../actions/sannefaaction";
import axios from "axios";

class AddPlatjour extends Component {
  state = {
    modal14: false,
    selectedFile: [],
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };
  fileSelectedHandler = (e) => {
    this.setState({ selectedFile: e.target.files[0] });
  };

  uploadHandler = () => {
    const fd = new FormData();
    fd.append("files", this.state.selectedFile);
    axios
      .post("http://localhost:1305/image", fd)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <MDBContainer>
        <MDBBtn
          floating="TRUE"
          tag="a"
          gradient="peach"
          action
          onClick={this.toggle(14)}
        >
          <MDBIcon icon="plus" className="mdb-color lighten-3" />
       <h6> ajouter votre plat</h6></MDBBtn>

        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}></MDBModalHeader>

          <MDBModalBody>
            <Fragment>
              <div className="form-group">
                <label htmlFor="example1">image</label>
                <MDBInput
                  type="file"
                  onChange={(e) => this.fileSelectedHandler(e)}
                  outline
                />{" "}
                <button onClick={this.uploadHandler}>upload</button>
              </div>

              <div className="form-group">
                <label htmlFor="example1">titre</label>
                <input
                  type="text"
                  id="example1"
                  className="form-control form-control-md"
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="example1">ingredient</label>
                <input
                  type="text"
                  id="example1"
                  className="form-control form-control-md"
                  onChange={(e) =>
                    this.setState({ ingredient: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="example1">prix</label>
                <input
                  type="text"
                  id="example1"
                  className="form-control form-control-sm"
                  onChange={(e) => this.setState({ prix: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="example1">Gouvernorat</label>
                <input
                  type="text"
                  id="example1"
                  className="form-control form-control-md"
                  onChange={(e) =>
                    this.setState({ gouvernorat: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="example1">Région</label>
                <input
                  type="text"
                  id="example1"
                  className="form-control form-control-md"
                  onChange={(e) => this.setState({ region: e.target.value })}
                />
              </div>
            </Fragment>
          </MDBModalBody>
          <MDBModalFooter>
            <center>
              {" "}
              <MDBBtn color="purple" onClick={this.toggle(14)}>
                Close
              </MDBBtn>
              <MDBBtn
                color="pink"
             
                onClick={() =>
                  this.props.platjouradded({
                    title: this.state.title,
                    image: this.state.image,
                    prix: this.state.prix,
                    ingredient: this.state.ingredient,
                    gouvernorat: this.state.gouvernorat,
                    région: this.state.région,
                  })
                }
              >
                ajouter
              </MDBBtn>
            </center>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    platjouradded: (el) => dispatch(addPlatJourSToApi(el)),
  };
};

export default connect(null, mapDispatchToProps)(AddPlatjour);

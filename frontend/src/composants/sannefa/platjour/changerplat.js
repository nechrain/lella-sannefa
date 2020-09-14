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
import { changeeDataPlatjour } from "../../../actions/sannefaaction";
import axios from "axios";

class ChangerPlat extends Component {
  imagename = React.createRef();
  
  state = {
    modal14: false,
    selectedFile: "",
    image: "",
    id: this.props.platS._id,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };
  /*************function upload img*********** */
  fileSelectedHandler = (e) => {
    this.setState({ selectedFile: e.target.files[0] });
  };

  uploadHandler = () => {
    const fd = new FormData();
    fd.append("file", this.state.selectedFile);
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
          color="yellow"
          action
          onClick={this.toggle(14)}
        >
          <MDBIcon icon="edit" cgradient="purple" />
          Modifier
        </MDBBtn>

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
                  defaultValue={this.props.platS.title}
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
                  defaultValue={this.props.platS.ingredient}
                />
              </div>

              <div className="form-group">
                <label htmlFor="example1">prix</label>
                <input
                  type="text"
                  id="example1"
                  className="form-control form-control-sm"
                  onChange={(e) => this.setState({ price: e.target.value })}
                  defaultValue={this.props.platS.price}
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
                  defaultValue={this.props.platS.gouvernorat}
                />
              </div>

              <div className="form-group">
                <label htmlFor="example1">Région</label>
                <input
                  type="text"
                  id="example1"
                  className="form-control form-control-md"
                  onChange={(e) => this.setState({ region: e.target.value })}
                  defaultValue={this.props.platS.region}
                />
              </div>
            </Fragment>
          </MDBModalBody>
          <MDBModalFooter>
            <center>
              {" "}
              <MDBBtn color="primary" onClick={this.toggle(14)}>
                Close
              </MDBBtn>
              <MDBBtn
                color="amber"
              
                onClick={() => this.props.platChangé(this.state)}
              >
               changer
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
    platChangé: (el) => dispatch(changeeDataPlatjour(el)),
  };
};

export default connect(null, mapDispatchToProps)(ChangerPlat);

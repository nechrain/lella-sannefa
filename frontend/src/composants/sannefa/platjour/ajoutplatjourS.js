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
import { getUser } from "../../../actions/authentification";
import axios from "axios";
import "./sannefa.css";

class AddPlatjour extends Component {
  imagename = React.createRef();
  state = {
    modal14: false,
    selectedFile: "",
    image: "",
  };
  componentDidMount() {
    this.props.getUser();
  }
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
        <button
          floating="TRUE"
          tag="a"
          className="ajouterr"
          action
          onClick={this.toggle(14)}
        >
          Ajouter votre plat
          <div>
            <MDBIcon icon="plus" />
          </div>
        </button>

        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}></MDBModalHeader>

          <MDBModalBody>
            <Fragment>
              <div className="form-group">
                <label htmlFor="example1">image</label>
                <MDBInput
                  type="file"
                  onChange={(e) => this.fileSelectedHandler(e)}
                  // this.setState({ image: this.state.selectedFile.name })

                  outline
                />
                <button onClick={() => this.uploadHandler()}>upload</button>
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
                  onChange={(e) => this.setState({ price: e.target.value })}
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
              <MDBBtn class="btn btn-warning" onClick={this.toggle(14)}>
                Close
              </MDBBtn>
              <MDBBtn
                color="green"
                onClick={() =>
                  this.props.platjouradded({
                    title: this.state.title,
                    // image: this.state.image,
                    image: this.state.selectedFile.name,
                    prix: this.state.prix,
                    ingredient: this.state.ingredient,
                    gouvernorat: this.state.gouvernorat,
                    region: this.state.region,
                    iduser: this.props.authReducer._id,
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
const mapStateToProps = (state) => ({
  authReducer: state.authReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    platjouradded: (el) => dispatch(addPlatJourSToApi(el)),
    getUser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlatjour);

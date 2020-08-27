import React from "react";
import "./authentification.css";
import {register} from "../../../actions/authentification"

import {

  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation
} from "mdbreact";


class Authentificationsannefa extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="classicformpage">
       

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                <span className="losss">Lella Essanafa</span>
                  <hr className="hr-light" />
                <center>  <img src={logo} className="logooo" ></img>  </center>
                 
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                    
  <MDBRow>
    <MDBCol >
     
       <p className="inscrip">inscription </p>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
       prénom
        </label>
        <input type="text" id="defaultFormRegisterNameEx" className="form-control" 
        onChange={(e) => this.setState({ firstname: e.target.value })} />
        <br />

        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
         nom 
        </label>
        <input type="text" id="defaultFormRegisterNameEx" className="form-control" 
        onChange={(e) => this.setState({ name: e.target.value })} />
        <br />

        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
        votre mail
        </label>
        <input type="email" id="defaultFormRegisterEmailEx" className="form-control"
        onChange={(e) => this.setState({ mail: e.target.value })} />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
        numero telephone
        </label>
        <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" 
        onChange={(e) => this.setState({ phone: e.target.value })}/>
        <br />
        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
          mot de passe
        </label>
        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" 
        onChange={(e) => this.setState({ password: e.target.value })}/>
        <div className="text-center mt-4">
          <MDBBtn color="orange" type="submit" onClick={()=>this.props.inscrption({
             name:this.state.name,
             firstname: this.state. firstname,
             phone: this.state.phone,
             mail: this.state.mail,
             password: this.state.password,
             role:this.state.role
          })}>
           enregistrer
          </MDBBtn>
        </div>
     
    </MDBCol>
  </MDBRow>

                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              
        

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  inscription: () => dispatch(register())
});
export default connect(null, mapDispatchToProps)(Authentificationsannefa);
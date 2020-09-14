


import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import "./navbar.css";
import logo from "./logo.png"
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "./../../../actions/authentification"

class NavbarS extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
// componentDidMount() {
//   this.props.logout();
// }

render() {
  return (
    <Router>
      <MDBNavbar color="green" dark expand="md">
        <MDBNavbarBrand>
         <img src={logo} className="logo"/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/"><b>Home</b></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about"><b>À propos</b></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact"><b>Contact</b></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            
              
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="facebook" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
              
            </MDBNavItem>
            <MDBNavItem>
      
                  <button tag={Link} to="/signoutC" onClick={()=>this.props.logout()}> <MDBIcon icon="user" />  Sortir </button>
         
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

const mapDispatchTo=(dispatch)=>({
  logout:()=>dispatch(logout())
})
export default connect(null,mapDispatchTo )(NavbarS);
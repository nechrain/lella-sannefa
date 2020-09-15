import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBBtn,
  MDBLink,
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./navbar.css";
import logo from "./logo.png";

import { connect } from "react-redux";
import { logout } from "../../actions/authentification";

class NavbarS extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar color="green" dark expand="md">
          <MDBNavbarBrand>
            <img
              src={logo}
              className="bg-white  rounded-circle hoverable"
              width="50px"
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBLink to="/sannefa/platjourS/">
                  <small>Ajout</small>
                </MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink to="/sannefa/about/">
                  <small>À propos</small>
                </MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink to="/contact/">
                  <small>Contact</small>
                </MDBLink>
              </MDBNavItem>
              <MDBNavItem></MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon size="sm" fab icon="twitter" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon size="sm" fab icon="facebook" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon size="sm" fab icon="google-plus-g" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBBtn
                  color="white"
                  tag={Link}
                  to="/signoutC"
                  onClick={() => this.props.logout()}
                >
                  {" "}
                  <MDBIcon icon="user" /> Sortir{" "}
                </MDBBtn>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

const mapDispatchTo = (dispatch) => ({
  logout: () => dispatch(logout()),
});
export default connect(null, mapDispatchTo)(NavbarS);

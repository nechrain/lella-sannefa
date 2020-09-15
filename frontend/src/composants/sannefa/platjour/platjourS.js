import React from "react";

import "./sannefa.css";
import AddPlatjour from "./ajoutplatjourS";
import CartePlatjourS from "./carteplatjourS";
import NavbarS from "../../navbars/navbarS";
import Footers from "../../footers/footerV";
class Section3 extends React.Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div>
        <NavbarS />

        <center>
          <AddPlatjour />
        </center>
        <CartePlatjourS />
        <Footers />
      </div>
    );
  }
}

export default Section3;

/*  <MDBBtn outline color="white">
{" "}
<Link to="/SignUp">
  <span className="titlesign">S'enregistrer</span>
</Link>
</MDBBtn>


import {
 
  MDBBtn,
 
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";



import "./sannefa.css";
import AddPlatjour from "./ajoutplatjourS";
import CartePlatjourS from "./carteplatjourS";
import NavbarS from "../../navbars/navbarS";
import Footers from "../../footers/footerV";



<NavbarS />

<center>
  <AddPlatjour />
</center>
<CartePlatjourS />
<Footers />*/

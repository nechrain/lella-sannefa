import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./home.css";
import { MDBContainer, MDBCol, MDBRow, MDBAnimation, MDBView } from "mdbreact";
import Chercher from "./chercher";

import CarteVisiteur from "./cartevisiteur";

import Publicité from "./tunisianFood/publicité";
import Section3 from "./section3";
import { getPlatJourSData } from "../../actions/sannefaaction";
import { connect } from "react-redux";
import NavbarV from "../navbars/navbarV";
import Footers from "../footers/footerV";

class Home extends Component {
  componentDidMount() {
    this.props.platJour();
  }
  state = { region: "" };
  render() {
    return (
      <div>
        <NavbarV />
        <section>
          <Section3 />{" "}
        </section>
       
        <MDBContainer className="groupse">
          {this.props.platdujourS.map((el) => (
            <CarteVisiteur el={el} />
          ))}
        </MDBContainer>

        <Footers />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  platdujourS: state.platdujourSS,
});
const mapDispatchToProps = (dispatch) => ({
  platJour: (el) => dispatch(getPlatJourSData(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

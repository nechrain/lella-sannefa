import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./home.css";
import { MDBContainer, MDBCol, MDBRow, MDBAnimation, MDBView } from "mdbreact";
import Chercher from "./chercher";

import CarteVisiteur from "./cartevisiteur";
import NavbarVisiteur from "./navbar/navbar";
import FooterVisiteur from "./footer/footerV";
import Publicité from "./tunisianFood/publicité";
import Section3 from "./section3";
import { getPlatJourSData } from "../../actions/sannefaaction";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.platJour();
  }

  render() {
    return (
      <div>
        <NavbarVisiteur />
        <section>
          {" "}
          <Section3 />{" "}
        </section>

        <Chercher />

        <MDBContainer className="groupse">
          {this.props.platdujourS
            .filter((el) => el.state === "publiee")
            .map((el) => (
              <CarteVisiteur el={el} />
            ))}
        </MDBContainer>

        
          {/* <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <MDBAnimation type="bounce" infinite>
                <span className="titlee">
                  Lella Essanefa , commandez vos plat fais maison ou est ce que
                  vous y etes
                </span>
              </MDBAnimation>
            </MDBCol>
          </MDBRow> */}
       

        <FooterVisiteur />
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

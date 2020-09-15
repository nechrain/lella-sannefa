import React from "react";
import "./abouts.css";
import { MDBContainer, MDBFormInline, MDBAnimation } from "mdbreact";
import solidarité from "./solidarité.jpeg";
import santé from "./santé.jpeg";
import wastage from "./wastage.jpeg";

import NavbarS from "../navbars/navbarS";
import Footers from "../footers/footerV";

function AboutS() {
  return (
    <div>
      <NavbarS />

      <section className="sectionone p-5">
        <div>
          <center>
            <h1 className="TITLEii">
              Manger le fait maison,<br></br> Garder votre santé <br></br> &
              Profiter de la vie pleinement
            </h1>
          </center>
        </div>
      </section>

      <MDBContainer>
        <section className="section33 mt-5 mb-5">
          <span className="title23">Notre Histoire </span>
          <MDBContainer>
            <p className="titre133">
              Tout a commencé en 2018, la je viens de recuperer le poste de
              repsonsable qualité dans une industrie automobile et j'avais pour
              pause seulemnt 40 minutes , le matin j me reveille tard et le soir
              je rentre fatigué donc j ne pouvais pas cuisiner et le sandwitch
              vue que je viens installer mon appareil dentaire donc j voulais un
              repas fait maison qui ne demande pas que je mache et c'est de la
              que l'idée m'est apparu po,pourquoi pas une application mobile
              pour voir des repas fait maison des maison à coté,
            </p>
          </MDBContainer>
        </section>

        <div className="classement">
          <div className="spacess">
            <img src={solidarité} className="imgsec" />
            <center>
              <div className="titrou dusty-grass-gradient">solidarité</div>
            </center>
          </div>

          <div className="spacess">
            <img src={santé} className="imgsec" />*
            <center>
              <div className="titrou dusty-grass-gradient">santé</div>
            </center>
          </div>

          <div className="spacess">
            <img src={wastage} className="imgsec" />
            <center>
              <div className="titrou dusty-grass-gradient">environnemnt</div>
            </center>
          </div>
        </div>
      </MDBContainer>

      <Footers />
    </div>
  );
}

export default AboutS;

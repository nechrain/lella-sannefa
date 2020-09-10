import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import MyCarousel from "react-card-carousel";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";
import img1 from "./madfouna.png";
import img2 from "./couscousMoussem.png";
import img3 from "./oielespagnol.png";
import img4 from "./espadan.jpeg";
import img5 from "./mlokhia.jpg"
class Publicité extends Component {
  render() {
    return (
      <div>
        <ReactCardCarousel autoplay={true} autoplay_speed={1500}>
          <div style={MyCarousel.CARD_STYLE}>
            <MDBCard className="mb-2">
              <img className="img-fluid" src={img1} />
              <MDBCardBody style={{ backgroundColor: "#4caf50" }}>
                <center>
                  {" "}
                  <MDBCardTitle style={{ Color: "white" }}>
                  مدفونة
                  </MDBCardTitle>
                </center>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div style={MyCarousel.CARD_STYLE}>
            <MDBCard className="mb-2">
              <img className="img-fluid" src={img2} />
              <MDBCardBody style={{ backgroundColor: "#4caf50" }}>
                <center>
                  {" "}
                  <MDBCardTitle style={{ Color: "white" }}>
                  كسكسي الموسم
                  </MDBCardTitle>
                </center>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={MyCarousel.CARD_STYLE}>
            <MDBCard className="mb-2">
              <img className="img-fluid" src={img3} />
              <MDBCardBody style={{ backgroundColor: "#4caf50" }}>
                <center>
                  {" "}
                  <MDBCardTitle>عين سبانيولية</MDBCardTitle>
                </center>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={MyCarousel.CARD_STYLE}>
            <MDBCard className="mb-2">
              <img className="img-fluid" src={img5} />
              <MDBCardBody style={{ backgroundColor: "#4caf50" }}>
                <center>
                  {" "}
                  <MDBCardTitle>ملوخية</MDBCardTitle>
                </center>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={MyCarousel.CARD_STYLE}>
            <MDBCard className="mb-2">
              <img className="img-fluid" src={img4} />
              <MDBCardBody style={{ backgroundColor: "#4caf50" }}>
                <center>
                  {" "}
                  <MDBCardTitle>مقرونة بالسفن</MDBCardTitle>
                </center>
              </MDBCardBody>
            </MDBCard>
          </div>
        </ReactCardCarousel>
      </div>
    );
  }
}

export default Publicité;

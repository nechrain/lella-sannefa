import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

const FormFooter = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="10">
          <form>
            <p className="h4 text-center mb-4">Write to us</p>

            <label
              htmlFor="defaultFormContactEmailEx"
              className="white-text"
              style={{ color: "white" }}
            >
              Your email
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />

            <label htmlFor="defaultFormContactMessageEx" className="white-text">
              Your message
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
            <div className="text-center mt-4">
              <MDBBtn color="white" outline type="submit">
                Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormFooter;

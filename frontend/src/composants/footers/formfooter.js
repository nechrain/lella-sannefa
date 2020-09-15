import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

const FormFooter = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <form>
          <MDBRow>
            <h2 className=" text-center ">Ecrivez nous</h2>
          </MDBRow>
          <MDBRow>
            <label
              htmlFor="defaultFormContactEmailEx"
              className="white-text"
              style={{ color: "white" }}
            >
              Votre email
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
          </MDBRow>
          <MDBRow>
            <label htmlFor="defaultFormContactMessageEx" className="white-text">
              Votre message
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="2"
            />
          </MDBRow>
          <MDBRow className=" mt-4 ">
            <div>
              <MDBBtn
                className="float-center"
                size="sm"
                color="white"
                outline
                type="submit"
              >
                Envoyer
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </MDBRow>
        </form>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormFooter;

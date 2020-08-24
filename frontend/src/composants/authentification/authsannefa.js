import React from 'react';
import "./authentification.css";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBCardTitle } from 'mdbreact';

class Authensannefa extends React.Component {
  state = {
    fname: 'Mark',
    lname: 'Otto',
    email: '',
    city: '',
    state: '',
    zip: ''
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += ' was-validated';
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="  athensannefa responsive">
         <div className=" container greyo">
        <form
          className='needs-validation'
          onSubmit={this.submitHandler}
          noValidate
        >
        
           <MDBCardTitle>SANNEFA INSCRIPTION</MDBCardTitle>
              <MDBInput
                icon='user'
                value={this.state.fname}
                name='fname'
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterNameEx'
                label='First name'
                outline
                required
              >
            
              </MDBInput>
           
           
              <MDBInput
                icon='address-card'
                value={this.state.lname}
                name='lname'
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterEmailEx2'
                label='Last name'
                outline
                required
              >
             
              </MDBInput>
         
            
              <MDBInput
                icon='envelope-open'
                value={this.state.email}
                onChange={this.changeHandler}
                type='email'
                id='materialFormRegisterConfirmEx3'
                name='email'
                label='Your Email address'
                outline
              >
               
              </MDBInput>
          
         
         
           
              <MDBInput
                icon='city'
                value={this.state.city}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='City'
                outline
                required
              >
                
              </MDBInput>
        
          
              <MDBInput
                icon='map-marked-alt'
                value={this.state.state}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='State'
                outline
                required
              >
          
              </MDBInput>
           
              <MDBInput
                icon='location-arrow'
                value={this.state.zip}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='zip'
                label='Zip'
                outline
                required
              >
               
              </MDBInput>
          
         
            <div className='custom-control custom-checkbox pl-3'>
              <input
                className='custom-control-input'
                type='checkbox'
                value=''
                id='invalidCheck'
                required
              />
              <label className='custom-control-label' htmlFor='invalidCheck'>
                Agree to terms and conditions
              </label>
              <div className='invalid-feedback'>
                You must agree before submitting.
              </div>
            </div>
       
          <MDBBtn color='danger' type='submit'>
            Submit Form
          </MDBBtn>
        </form>
      </div>
      </div>
    );
  }
}

export default Authensannefa;
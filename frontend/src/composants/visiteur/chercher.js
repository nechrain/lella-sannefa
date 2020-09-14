import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./home.css" 
import { MDBBtn } from "mdbreact";





const Chercher = () => {
  return (
   
    
    
    <div className="optionss">
               
             
              
         
          {/* partie 1 */}
          <div>
<select className="browser-default custom-select title3">
  
  <option value="1">Ariana</option>
  <option value="2">Béja</option>
  <option value="3">Ben Arous</option>
  <option value="4">Bizerte</option>
  <option value="5">Gabès</option>
  <option value="6">Gafsa</option>
  <option value="7">Jendouba</option>
  <option value="8"> Kairouan</option>
  <option value="9">Kasserine</option>
  <option value="10">Kébili</option>
  <option value="11">kef</option>
  <option value="12">Mahdia</option>
  <option value="13">Manouba</option>
  <option value="14">Médenine</option>
  <option value="15">Monastir</option>
  <option value="16">Nabeul</option>
  <option value="17">Sfax</option>
  <option value="18">Sidi Bouzid</option>
  <option value="19">Siliana</option>
  <option value="20">Sousse</option>
  <option value="21">Tataouine</option>
  <option value="22">Tozeur</option>
  <option value="23">Tunis</option>
  <option value="24">Zaghouan</option>
</select>
</div>

  {/* partie 2 */}
    
<div className="form-group">
                <label htmlFor="example1"></label>
                <input
                  type="text"
                  id="example1"
                  className="form-control form-control-md title2"
                 
                />
              </div>
     {/* partie 3 */}
              {/* <div> 
              <MDBBtn color="success"><span className="title2">Chercher</span></MDBBtn>
              </div> */}
          
    </div>
 
     
  )
}

export default Chercher;
import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./client.css" 

import { MDBRating } from'mdbreact';




const Searcheproduit = () => {
  return (
   
    
    
    <div className="options">
               
               {/* partie1 */}
               <div>
            <select className="browser-default custom-select" >
              <option>Catégories</option>
              <option value="1">Patisserie Tunisienne</option>
              <option value="2">Patisserie Arabe</option>
              <option value="3">Patisserie Française</option>
              <option value="3">Jus & Boissons</option>
              <option value="3">Eau distllé</option>
              <option value="3">Produit de Terroir</option>
            </select>
          </div>

               <div>
            <select className="browser-default custom-select" >
              <option>Gouvernorat</option>
              <option value="1">Nabeul</option>
              <option value="2">Monastir</option>
              <option value="3">Djerba</option>
            </select>
          </div>
         
          {/* partie 2 */}
          <div>
            <select className="browser-default custom-select">
              <option>Nabeul</option>
              <option value="1">Nabeul</option>
              <option value="2">Soliman</option>
              <option value="3">Grombalia</option>
              <option value="3">Menzel Bouzelfa</option>
              <option value="3">Bni khalled</option>
              <option value="3">Korba</option>
            </select>
          </div>
     {/* partie 3 */}
          <div>
          <MDBRating />
          </div>
    
     {/* partie 4 */}
              <div> 
              <button className="chercher white-text">Chercher</button>
              </div>
          
    </div>
 
     
  )
}

export default Searcheproduit;
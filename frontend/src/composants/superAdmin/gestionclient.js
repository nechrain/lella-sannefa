import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import NavbarSuper from './navbar/navbarSUper';
import FooterSuper from './footer/footer';
import "./gestion.css"

const GestionClient = () => {
  return (
      
  
<div>
<div ><NavbarSuper/></div>
 
     <div className="espace">   <MDBTable  color="green" bordered>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>nom</th>
          <th>prenom</th>
          <th>action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>soltani</td>
          <td>houda</td>
          <td><button>modifier</button> <button>supprimer</button></td>
        
        </tr>
        <tr>
          <td>2</td>
          <td>ben mansour</td>
          <td>hinda</td>
          <td><button>modifier</button> <button>supprimer</button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td><button>modifier</button> <button>supprimer</button></td>
        </tr>
      </MDBTableBody>
    </MDBTable></div>
   
   <div> <FooterSuper/></div>
   </div>
  );
}

export default GestionClient;
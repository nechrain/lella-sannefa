import React from 'react';

import  Platjour  from './platjour/platjour'
import NavbarC from './navbar/navbar';
import FooterC from './footer/footer';
import CartePlat from './platjour/carteplatjour';
import Searche from './platjour/search';

const Client = () => {
  return (
    <div>
     <NavbarC/>
     <Searche/>
     <CartePlat/>
      <FooterC/>
    
    </div>
   
  );
}

export default Client;
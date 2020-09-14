import React from "react";
import logo from "./logo.svg";
import "./App.css";


import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./composants/visiteur/home";
import Authentificationsannefa from "./composants/visiteur/authentification/signUp";
import Loginn from "./composants/visiteur/authentification/signIn";
import PlatjourS from "./composants/sannefa/platjour/platjourS"
import Client from "./composants/client/client";
import SignoutS from "./composants/visiteur/authentification/signoutS"
import SignoutC from "./composants/visiteur/authentification/signoutC"
import CarteClient from "./composants/visiteur/carteclient";
import Contact from "./composants/abouts/contact";
import About from "./composants/abouts/about";






function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"         component={Home} />
          <Route exact path="/SignUp"   component={Authentificationsannefa} />
          <Route exact path="/SignIn"   component={Loginn} />
          <Route exact path="/platjour" component={PlatjourS}/>
          <Route exact path="/client"   component={CarteClient}/>
          <Route exact path="/signoutS" component={SignoutS}/>
          <Route exact path="/signoutC" component={SignoutC}/>
          <Route exact path="/contact"  component={Contact}/>
          <Route exact path="/about"    component={About}/>
         
      
        </Switch>
       
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;

import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./composants/visiteur/home";

import PlatjourS from "./composants/sannefa/platjour/platjourS";
import Client from "./composants/visiteur/client";

import SignoutS from "./composants/authentification/signoutS";
import SignoutC from "./composants/authentification/signoutC";
import Loginn from "./composants/authentification/signIn";
import SignUP from "./composants/authentification/signUp";

import AboutC from "./composants/abouts/aboutC";
import AboutS from "./composants/abouts/aboutS";
import AboutV from "./composants/abouts/aboutV";

import Contact from "./composants/contact/contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/SignUp" component={SignUP} />
          <Route path="/SignIn" component={Loginn} />

          <Route path="/signoutS" component={SignoutS} />
          <Route path="/signoutC" component={SignoutC} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={AboutV} />

          <Route path="/client/home" component={Client} />
          <Route path="/client/about/" component={AboutC} />

          <Route path="/sannefa/platjourS/" component={PlatjourS} />
          <Route path="/sannefa/home" component={Home} />
          <Route path="/sannefa/about" component={AboutS} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

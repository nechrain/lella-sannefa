import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./composants/sannefa/platjour/platjourS"
import PlatjourS from "./composants/sannefa/platjour/platjourS";

import{BrowserRouter,Route}from 'react-router-dom'
import GestionClient from "./composants/superAdmin/gestionclient";
import Client from "./composants/client/client";
import Home from "./composants/visiteur/home";


function App() {
  return (
    <div className="App">
<PlatjourS/>
    </div>
  );
}

export default App;

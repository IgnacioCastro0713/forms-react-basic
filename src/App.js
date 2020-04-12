import React from 'react';
import './App.css';

import {Form} from './components/index'
import logo from "./logo.svg";

function App() {
  return (
	  <div className="Main">
		<div className="Center-icon">
		  <img src={logo} className="App-logo" alt="logo"/>
		</div>
		<Form/>
	  </div>
  );
}

export default App;

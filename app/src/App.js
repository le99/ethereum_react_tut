import React from 'react';
import logo from './logo.svg';
import './App.css';
import web3handler from './web3handler.js';

var Contract = require("@truffle/contract");


async function handleClick(){
  let acc = await window.web3.eth.getAccounts();
  console.log(acc);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>
        Press me
        </button>
      </header>
    </div>
  );
}

export default App;

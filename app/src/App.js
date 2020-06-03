import React from 'react';
import logo from './logo.svg';
import './App.css';
import web3account from './web3account.js';

var Contract = require("@truffle/contract");
let metaCoinJSON = require('./MetaCoin.json');

web3account().catch((e)=>{
  console.log(e);
});

//Using web3
async function handleClick(){
  let acc = await web3account();
  console.log(acc);

  let myContract = new window.web3.eth.Contract(metaCoinJSON.abi, '0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B')
  myContract.methods.sendCoin('0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0', 1).send({from: acc})
    .then((res)=>{
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    });

  myContract.once("allEvents", (err, event)=>{
    console.log(err);
    console.log('Event:', event);
  })
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

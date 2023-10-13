import React, { useState } from 'react';
import logo from './logo.svg';
import web3account from './web3account.js';

var Contract = require("@truffle/contract");
let metaCoinJSON = require('./MetaCoin.json');

web3account().catch((e)=>{
  console.log(e);
});

function App() {

  const [balance, setBalance] = useState('');


  async function handleClick(){
    let acc = await web3account();
    console.log(acc);
  
    let myContract = new window.web3.eth.Contract(metaCoinJSON.abi)
    // const res = await myContract.methods.sendCoin('0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0', 1).send({from: acc})
    // console.log(res);
  
    const b = await myContract.methods.getBalance('0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0');

    setBalance(JSON.stringify(b));
    // myContract.once("allEvents", (err, event)=>{
    //   console.log(err);
    //   console.log('Event:', event);
    // });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>
          Press me
        </button>
        <div>{balance}</div>
      </header>
    </div>
  );
}

export default App;

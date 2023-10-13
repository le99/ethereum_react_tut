import {useState} from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
const { ethers, Contract } = require("ethers");
let metaCoin = require('./MetaCoin.json');

//metacoinAddress se puede asignar manualmente
const metaCoinAddress = metaCoin.networks[Object.keys(metaCoin.networks)[0]].address;


let provider = null;
let contract = null;
let metamaskAccount;


async function ethersConnect(){
  const provider0 = await detectEthereumProvider();
  if (provider0) {
    if (provider0 !== window.ethereum) {
      throw new Error('Do you have multiple wallets installed?');
    }
  } else {
    throw new Error('Please install MetaMask!');
  }


  await window.ethereum.request({ method: 'eth_requestAccounts' });

  provider = new ethers.BrowserProvider(window.ethereum)
  const signer = await provider.getSigner();

  contract = new Contract(metaCoinAddress, metaCoin.abi, signer);

  metamaskAccount = signer.address;
  console.log('metamaskAccount:' + metamaskAccount);

  function handleAccountsChanged(accountsNew){
    if (accountsNew.length === 0) {
      metamaskAccount = null;
    }
    metamaskAccount = accountsNew[0];
  }

  window.ethereum && window.ethereum.on('accountsChanged', handleAccountsChanged);
}


ethersConnect();


function App() {
  const [addressSend, setAddressSend] = useState('');

  const [balance, setBalance] = useState('');

  async function getBalance(){
    console.log('metamaskAccount:' + metamaskAccount);

    const newBalance = await contract.getBalance(metamaskAccount);
    setBalance(newBalance+ '');
  }

  async function sendCoin(){
    await contract.sendCoin(addressSend, 1);
  }

  return (
    <div>
      <p>Address to send to:</p>
      <input type="text" value={addressSend} onChange={(e) => setAddressSend(e.target.value)}></input>
      <button onClick={sendCoin}>sendCoin</button>

      <hr />
      <button onClick={getBalance}>getBalance</button>
      <p>{balance}</p>
    </div>
  );
}

export default App;

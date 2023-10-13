import detectEthereumProvider from '@metamask/detect-provider';


async function detectProvider(){
  const provider = await detectEthereumProvider();
  if (provider) {
    if (provider !== window.ethereum) {
      throw new Error('Do you have multiple wallets installed?');
    }

    const s = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log(s);
    return;
  } else {
    throw new Error('Please install MetaMask!');
  }
}

detectProvider();

let metaCoinJSON = require('./MetaCoin.json');
// console.log(metaCoinJSON);



function App() {
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

export default App;

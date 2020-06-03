import Web3 from 'web3';

let web3 = window.web3;

//https://github.com/MetaMask/faq/blob/master/DEVELOPERS.md#ear-listening-for-selected-account-changes
async function init(){
  // Modern dapp browsers...
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
      // Acccounts now exposed
      // web3.eth.sendTransaction({/* ... */});
    } catch (error) {
      // User denied account access...
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    // web3.eth.sendTransaction({/* ... */});
  }
  // Non-dapp browsers...
  else {
    web3 = new Web3(new web3.providers.HttpProvider('http://127.0.0.1:8545'));
  }
  window.web3 = web3;
}

export default init().then(async ()=>{
  let account = (await web3.eth.getAccounts())[0];

  setInterval(async function() {
    let a = (await web3.eth.getAccounts())[0];
    if (a !== account) {
      account = a;
      console.log('Account Changed', account);
    }
  }, 1000);
});

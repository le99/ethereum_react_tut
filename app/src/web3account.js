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
    throw new Error('No web3 provider');
  }
  window.web3 = web3;
}

let account = null;

init().then(async ()=>{
  account = (await web3.eth.getAccounts())[0];

  setInterval(async function() {
    let a = (await web3.eth.getAccounts())[0];
    if (a !== account) {
      account = a;
      console.log('Account Changed', account);
    }
  }, 1000);

  return account;
});

export default async function () {
  if(account){
    return Promise.resolve(account);
  }
  return init().then(async ()=>{
    return (await web3.eth.getAccounts())[0];
  });
}

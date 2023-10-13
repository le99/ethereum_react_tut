# Aplicacion de ejemplo de una aplicacion de Ethereum

## Requisitos
* [Node.js v14-v18](https://nodejs.org/en/download)
* [Metamask](https://metamask.io/download/)
* [Ganache](https://trufflesuite.com/docs/ganache/quickstart/)


* [Docker](https://docs.docker.com/engine/install/)


* [Truffle](https://trufflesuite.com/docs/truffle/how-to/install/#install-nodejs)
```bash
npm install -g truffle@v5.11.5
```


## Compilar Smart Contracts

```bash
truffle compile
truffle migrate
```


# Run truffle development


https://www.trufflesuite.com/docs/truffle/getting-started/installation
npm install -g truffle

```bash
truffle develop
migrate
```

let c = await MetaCoin.deployed()


c = await MetaCoin.at("0x507E67759cFA35c647C4dAD5DC3cA8aD09FB82E4")
c.sendCoin(accounts[1], 10, {from: accounts[0]})

##Based on Metacoin from Truffle:
https://www.trufflesuite.com/docs/truffle/quickstart


https://docs.metamask.io/

https://docs.ethers.org/v6/


## Errores posibles

TX doesn't have the correct nonce - Metamask

.../settings/advanced
Clear activity and nonce data
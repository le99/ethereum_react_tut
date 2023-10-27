# Aplicacion de ejemplo de una aplicacion de Ethereum

## Requisitos
* [Node.js v14-v18.18](https://nodejs.org/en/download)
* [Metamask](https://metamask.io/download/)
* [Docker](https://docs.docker.com/engine/install/)


* [Truffle](https://trufflesuite.com/docs/truffle/how-to/install/#install-nodejs)
```bash
npm install -g truffle@v5.11.5
```

## Correr aplicacion

Correr Ganache con docker

```bash
docker run --rm --publish 7545:8545 trufflesuite/ganache-cli:v6.12.2
```


Compilar Smart Contracts y desplegarlos a Ganache
```bash
truffle network --clean
truffle compile
truffle migrate
```

Correr aplicacion React
```bash
npm install

# Copiar 
# ./build/contracts/MetaCoin.json
# a
# ./src/MetaCoin.json

# Es posible que en ./src/App.js
# se deba asignar metaCoinAddress manualmente.

npm start
#localhost:3000
```

Al usar metamask configurar para que se conecte a Ganash
Select a network/add network/Add a netwrok manually.
New RPC URL: http://localhost:7545
Chain ID: 1337
Currency symbol: ETH

## Errores posibles

TX doesn't have the correct nonce - Metamask

.../settings/advanced
Clear activity and nonce data


## Correr con red de pruebas Sepolia

Se necesita solicitar Ether de un Faucet (https://ethereum.org/en/developers/docs/networks/) como:
https://www.infura.io/faucet/sepolia.

Cuando se tenga Ether luego:

Ir a https://remix.ethereum.org poner codigo del smart contract en el editor y compilar.
En la izquierda `solidity compiler` presionar copy ABI to clipboard.
Pegar contenido en ./src/MetaCoin.json.
En la izquierda `deploy y run transactions` en Environment poner `Injected Provider Metamask`, seleccionar Sepolia Network. Seleccionar Deploy.

En ./src/App.js asiganr el `metaCoinAddress` manualmente y en la linea 31 quitar el `.abi` de `metaCoin.abi`.
Correr la aplicacion como se haria normalmente.


# Referencias

https://www.trufflesuite.com/docs/truffle/quickstart

https://docs.metamask.io/

https://docs.ethers.org/v6/


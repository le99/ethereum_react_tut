Run truffle development


https://www.trufflesuite.com/docs/truffle/getting-started/installation
npm install -g truffle

```bash
truffle develop
migrate
```

let c = await MetaCoin.deployed()


c = await MetaCoin.at("0x507E67759cFA35c647C4dAD5DC3cA8aD09FB82E4")
c.sendCoin(accounts[1], 10, {from: accounts[0]})

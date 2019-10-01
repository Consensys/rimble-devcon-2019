## Rimble DevCon V Demo

### Example dapp built using Rimble, Drizzle, Truffle, and OpenZeppelin ERC-721 smart contracts

## Install

```
yarn install

// then create a .env file that looks like this:

TRUFFLE_MNEMONIC=candy maple cake sugar pudding cream honey rich smooth crumble sweet treat
GANACHE_MNEMONIC=grid voyage cream cry fence load stove sort grief fuel room save
TESTNET_MNEMONIC=a twelve word mnemonic phrase that works with some test network buddy
INFURA_API_KEY=yOUrInfURaKEy
```

## Run

```
yarn lint:watch
```

## Test

```
truffle develop
yarn test
```

## Deploy

```
truffle develop
yarn deploy --network develop

// this just runs truffle migrate --reset --compile-all
```

# Rimble Front-End React app

```
cd webapp
yarn install
yarn start
```

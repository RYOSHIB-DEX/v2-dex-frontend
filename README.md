# RyoshibDEX V2 Interface

## [https://github.com/RYOSHIB-DEX/v2-dex-frontend](https://github.com/RYOSHIB-DEX/v2-dex-frontend)

[![Tests](https://github.com/Uniswap/uniswap-interface/workflows/Tests/badge.svg)](https://github.com/Uniswap/uniswap-interface/actions?query=workflow%3ATests)
[![Styled With Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

An open source interface for RyoshibDEX.

- Website: [ryoshib.io](https://ryoshib.io/)
- Twitter: [@RYOSHIBDEX](https://twitter.com/RYOSHIBDEX)

## Listing a token

Please see the
[@uniswap/default-token-list](https://github.com/uniswap/default-token-list) 
repository.

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

## Contributions

**Please open all pull requests against the `master` branch.** 
CI checks will run against all PRs.

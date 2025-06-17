# Chainlink TRON Project

This project demonstrates integration between Chainlink's decentralized oracle networks and the TRON blockchain using the Nile testnet.

## Overview

The project consists of:

* A smart contract (`PriceConsumer.sol`) that fetches live BTC/USD price feeds from Chainlink oracles.
* A deployment setup using TronBox.
* A script to interact with the deployed contract and retrieve live data.

## Project Structure

```
CHAINLINK-TRON-PROJECT/
├── contracts/
│   ├── Migrations.sol
│   └── PriceConsumer.sol
├── migrations/
│   └── 2_deploy_consumer.js
├── scripts/
│   └── test.js
|   └── .env
├── tronbox.js
├── package.json
```

## Prerequisites

* Node.js (>=20)
* npm
* TronBox installed globally (`npm install -g tronbox`)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/aziz1975/chainlink-tron-project.git
cd chainlink-tron-project
```

2. Install dependencies:

```bash
npm install
npm install @chainlink/contracts
```

## Configuration

* Create a `.env` file in scripts folder and provide your private key and the TRON Nile testnet RPC URL:

```env
PRIVATE_KEY_NILE=your_private_key_here
FULL_NODE_NILE=https://nile.trongrid.io
```

## Deploying Contracts

Deploy your smart contract to the Nile testnet:

```bash
tronbox compile
tronbox migrate --network nile
```

## Running the Test Script

Execute the script to interact with the deployed contract:

```bash
node scripts/test.js
```

You should see an output similar to:

```
Description: BTC/USD
Raw price: 650000000000
Decimals : 8
Normalized price: 6500
```

## Smart Contract Details

* `PriceConsumer.sol`: Fetches live BTC/USD price data from Chainlink on TRON Nile.
* `Migrations.sol`: Tracks migration state of deployments.

## Key Files

* `tronbox.js`: TronBox configuration.
* `2_deploy_consumer.js`: Deploys the PriceConsumer smart contract with the correct Chainlink feed address.
* `test.js`: Script to test fetching live data from deployed contract.

## Resources

* [TRON Nile Testnet](https://nile.tronscan.org)
* [Chainlink Documentation](https://docs.chain.link/data-feeds/price-feeds/addresses?page=1&testnetPage=1&network=tron#tron-nile-testnet)
* [TronBox Documentation](https://developers.tron.network/docs/tronbox)

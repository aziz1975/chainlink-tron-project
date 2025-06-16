import {TronWeb} from 'tronweb';
import * as dotenv from 'dotenv';
dotenv.config();

async function main() {
  const fullHost = process.env.FULL_NODE_NILE;
  const privateKey = process.env.PRIVATE_KEY_NILE;
  const tronWeb  = new TronWeb({ fullHost, privateKey });

  // 1) Paste the deployed consumer address here:
  const consumerAddr = 'TT83iQ1Yc4ScDMh8tmzdkuzWT7Ea2nAvf6';

  // 2) Instantiate and call:
  const contract = await tronWeb.contract().at(consumerAddr);
  const [ price, decimals, description ] = await contract.getLatestPrice().call();

  console.log('Description:', description);
  console.log('Raw price:', price.toString());
  console.log('Decimals :', decimals.toString());
  console.log(
    'Normalized price:',
    Number(price.toString()) / 10 ** Number(decimals)
  );
}

main().catch(console.error);

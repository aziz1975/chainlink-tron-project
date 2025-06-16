const PriceConsumer = artifacts.require('PriceConsumer');
const {TronWeb}       = require('tronweb');

module.exports = async function (deployer, network) {
  if (network !== 'nile') return;

  // 1) The Nile Chainlink BTC/USD feed in Base58:
  const btcUsdBase58 = 'TD3hrfAtPcnkLSsRh4UTgjXBo6KyRfT1AR';
  // 2) Convert to hex (prefix 41…):
  const btcUsdHex    = TronWeb.address.toHex(btcUsdBase58);

  // 3) Deploy your consumer pointing at that feed:
  await deployer.deploy(PriceConsumer, btcUsdHex);
  console.log('PriceConsumer deployed at:', PriceConsumer.address);
};

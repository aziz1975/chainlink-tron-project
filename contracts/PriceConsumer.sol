// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 1) Import Chainlink’s standard Aggregator interface:
import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract PriceConsumer {
  AggregatorV3Interface public priceFeed;

  // 2) Constructor accepts the on-chain feed address:
  constructor(address _aggregator) {
    priceFeed = AggregatorV3Interface(_aggregator);
  }

  // 3) Read the latest price & its decimals:
  function getLatestPrice()
    external
    view
    returns (int256 price, uint8 decimals_, string memory description)
  {
    (, price, , , ) = priceFeed.latestRoundData();
    decimals_       = priceFeed.decimals();
    description = priceFeed.description();
  }
}

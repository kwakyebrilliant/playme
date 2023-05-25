// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract WordScribble {
    struct Word {
        string word;
        address creator;
        address solver;
        uint256 reward;
        bool solved;
        uint256 solveTime;
        bool refundClaimed;
    }

    Word[] public words;
        mapping(address => uint256) public balances;
        AggregatorV3Interface internal priceFeed;


}
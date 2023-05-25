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

        constructor(address _priceFeedAddress) {
        priceFeed = AggregatorV3Interface(_priceFeedAddress);
    }

     function addWord(string memory _word, uint256 _reward) public {
        words.push(Word({
            word: _word,
            creator: msg.sender,
            solver: address(0),
            reward: _reward,
            solved: false,
            solveTime: 0,
            refundClaimed: false
        }));
    }


}
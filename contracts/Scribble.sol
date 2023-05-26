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


    // Add a word
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



    // solve a word
    function solveWord(uint256 _wordIndex) public payable {
        Word storage word = words[_wordIndex];
        require(!word.solved, "Word has already been solved");
        require(msg.value == word.reward, "Incorrect reward amount");
        require(word.solveTime == 0, "Another user is already solving this word");

        word.solveTime = block.timestamp + 30; // Set 30-second time limit for solving the word
        balances[msg.sender] += msg.value;
    }



    // submit a word
     function submitSolution(uint256 _wordIndex, string memory _solution) public {
        Word storage word = words[_wordIndex];
        require(!word.solved, "Word has already been solved");
        require(word.solveTime != 0 && block.timestamp <= word.solveTime, "Time limit for solving the word has expired");
        require(word.solver == address(0), "Another user has already solved this word");

        if (keccak256(bytes(_solution)) == keccak256(bytes(word.word))) {
            word.solver = msg.sender;
            word.solved = true;
            balances[msg.sender] += word.reward;
        }
    }






}
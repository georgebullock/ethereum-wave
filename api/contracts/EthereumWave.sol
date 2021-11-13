// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract EthereumWave {
    uint256 public totalWaves;

    event NewWave(address indexed from, string message, uint256 timestamp);

    struct Wave {
        address waver;
        string message;
        uint256 timeStamp;
    }

    Wave[] public waves;

    constructor() payable {
        console.log("This is Ethereum Wave");
    }

    function wave(string memory _message) public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);

        waves.push(Wave(msg.sender, _message, block.timestamp));
        emit NewWave(msg.sender, _message, block.timestamp);

        uint256 wavePayment = 0.0001 ether;
        require(
            wavePayment <= address(this).balance,
            "Transaction cancelled. Insufficient funds."
        );
        (bool success, ) = (msg.sender).call{value: wavePayment}("");

        require(success, "Failed to withdraw payment from contract.");
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract EthereumWave {
    uint256 public totalWaves;
    uint256 private seed;
    event NewWave(address indexed from, string message, uint256 timestamp);
    struct Wave {
        address waver;
        string message;
        uint256 timeStamp;
    }
    Wave[] public waves;
    mapping(address => uint256) public lastWavedAt;

    constructor() payable {
        console.log("This is Ethereum Wave");
        seed = (block.timestamp + block.difficulty) % 100;
    }

    function wave(string memory _message) public {
        require(
            lastWavedAt[msg.sender] + 30 seconds < block.timestamp,
            "You can wave again in 30 seconds"
        );
        lastWavedAt[msg.sender] = block.timestamp;

        totalWaves += 1;
        console.log("%s has waved!", msg.sender);

        waves.push(Wave(msg.sender, _message, block.timestamp));
        seed = (block.difficulty + block.timestamp + seed) % 100;
        console.log("%s seed!", seed);

        if (seed <= 50) {
            console.log("%s won!", msg.sender);
            uint256 wavePayment = 0.0001 ether;
            require(
                wavePayment <= address(this).balance,
                "Transaction cancelled. Insufficient funds."
            );

            (bool success, ) = (msg.sender).call{value: wavePayment}("");
            require(success, "Failed to withdraw payment from contract.");
        }

        emit NewWave(msg.sender, _message, block.timestamp);
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}

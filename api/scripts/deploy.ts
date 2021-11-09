// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import hre from "hardhat";

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const signerBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", signerBalance.toString());

  const Token = await hre.ethers.getContractFactory("EthereumWave");
  const portal = await Token.deploy();
  await portal.deployed;

  console.log("WavePortal address: ", portal.address);
};

const runMain = async () => {
  try {
    await main();
    process.exitCode = 0;
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
};

runMain();

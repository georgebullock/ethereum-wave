import hre from "hardhat";

const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory(
    "EthereumWave"
  );

  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther(".001"),
  });

  await waveContract.deployed();
  console.log("WavePortal address: ", waveContract.address);
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

import hre from "hardhat";

const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory(
    "EthereumWave"
  );
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount = await waveContract.getTotalWaves();
  let waveTxn = await waveContract.wave();
  await waveTxn.wait();
  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();
  waveCount = await waveContract.getTotalWaves();
};

const runMain = async () => {
  try {
    await main();
    process.exitCode = 0;
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  }
};

runMain();

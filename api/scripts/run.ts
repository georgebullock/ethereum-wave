import hre from "hardhat";

const main = async () => {
  // @ts-ignore
  const waveContractFactory = await hre.ethers.getContractFactory(
    "EthereumWave"
  );
  const waveContract = await waveContractFactory.deploy({
    // @ts-ignore
    value: hre.ethers.utils.parseEther("0.1"),
  });
  await waveContract.deployed();
  console.log("Contract address:", waveContract.address);

  // @ts-ignore
  let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  );

  console.log(
    "Contract balance:",
    // @ts-ignore
    hre.ethers.utils.formatEther(contractBalance)
  );

  // @ts-ignore
  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    // @ts-ignore
    hre.ethers.utils.formatEther(contractBalance)
  );

  let waveTxn = await waveContract.wave("I'm a test wave");
  await waveTxn.wait();

  let waveCount = await waveContract.getTotalWaves();
  console.log(waveCount.toNumber());

  // @ts-ignore
  const [_, randomPerson] = await hre.ethers.getSigners();
  waveTxn = await waveContract
    .connect(randomPerson)
    .wave("I'm a test wave, too");

  waveCount = await waveContract.getTotalWaves();
  await waveTxn.wait();

  const allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
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

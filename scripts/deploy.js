const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  let txHash, txReceipt;

  const Scribble = await hre.ethers.getContractFactory("Scribble");
  const scribble = await Scribble.deploy();
  await scribble.deployed();

  txHash = scribble.deployTransaction.hash;
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let scribbleAddress = txReceipt.contractAddress;

  console.log("Scribble contract address", scribbleAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
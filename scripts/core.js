async function main() {
  const DeSwapFactory = await ethers.getContractFactory("DeSwapFactory");
  const deSwapFactory = await DeSwapFactory.deploy('0x67826Cb510f005235AE0002c944888644AcFd3Df');
  
  await deSwapFactory.deployed()
  console.log("DeSwapFactory deployed to:", deSwapFactory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


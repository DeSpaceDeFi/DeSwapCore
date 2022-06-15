async function main() {
  const DeSwapFactory = await ethers.getContractFactory("DeSwapFactory");
  const deSwapFactory = await DeSwapFactory.deploy(
    "0xBD736cf04EcEEBd66f3014d6d4F88668243297E0" //Des Main
    // "0x67826Cb510f005235AE0002c944888644AcFd3Df" Des Test
  );

  await deSwapFactory.deployed();
  console.log("DeSwapFactory deployed to:", deSwapFactory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

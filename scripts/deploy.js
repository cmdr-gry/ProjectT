async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const token = await ethers.getContractFactory("token");
  const Token = await token.deploy();
  const marketplace = await ethers.getContractFactory("marketplace");
  const Marketplace = await marketplace.deploy(adr); // try to find whats correct argument
  
  console.log("Token address:", Token.address);
  console.log("Marketplace address:", Marketplace.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
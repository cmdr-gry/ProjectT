const marketplace = artifacts.require("marketplace");
const token = artifacts.require("token");

module.exports = (deployer, network, [owner]) => deployer
  .then(() => deployMarketplace(deployer))

function deployMarketplace(deployer) {
  deployer.then(async () => {
      await deployer.deploy(marketplace);
      await deployer.deploy(token.address);
    
});
}
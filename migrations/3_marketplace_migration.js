const marketplace = artifacts.require("marketplace");
const token = artifacts.require("token");

module.exports = (deployer, network, [owner]) => deployer
  .then(() => deployMarketplace(deployer))

function deployMarketplace(deployer) {
  return deployer.deploy(
    marketplace, token.address);
    
};

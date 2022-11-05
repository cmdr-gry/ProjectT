const token = artifacts.require("token");

module.exports = (deployer, network, [owner]) => deployer
  .then(() => deployToken(deployer))

function deployToken(deployer){
  return deployer.deploy(
      token
    );
}
const marketplace = artifacts.require("marketplace");
const token = artifacts.require("token");

module.exports = (deployer, _network, [owner]) => deployer
  .then(async() => await createToken1())
  .then(async() => await createToken2())
  .then(async() => await createToken3())
  .then(async() => await mintTokens());

async function createToken1(){
  (await token.deployed()).create(0, "");
}

async function createToken2(){
  (await token.deployed()).create(0, "");

}

async function createToken3(){
  (await token.deployed()).create(0, "");
}
function mintTokens(){
  token.deployed().then(instance => {
    instance.mint(1, [marketplace.address], [30]);
    instance.mint(2, [marketplace.address], [20]);
    instance.mint(3, [marketplace.address], [10]);
  });
}
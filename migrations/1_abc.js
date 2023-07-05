var abc = artifacts.require("./ABC.sol");

module.exports = function (deployer) {
  // deployment steps
  deployer.deploy(abc);
};

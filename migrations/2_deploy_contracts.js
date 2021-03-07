var Count = artifacts.require("./Count.sol");
var ContractCaller = artifacts.require("./ContractCaller.sol");

module.exports = async function(deployer) {
    await deployer.deploy(Count);
    await deployer.deploy(ContractCaller);
};

var MoneyPolicy = artifacts.require("./MoneyPolicy.sol");

module.exports = async function(deployer) {
    await deployer.deploy(MoneyPolicy);
};

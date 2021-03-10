const { assert } = require('chai')

const MoneyPolicy = artifacts.require("./MoneyPolicy.sol");

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract("MoneyPolicy", accounts => {
  let MoneyPolicyInstance
  
  before(async () => {
     MoneyPolicyInstance = await MoneyPolicy.deployed();
  
  })

  it("Should deploy the contract", async () => {
    address = MoneyPolicyInstance.address
    assert.equal(address, MoneyPolicyInstance.address)
  });

 
  it("Whitelists Address", async () => {
    
  });

  it("Sets Interest Rate", async () => {
    
  });

  it("Distributes Interest", async () => {
    
  });

});

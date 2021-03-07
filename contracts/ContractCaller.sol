pragma solidity ^0.6.0;


interface Count {
    function increment() external;
}

contract ContractCaller {

    function incrementsCount(address _contractAddress) public {
        Count CountContract = Count(_contractAddress);
        CountContract.increment();
    }

}
pragma solidity ^0.6.0;

contract MoneyPolicy {
    
    address public admin;
    
    
    constructor() public {
        admin = msg.sender;
    }

    

}
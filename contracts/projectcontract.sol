pragma solidity 0.8.7;

import "./ownable.sol";

contract projectcontract is Ownable {

mapping(address => uint256) ziggurats;

   uint32 constant private zigguratCost = 1000;
   uint16 constant private newZiggurat = 1;
   mapping(address => uint256) storedbrains;

   function devcreateZiggurat() public onlyOwner {
      ziggurats[msg.sender] += newZiggurat;
   }

      function buyZiggurat(uint256 quantity) public {
      require(storedbrains[msg.sender] >= 1000);
      
      uint256 zigguratPurchase = (quantity * zigguratCost);
      storedbrains[msg.sender] -= zigguratPurchase;
      ziggurats[msg.sender] += quantity;

   }
 // check functions here to check how many ziggurats or brains one has

      function checkBrains() public view returns (uint256) {
      return storedbrains[msg.sender];

   }

   function checkZiggurats() public view returns (uint256) {
      return ziggurats[msg.sender];

   }

// function to transfer X brains from program to smart contract externally - need to research this a bit

   //function transferBrainsInside()



}
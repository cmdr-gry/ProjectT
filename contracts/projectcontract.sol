pragma solidity 0.8.7;

import "./ownable.sol";

contract projectcontract is Ownable {

mapping(address => uint256) ziggurats;

   uint32 constant private zigguratCost = 1;
   uint16 constant private newZiggurat = 1;
   mapping(address => uint256) storedstones;

   function devcreateZiggurat() public onlyOwner {
      ziggurats[msg.sender] += newChamber;
   }

      function buyZiggurat(uint256 quantity) public {
      require(storedstones[msg.sender] >= 1);
      
      uint256 zigguratPurchase = (quantity * zigguratCost);
      storedstones[msg.sender] -= zigguratPurchase;
      ziggurats[msg.sender] += quantity;

   }


}
pragma solidity 0.8.7;

import "./IERC1155.sol";

contract Marketplace {
IERC1155 private _token;

mapping (uint256 => uint256) price;

constructor(IERC1155 token) public {
   require(address(token) != address(0));
   _token = token;
   price[1] = 10000000000000;
   price[2] = 10000000000000;
   price[3] = 10000000000000;
}

 function () external payable {
buyToken(1);
''}


function buyToken(uint256 tokenId) public payable {
uint256 weiAmount = msg.value;
require(weiAmount >= price[tokenId] && price[tokenId] != 0)

_token.safetransferFrom(address(this), msg.sender, tokenId, 1, "");
}
function onERC1155Received(address _operator, address _from, uint256 _id, uint256 _value, bytes calldata _data)
return bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"));
}
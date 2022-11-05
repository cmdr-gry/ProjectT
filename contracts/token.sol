pragma solidity 0.8.17;

import "./ERC1155.sol";
import "./ERC1155Mintable.sol";

contract GameToken is ERC1155, ERC1155Mintable {
constructor() {

}
function supportsInterface(bytes4 interfaceId) public pure virtual override(ERC1155, ERC1155Mintable) returns (bool) {
        return super.supportsInterface(interfaceId);
}
}

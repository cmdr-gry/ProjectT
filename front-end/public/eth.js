window.addEventListener('load', () => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
   if (window.ethereum) {
     const web3 = new Web3(window.ethereum);
     try {
       // Request account access if needed
       window.ethereum.enable();
       // Acccounts now exposed
       return web3;
     } catch (error) {
       console.error(error);
     }
   }
   // Legacy dapp browsers...
   else if (window.web3) {
     // Use Mist/MetaMask's provider.
     const web3 = window.web3;
     console.log('Injected web3 detected.');
     return web3;
   }
   // Fallback to localhost; use dev console port by default...
   else {
     const provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
     const web3 = new Web3(provider);
     console.log('No web3 instance injected, using Local web3.');
     return web3;
   }
 });
 function buy(id){

  

var marketplaceAbi = [
  {
    "inputs": [
      {
        "name": "token",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "buyToken",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function",
    "signature": "0x2d296bf1"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_operator",
        "type": "address"
      },
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_id",
        "type": "uint256"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "onERC1155Received",
    "outputs": [
      {
        "name": "",
        "type": "bytes4"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xf23a6e61"
  }
];

var tokenAbi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x00fdd58e"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_initialSupply",
        "type": "uint256"
      },
      {
        "name": "_uri",
        "type": "string"
      }
    ],
    "name": "create",
    "outputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x0118fa49"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x01ffc9a7"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_ids",
        "type": "uint256[]"
      },
      {
        "name": "_values",
        "type": "uint256[]"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "safeBatchTransferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x2eb2c2d6"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owners",
        "type": "address[]"
      },
      {
        "name": "_ids",
        "type": "uint256[]"
      }
    ],
    "name": "balanceOfBatch",
    "outputs": [
      {
        "name": "",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x4e1273f4"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_uri",
        "type": "string"
      },
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "setURI",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x67db3b8f"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_operator",
        "type": "address"
      },
      {
        "name": "_approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xa22cb465"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "nonce",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xaffed0e0"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "creators",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xcd53d08e"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      },
      {
        "name": "_to",
        "type": "address[]"
      },
      {
        "name": "_quantities",
        "type": "uint256[]"
      }
    ],
    "name": "mint",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xcfa84fc1"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "ERC1155_RECEIVED",
    "outputs": [
      {
        "name": "",
        "type": "bytes4"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xe0a5c949"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xe985e9c5"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_id",
        "type": "uint256"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xf242432a"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "ERC1155_BATCH_RECEIVED",
    "outputs": [
      {
        "name": "",
        "type": "bytes4"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xfc67bf1c"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_operator",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "TransferSingle",
    "type": "event",
    "signature": "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_operator",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_ids",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "name": "_values",
        "type": "uint256[]"
      }
    ],
    "name": "TransferBatch",
    "type": "event",
    "signature": "0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_operator",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event",
    "signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_value",
        "type": "string"
      },
      {
        "indexed": true,
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "URI",
    "type": "event",
    "signature": "0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b"
  }
];

var token = new web3.eth.Contract(tokenAbi, "0xd1B614d468be561c20f60cCa2d8c38820025Da65");
var marketplace = new web3.eth.Contract(marketplaceAbi, "0x102b0f41e92df343255e83c94B064287706eCb7B");

web3.eth.getAccounts().then(accountArray => {
  var options = {
    from: accountArray[0],
    value: 0
  };
  if(id == 1)
    options.value = 100000000000000;
  else if(id == 2)
    options.value = 200000000000000;
  else if(id == 3)
    options.value = 300000000000000;

  marketplace.methods.buyToken(id).send(options)
  .on('receipt', receipt => {
    alert("Transaction Complete");
  })
});
}
getUserItems();

function getUserItems(){
  web3.eth.requestAccounts().then(accountArray => {
    var account = accountArray[0];

    var tokenPromise1 = token.methods.balanceOf(account, 1).call();
    var tokenPromise2 = token.methods.balanceOf(account, 2).call();
    var tokenPromise3 = token.methods.balanceOf(account, 3).call();

    Promise.all([tokenPromise1, tokenPromise2, tokenPromise3]).then(values => {
      console.log(values);
      if(values[0] > 0)
        console.log("User has item 1");
      if(values[1] > 0)
        console.log("User has item 2");
      if(values[2] > 0)
        console.log("User has item 3");
    })
  });
}

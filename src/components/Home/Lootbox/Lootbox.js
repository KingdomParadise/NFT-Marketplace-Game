import {useState, useEffect} from 'react'
import Web3 from 'web3'
import {VaporcrateModal} from "../../Home/Dialog/Dialog"

import lootbox1 from "../../../assets/lootbox1.png";
import lootbox2 from "../../../assets/lootbox2.png";
import lootbox3 from "../../../assets/lootbox3.png";

const contract_abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "buyToken",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

// product mode
// const contract_address = {
//   "Basic Vaporcrate" : "0x15EAc8fE0a1379a578aCbF82AF2Fd38270e2BA57",
//   "Epic Vaporcrate" : "0xD740146E7445D3C1bdfA6579f966dCA278ea50cA",
//   "Legendary Vaporcrate" : "0xbCBE4A9c5bbB9Cd69F5746e5748dee91B547F209",
// };

// develop mode
const contract_address = {
	"Basic Vaporcrate" : "0x15EAc8fE0a1379a578aCbF82AF2Fd38270e2BA57",
	"Epic Vaporcrate" : "0xD740146E7445D3C1bdfA6579f966dCA278ea50cA",
	"Legendary Vaporcrate" : "0xbCBE4A9c5bbB9Cd69F5746e5748dee91B547F209",
  };

export default function Lootbox(props) {
  const [tokenRemain, setTokenRemain] = useState(props.count);

  useEffect(() => {
    if(window.ethereum === undefined)
      return;
    window.ethereum
      .request({ method: 'eth_accounts' })
      .then()
      .catch((err) => {
        console.error(err);
    });

    const web3 = new Web3(window.ethereum);
    const tokenContract = new web3.eth.Contract(contract_abi, contract_address[props.title]);
    tokenContract.methods.balanceOf(contract_address[props.title]).call().then((data) => {setTokenRemain(data);});
  }, []);

  function buyItem() {
	if(!window.ethereum.selectedAddress) {
		alert("Please connect wallet!");
		return;
	  }
	window.ethereum
	.request({
		method: 'eth_sendTransaction',
		params: [
		{
			from: window.ethereum.selectedAddress,
			to: contract_address[props.title],
			value: "0x"+(props.price * (10**18)).toString(16),
			data: "0x2d296bf1" + "0000000000000000000000000000000000000000000000000000000000000001",
		},
		],
	})
	.then((data) => setTokenRemain(tokenRemain - 1))
	.catch((error) => {});
  }

  function buyClickHandle() {
    if(!window.ethereum) {
      alert("Please install metamask!");
      return;
    }
	window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then(buyItem)
      .catch((error) => {
        if (error.code === 4001) {
          console.log('Please connect to MetaMask.');
        } else {
          console.error(error);
        }
      });
  }

  return (
    <div>
      <div className="custom-box-shadow rounded-xl pt-2 pb-5 px-2">
        <img src={props.src} className="mx-auto p-4" />
        <p className="text-white text-base">{props.title}</p>
        <p className="flex items-center justify-center text-white text-opacity-50 text-xs h-8 md:h-20 lg:h-12">{props.desc}</p>
        <p className="text-white text-base">{props.price + ' BNB'}</p>
				<VaporcrateModal src={props.src} title={props.title} desc={props.desc} count={props.count} color={props.color} buyClickHandle = {buyClickHandle} tokenRemain = {tokenRemain} />
      </div>
      <p className="text-white text-opacity-50 text-xs py-2">{tokenRemain}/{props.count} Left</p>
    </div>
  );
}

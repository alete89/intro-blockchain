import Web3 from 'web3'

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
let walletABI = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "wallet",
        "outputs": [
            {
                "name": "",
                "type": "int256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xa56cc439"
    }, {
        "constant": false,
        "inputs": [
            {
                "name": "owner",
                "type": "address"
            }, {
                "name": "howMuch",
                "type": "int256"
            }
        ],
        "name": "put",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xb129a94e"
    }, {
        "constant": false,
        "inputs": [
            {
                "name": "owner",
                "type": "address"
            }, {
                "name": "howMuch",
                "type": "int256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x7da7d3f1"
    }, {
        "constant": true,
        "inputs": [
            {
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balance",
        "outputs": [
            {
                "name": "",
                "type": "int256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xe3d670d7"
    }
]

export const walletAddress = '0x2E6DDED461CAfFFD4f51074Fa895ae87C060b8e0'
web3.eth.defaultAccount = web3.eth.accounts[0]

const walletContract = new web3
    .eth
    .Contract(walletABI, walletAddress)

export const txAccount = '0x884e8452cd8e45c0A117E6D666C6d1510160441F'

export {walletContract}
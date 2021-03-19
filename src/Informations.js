// src/Footer.js
import './Informations.css'

import React from 'react'

function Footer() {
  return (
    <div className="Informations">
      <h1> Tokeneconomics </h1>
        <ul> Total Supply : 100,000,000,000,000,000 SPORE </ul>
        <ul> Dev fund : 0% </ul>
        <ul id="burnedTokens"> Burned tokens : SPORE </ul>
      <h1> What is Spore Finance </h1>
        <ul> Amazed by the Avalanche Network first generation of pools, this is the first reflect token there to be. On every transaction, 3% of the rewards are burnt forever and 3% are redistributed to all the owners. Earn frictionless rewards while your spores spread! Deflation reduces the supply increasing the token value over time. </ul>
      <h1> Roadmap </h1>
        <ul> 1. Fair and stealth launch</ul>
        <ul> 2. Upcoming farms / NFTs </ul>
        <ul> 3. Partnerhips </ul>
        <ul> 4. Governance </ul>
        <ul> 5. Second layer blockchain development </ul>
        <ul> 6. Cross-chain bridges </ul>
      <h1> Links </h1>
        <ul> <a href="https://cchain.explorer.avax.network/address/0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985/transactions" target="_blank" rel="noopener noreferrer"> Token address </a></ul>
        <ul> <a href="https://cchain.explorer.avax.network/tx/0x7df1694004dd6e994d31f76c3978718e017fe6e6112482866051aca7ab90caa6/token-transfers" target="_blank" rel="noopener noreferrer"> 2.5% of supply burnt tx </a></ul>
        <ul> <a href="https://cchain.explorer.avax.network/tx/0xe3e92326e2993a270a2fdd44a7301e6adccb7dd1b40bcc4ed9ed88ec963a22ab/token-transfers" target="_blank" rel="noopener noreferrer"> LP-burnt tx </a></ul>
        <ul> <a href="https://cchain.explorer.avax.network/address/0x88Dd784dFaaB1a7752d2CC81071Fcd12C1c4E1db/" target="_blank" rel="noopener noreferrer"> DEV wallet address </a></ul>
        <ul> <a href="https://cchain.explorer.avax.network/tx/0x5fa10181e6c9841aa2226b5468e2b92f0268feaf178626472428e9839ab76982/internal-transactions" target="_blank" rel="noopener noreferrer"> Renounced ownership tx </a></ul>
        <ul> <a href="https://discord.gg/hYDnmyadJC" target="_blank" rel="noopener noreferrer"> Discord </a></ul>
        <ul> <a href="https://t.me/joinchat/BN0YR2yy2cU1ZWJk" target="_blank" rel="noopener noreferrer"> Telegram </a></ul>
    </div>
  )
}

export default Footer

var sporeABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"spender","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowTradeAt","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"decreaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"enableFairLaunch","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"excludeAccount","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"includeAccount","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"increaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"addedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isExcluded","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"reflect","inputs":[{"type":"uint256","name":"tAmount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"reflectionFromToken","inputs":[{"type":"uint256","name":"tAmount","internalType":"uint256"},{"type":"bool","name":"deductTransferFee","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenFromReflection","inputs":[{"type":"uint256","name":"rAmount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalFees","inputs":[]},{"type":"function","stateMutability":"pure","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"sender","internalType":"address"},{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]}]

const Web3 = require("web3");
var Contract = require('web3-eth-contract');
const ethEnabled = () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    return true;
  }
  return false;
}

async function getBurnedTokens(){
  var sporeERC20 = new window.web3.eth.Contract(sporeABI, "0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985")
  var tokenBurned = await sporeERC20.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call()
  var bt = document.getElementById("burnedTokens")
  console.log(bt)
  bt.textContent = " Burned tokens : "+(tokenBurned/10**9).toLocaleString()+" SPORE (" +(tokenBurned/10**24).toLocaleString()+ "%)"
  console.log((tokenBurned/10**9).toLocaleString())
}

ethEnabled()
getBurnedTokens()

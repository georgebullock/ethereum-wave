import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";
import "./App.css";
import { ethers } from "ethers";
import ETHEREUM_WAVE_ABI from "./EthereumWave.json";

export default function App() {
  const [currentAccount, setCurrentAccount] = useState();
  const [count, setCount] = useState();

  const checkWalletConnection = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) return;

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Ethereum account connected:", account);
        setCurrentAccount(account);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum)
        alert(
          "You must install MetaMask on your browser to use this app. Checkout https://metamask.io/ to get MetaMask"
        );

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Wallet connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const wave = async () => {
    const { ethereum } = window;
    if (!ethereum) console.error("Ethereum object not available. Get MetaMask");

    const contractAddress = "0xFE428193bdB74F613FbA4C82C6ea859f00087512";
    const contractABI = ETHEREUM_WAVE_ABI.abi;

    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = await provider.getSigner();
      const ethereumWaveContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const waveTxn = await ethereumWaveContract.wave();
      console.log("Wave Txn Hash:", waveTxn.hash);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const waveCount = async () => {
    const { ethereum } = window;
    if (!ethereum) console.error("Ethereum object not available. Get MetaMask");

    const contractAddress = "0xFE428193bdB74F613FbA4C82C6ea859f00087512";
    const contractABI = ETHEREUM_WAVE_ABI.abi;

    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = await provider.getSigner();
      const ethereumWaveContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      let count = await ethereumWaveContract.getTotalWaves();
      return count.toNumber();
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    checkWalletConnection();

    const getWaveCount = async () => {
      const count = await waveCount();
      setCount(count);
    };

    getWaveCount();
  }, []);

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
          <span role="img" aria-label="emoji">
            👋 Hey, I'm George
          </span>
        </div>

        <div className="bio">
          A frontend developer based in Berlin, Germany.
        </div>

        <div className="bio">
          Wave at me below and it will live on the Ethereum blockchain, forever
          <span role="img" aria-label="emoji">
            🤯
          </span>
          ;
        </div>

        <div className="bio">
          I have received {count > 0 ? count : "Loading Waves..."} waves
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>

        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

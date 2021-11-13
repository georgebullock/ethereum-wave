import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";
import "./App.css";
import { ethers } from "ethers";
import ETHEREUM_WAVE_ABI from "./EthereumWave.json";

export default function App() {
  const [currentAccount, setCurrentAccount] = useState();
  const [waves, setWaves] = useState([]);

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

    const contractAddress = "0x937dF474c0b3833e9646e5Df55B6F236dCEeab95";
    const contractABI = ETHEREUM_WAVE_ABI.abi;

    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = await provider.getSigner();
      const ethereumWaveContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const waveTxn = await ethereumWaveContract.wave(
        "First wave: Hello World!"
      );
      console.log("Wave Txn Hash:", waveTxn.hash);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const getAllWaves = async () => {
    const { ethereum } = window;
    if (!ethereum) console.error("Ethereum object not available. Get MetaMask");

    const contractAddress = "0x355c1291d4d8d828bcA636caFB357363E106F999";
    const contractABI = ETHEREUM_WAVE_ABI.abi;

    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = await provider.getSigner();
      const ethereumWaveContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      let waves = await ethereumWaveContract.getAllWaves();

      return waves;
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    checkWalletConnection();

    const fetchWaves = async () => {
      const waves = await getAllWaves();
      const formattedWaves =
        waves &&
        waves.map((item) => {
          return {
            address: item.waver,
            message: item.message,
            timeStamp: new Date(item.timeStamp * 1000),
          };
        });

      setWaves(formattedWaves);
    };

    fetchWaves();
  }, []);

  console.log("waves:", waves);

  const content =
    waves &&
    waves.map((wave) => {
      return (
        <div key={wave.address}>
          <p>{wave.address}</p>
          <p>{wave.message}</p>
          <p>{wave.timeStamp.toString()}</p>
        </div>
      );
    });

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
          I have received {waves && waves.length > 0 ? waves.length : 0} waves
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>

        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}

        <div className="bio">{content}</div>
      </div>
    </div>
  );
}

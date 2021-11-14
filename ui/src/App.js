import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";
import "./App.css";
import { ethers } from "ethers";
import ETHEREUM_WAVE_ABI from "./EthereumWave.json";

export default function App() {
  const [currentAccount, setCurrentAccount] = useState();
  const [waves, setWaves] = useState([]);
  const [message, setMessage] = useState("Type something...");

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

    const contractAddress = "0x1A23C7E954CB29C312b4f53907cB93Ad2ffe1141";
    const contractABI = ETHEREUM_WAVE_ABI.abi;

    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = await provider.getSigner();
      const ethereumWaveContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const waveTxn = await ethereumWaveContract.wave(message, {
        gasLimit: 300000,
      });
      console.log("Wave Txn Hash:", waveTxn.hash);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const getAllWaves = async () => {
    const { ethereum } = window;
    if (!ethereum) console.error("Ethereum object not available. Get MetaMask");

    const contractAddress = "0x1A23C7E954CB29C312b4f53907cB93Ad2ffe1141";
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

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const content =
    waves &&
    waves.map((wave, index) => {
      return (
        <li key={`${wave.address}-${index}`} className="wave-item">
          <article className="wave-content">
            <section className="wave-message">
              <span className="wave-text">{wave.message}</span>
            </section>
            <section className="wave-address">
              <span className="wave-label">Sender:</span>
              <span className="wave-text">{wave.address}</span>
            </section>
            <section className="wave-time-stamp">
              <span className="wave-label">Date:</span>
              <span className="wave-text">
                {wave.timeStamp.toLocaleString()}
              </span>
            </section>
          </article>
        </li>
      );
    });

  return (
    <div className="main-container">
      <div className="data-container">
        <div className="header">
          <span role="img" aria-label="emoji">
            👋 Hey, I'm George
          </span>
        </div>

        <section className="bio-container">
          <div className="bio">
            A frontend developer based in Berlin, Germany.
          </div>

          <div className="bio">
            Connect your wallet then push the button "Wave at me" button to wave
            at me. Your wave will live on the Ethereum blockchain, forever
            <span role="img" aria-label="emoji" className="emoji">
              🤯
            </span>
          </div>

          <div className="waves-count">
            Wave count: {waves && waves.length > 0 ? waves.length : 0}
            {waves && waves.length > 0 ? (
              <span role="img" aria-label="emoji" className="emoji">
                🥳
              </span>
            ) : (
              <span role="img" aria-label="emoji" className="emoji">
                🥺
              </span>
            )}
          </div>
        </section>

        <form className="form">
          <label className="form-label">
            <h3 className="form-headline">
              Send a wave
              <span role="img" aria-label="emoji" className="emoji">
                👇🏽
              </span>
              . Send it with text!
            </h3>
            <textarea
              className="comment-text-box"
              name="comment"
              rows="10"
              cols="50"
              onChange={handleChange}
              placeholder={message}
            />
          </label>
        </form>
        <div className="button-group">
          <button className="wave-button" onClick={wave}>
            Wave at Me
          </button>

          {!currentAccount && (
            <button className="wave-button" onClick={connectWallet}>
              Connect Wallet
            </button>
          )}
        </div>
      </div>
      <ul className="wave-list">{content}</ul>
    </div>
  );
}

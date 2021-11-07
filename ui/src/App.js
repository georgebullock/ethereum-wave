import * as React from "react";
// import { ethers } from "ethers";
import "./App.css";

export default function App() {
  const wave = () => {};

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
          <span role="img" aria-label="emoji">
            👋
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

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}

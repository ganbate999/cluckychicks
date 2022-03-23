import React, { useState } from "react";
import { parseEther } from "@ethersproject/units";
import { ETH_VAL } from "../../constants";
import './style.css';

export default function Mint({
  address,
  userSigner,
  localProvider,
  mainnetProvider,
  price,
  minimized,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  contract,
  signer,
  remainTokenCount,
}) {

  const [amount, setAmount] = useState(ETH_VAL);
  const [minting, setMinting] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [mintCount, setMintCount] = useState(1);

  const _decreaseMintCount = () => {
    if (mintCount == 1) return;
    setMintCount(mintCount - 1);
  };

  const _increaseMintCount = () => {
    if (mintCount == 20) return;
    setMintCount(mintCount + 1);
  };

  const mintNftHandler = async () => {
    setMinting(true);
    try {
      const mintFunction = contract["Chicks"].connect(signer)["mint"];
      const hash = await mintFunction(address, mintCount, {
        value: parseEther((amount * mintCount).toString()),
      });
      await hash.wait();
      setMinting(false);
    } catch (e) {
      setMinting(false);
      console.log(e);
    }
  };

  return (
    <div className="mintContainer" id="mintContainer">
      <div className="mint-title">
        <p className="mintTitle">MINTING - MAR 2022</p>
        <p className="mintSubtitle">CLUCKY CHICKS COST 0.05ETH.</p>
        {!web3Modal.cachedProvider && (<p className="mintSubtitle1"> CONNECT TO THE ETHEREUM NETWORK.</p>)}
      </div>
      {
        (web3Modal && web3Modal.cachedProvider) && (
          <div className="mint-part">
            <h2>{10000 - remainTokenCount}/10000</h2>
            <div className="mint-count">
              <a onClick={_decreaseMintCount}>-</a>
              <h2>{mintCount}</h2>
              <a onClick={_increaseMintCount}>+</a>
            </div>
            <div className="mint-btn">
              <a onClick={mintNftHandler}>MINT</a>
            </div>
          </div>
        )
      }
      <div className="mint-image">
        <img src="./assets/image/CluckyChicksLineup.webp" />
      </div>
    </div>
  );
}

import { Button } from "antd";
import React, { useState } from "react";
import { parseEther } from "@ethersproject/units";
import { ETH_VAL } from "../constants";

/*
  ~ What it does? ~

  Displays an Address, Balance, and Wallet as one State component,
  also allows users to log in to existing States and log out

  ~ How can I use? ~

  <State
    address={address}
    localProvider={localProvider}
    userProvider={userProvider}
    mainnetProvider={mainnetProvider}
    price={price}
    web3Modal={web3Modal}
    loadWeb3Modal={loadWeb3Modal}
    logoutOfWeb3Modal={logoutOfWeb3Modal}
    blockExplorer={blockExplorer}
  />

  ~ Features ~

  - Provide address={address} and get balance corresponding to the given address
  - Provide localProvider={localProvider} to access balance on local network
  - Provide userProvider={userProvider} to display a wallet
  - Provide mainnetProvider={mainnetProvider} and your address will be replaced by ENS name
              (ex. "0xa870" => "user.eth")
  - Provide price={price} of ether and get your balance converted to dollars
  - Provide web3Modal={web3Modal}, loadWeb3Modal={loadWeb3Modal}, logoutOfWeb3Modal={logoutOfWeb3Modal}
              to be able to log in/log out to/from existing States
  - Provide blockExplorer={blockExplorer}, click on address and get the link
              (ex. by default "https://etherscan.io/" or for xdai "https://blockscout.com/poa/xdai/")
*/

export default function State({
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
  contract, signer, remainTokenCount, mintPaused
}) {

  const [amount, setAmount] = useState(ETH_VAL);
  const [currentState, setCurrentState] = useState(null);

  const resumeNftHandler = async () => {
    console.log("resume started");
    try {
      const pauseFunction = contract.connect(signer)["pause"];
      const hash = await pauseFunction(0);
      await hash.wait();
      console.log("resumed");
    } catch (e) {
      console.log("resume error");
      console.log(e);
    }
  };

  const pauseNftHandler = async () => {
    console.log("pause started");
    try {
      const pauseFunction = contract.connect(signer)["pause"];
      const hash = await pauseFunction(1);
      await hash.wait();
      console.log("paused");
    } catch (e) {
      console.log("pause error");
      console.log(e);
    }
  };

  const modalButtons = [];
  if (web3Modal) {
    console.log(web3Modal.cachedProvider)
    if (web3Modal.cachedProvider) {
      if (mintPaused) {
        modalButtons.push(
          <Button
            key="logoutbutton"
            style={{ verticalAlign: "top" }}
            onClick={resumeNftHandler}
            className="connect_status light"
          >
            Resume mint
          </Button>,
        );
      }else {
        modalButtons.push(
          <Button
            key="logoutbutton"
            style={{ verticalAlign: "top" }}
            onClick={pauseNftHandler}
            className="connect_status light"
          >
            Pause mint
          </Button>,
        );
      }
    } else {
      modalButtons.push(
        <Button
          key="loginbutton"
          style={{ verticalAlign: "top" }}
          /* type={minimized ? "default" : "primary"}     too many people just defaulting to MM and having a bad time */
          onClick={loadWeb3Modal}
          className="connect_status dark"
        >
        connect wallet
        </Button>,
      );
    }
  }

  return (
    <div>
      {modalButtons}
    </div>
  );
}

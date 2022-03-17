import React, { useState } from "react";
import { parseEther } from "@ethersproject/units";
import { ETH_VAL } from "../../constants";
import { Account } from "../../components";
import { State } from "../../components";

import {
  Container,
  InnerContainer,
  TextWrapper,
  NFTContainer,
  ProgressBarContainer,
  ButtonWrapper,
  ImgWrapper,
  PointWrapper,
} from "./styles"; //k-k

export const Home = ({
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
  mintPaused,
}) => {
  const [amount, setAmount] = useState(ETH_VAL);
  const [minting, setMinting] = useState(false);
  const [cnt, setCnt] = useState(1);
  const [currentAccount, setCurrentAccount] = useState(null);

  const mintNftHandler = async () => {
    setMinting(true);
    try {
      console.log(address);
      const mintFunction = contract.connect(signer)["mint"];

      const hash = await mintFunction(address, cnt, {
        value: parseEther((amount * cnt).toString()),
      });
      await hash.wait();
      setMinting(false);
    } catch (e) {
      setMinting(false);
      console.log(e);
    }
  };

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const connectWalletButton = () => {
    return (
      <button
        onClick={connectWalletHandler}
        className="cta-button connect-wallet-button"
      >
        Connect Wallet
      </button>
    );
  };
  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className="cta-button mint-nft-button">
        Mint NFT
      </button>
    );
  };

  return (
    <Container>
      <InnerContainer>
        <TextWrapper>
          <h1>CHICKS Admin</h1>
          <h2>{10001 - remainTokenCount}/10000</h2>
          <ButtonWrapper>
            <State
              address={address}
              localProvider={localProvider}
              userSigner={userSigner}
              mainnetProvider={mainnetProvider}
              price={price}
              web3Modal={web3Modal}
              loadWeb3Modal={loadWeb3Modal}
              logoutOfWeb3Modal={logoutOfWeb3Modal}
              blockExplorer={blockExplorer}
              contract={contract}
              signer={userSigner}
              remainTokenCount={remainTokenCount}
              mintPaused={mintPaused}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <Account
              address={address}
              localProvider={localProvider}
              userSigner={userSigner}
              mainnetProvider={mainnetProvider}
              price={price}
              web3Modal={web3Modal}
              loadWeb3Modal={loadWeb3Modal}
              logoutOfWeb3Modal={logoutOfWeb3Modal}
              blockExplorer={blockExplorer}
              contract={contract}
              signer={userSigner}
              remainTokenCount={remainTokenCount}
            />
          </ButtonWrapper>
        </TextWrapper>
        <ImgWrapper>
          <img src="/home-hero.png" alt="" />
        </ImgWrapper>
      </InnerContainer>
    </Container>
  );
};

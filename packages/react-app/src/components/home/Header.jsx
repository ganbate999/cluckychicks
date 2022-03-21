import React, { useState } from "react";
import "./style.css";
import { Icon } from '@iconify/react';
import { ConnectWallet } from "./";

export default function Header({
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

const [mobilemenuOpen, setMobileMenuOpen] = useState(false);
const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobilemenuOpen);
}

  return (
    <div className="headerContainer">
        <header className="header">
            <div className="head-contact">
                <a href="https://discord.gg/7d8tkcu7QM">
                    <span className="discord">
                        <Icon icon="fontisto:discord"  style={{ width: '32px', height: '32px' }} />
                    </span>
                </a>
                <a href="https://twitter.com/CluckyChicksNFT">
                    <span className="twitter">
                        <Icon icon="akar-icons:twitter-fill" style={{ width: '32px', height: '32px' }} />
                    </span>
                </a>
                <a href="mailto:paul@cluckychicks.app">
                    <span className="mailbox">
                        <Icon icon="fluent:mail-28-filled" style={{ width: '32px', height: '32px' }} />
                    </span>
                </a>
            </div>
            <div className="logo">
                <img src="./assets/image/CluckyChicksHeadLogo.png" />
            </div>
            <div className="connectwallet-btn">
                <ConnectWallet
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
                {/* <a href="#">CONNECT WALLET</a> */}
            </div>
        </header>
        <div className="mainmenu">
            <div className="arrow top_arr"></div>

            <div className="mobileMenu">
                <div className="mobile_icon" onClick={toggleMobileMenu}>
                    {mobilemenuOpen && (
                        <Icon icon="uil:multiply" color="#ffe14b" width="24" height="24" />
                    )}
                    {!mobilemenuOpen && (
                        <Icon icon="typcn:th-menu" color="#ffe14b" width="24" height="24" />
                    )}
                </div>

                <div className={`mobile_ul ${!mobilemenuOpen ? "collapsed" : ""}`}>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#mintContainer">MINT</a></li>
                        <li><a href="#stakeContainer">STAKE</a></li>
                        <li><a href="#stakeContainer">JOIN</a></li>
                        <li><a href="#roadmapContainer">ROADMAP</a></li>
                        <li><a href="#faqContainer">FAQ</a></li>
                    </ul>
                </div>
            </div>

            <div className="desktopMenu">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#mintContainer">MINT</a></li>
                    <li><a href="#stakeContainer">STAKE</a></li>
                    <li><a href="#stakeContainer">JOIN</a></li>
                    <li><a href="#roadmapContainer" className="test_class">ROADMAP</a></li>
                    <li><a href="#faqContainer" style={{ transition: '0.5s' }}>FAQ</a></li>
                </ul>
            </div>
            
            <div className="arrow bottom_arr"></div>
        </div>
    </div>
  );
}

import React from "react";
// import { Icon } from '@iconify/react';
import './style.css'

export default function RoadMap() {

  return (
    <div className="roadmapContainer" id="roadmapContainer">
      <div className="roadmapBox">
        <div className="innerroadmap">
          <h1>ROADMAP</h1>
          <div className="roadmapContent">
            <div className="roadmapLeft">
              <div className="cc-launch">
                <img src="./assets/image/Newaa.png" width="100%" />
                <div className="cc-launch-txt">
                  <h2>LAUNCH PHASES 1 - 10</h2>
                  <p>Introducing the Cluckyverse. Growing a strong Coop of 10,000 Chicks.</p>
                </div>
              </div>
              <div className="cc-phase2">
                <img src="./assets/image/Phase2Chicks.png" width="100%" />
                <div className="cc-phase2-txt">
                  <h2>GAMING PORTAL</h2>
                  <p>Games will be gradually introduced in the Chicks theme and then tied to the NFTs.</p>
                </div>
              </div>
            </div>
            <div className="roadmapRight">
              <div className="staking-economy">
                <img src="./assets/image/Eggies.png" width="100%" />
                <div className="staking-economy-txt">
                  <h2>STAKING + MARKET</h2>
                  <p>The birth of the Cluckyverse economy through use of the Staking + $EGG market.</p>
                </div>
              </div>
              <div className="chick-factory">
                <img src="./assets/image/Factory.png" width="100%" />
                <div className="chick-factory-txt">
                  <h2>CHICK FACTORY</h2>
                  <p>Clucky Chicks have taken over one of the Robot factories and want to evolve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ownBox">
        <div className="innerownBox">
          <h1>WHY OWN CLUCKY CHICKS?</h1>
          <div className="earnBox ownChild">
            <div className="innerown-img">
              <img src="./assets/image/EARN.png" />
            </div>
            <div className="innerown-text">
              <h2>EARN</h2>
              <p>
                Clucky Chicks can be staked to earn our itility token $EGG.<br />
                This enables marketplace purchases such as leveling your NFT, naming your Chick + adding a personal Backstory.<br />
                Plus future gaming bonuses or even exclusive future NFT mints.
              </p>
            </div>
          </div>
          <div className="playBox ownChild">
            <div className="innerown-img">
              <img src="./assets/image/H2.png" />
            </div>
            <div className="innerown-text">
              <h2>PLAY</h2>
              <p>
                Clucky Chicks are not just an NFT that is awesome to look at.<br />
                We are in the process of creating full blown games to utilize them.<br />
                These will range from our 2D competitive 'Cluck Game', to our 3D 'Cluckyverse Arcade'. Get ready to play together and have some fun.</p>
            </div>
          </div>
          <div className="collectBox ownChild">
            <div className="innerown-img">
              <img src="./assets/image/potion2.png" />
            </div>
            <div className="innerown-text">
              <h2>COLLECT + EVOLVE</h2>
              <p>
                Clucky Chicks will initially launch a total collection of 10,000, in phases of 1000.<br />
                All mints are secret and no-one can see the stats until mint is complete, no snipers!<br />
                $EGG will be used to create Cluckyverse variants down the line.<br />
                This will be a large turning point for the entire economy, be prepared.
              </p>

            </div>
          </div>
          <div className="communityBox ownChild">
            <div className="innerown-img">
              <img src="./assets/image/hen.png" />
            </div>
            <div className="innerown-text">
              <h2>COMMUNITY</h2>
              <p>Clucky Chicks is and always will be a community-first project. Since it's very inception, a dedicated core community has been established. We want to expand our Coop to you and your friends. Be a part of something great. Our community will be first to benefit from every milestone we hit. Join our <a className="dao_link" href="https://snapshot.org/#/clucky.eth">DAO</a> to vote on our future!</p>
            </div>
          </div>
          <div className="chatbtnBox">
            <a href="/discord" target="_blank">
              <img src='./assets/image/discord1.png' width='20px' height='20px' style={{ marginRight: '10px' }} />
              COME CHAT WITH US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Icon } from '@iconify/react';

export default function Stake() {

  return (
    <div className="stakeContainer" id="stakeContainer">
      <div className="joinBox">
        <div className="joinText">
          <h1>JOIN THE CLUCKY CHICKS</h1>
          <p>An anime-inspired alternative universe, where Cluck Chicks are fighting to save the planet from invading Robot overlords.</p>
          <p>While also vying for the attention of other Chicks, to prove who is the most badass motherclucker. Fights will ensure!</p>
          <p>Your NFT will unlock access to the Coop, where you can stake your Chicks, talk to all other holders, plan duels and enter the Cluckyverse.</p>
          <p>As well as play our upcoming suite of competitive PVP and P2E games.</p>
          <a href="https://discord.gg/7d8tkcu7QM">
            <Icon icon="fontisto:discord"  style={{ width: '20px', height: '20px', marginRight: '30px' }} />
            JOIN THE COOP
          </a>
        </div>
      </div>
      <div className="stakeBox">
        <div className="innerstakeBox">
          <div className="imgBox">
            <img src="./assets/image/Clucky-Chicks-Fight.webp" />
          </div>
          <div className="stakeText">
            <p>STAKING AVAILABLE ON LAUNCH!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

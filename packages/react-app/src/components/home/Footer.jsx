import React from "react";
import { Icon } from '@iconify/react';

export default function Footer() {

  return (
    <div className="footerContainer">
      <div className="footer-text">
        <p>© 2022 CLUCKY CHICKS</p>
      </div>
      <div className="footer-contact">
        <a href="https://discord.gg/7d8tkcu7QM">
          <span className="foot-twitter">
              <Icon icon="akar-icons:twitter-fill" style={{ width: '20px', height: '20px' }} />
          </span>
        </a>
        <a href="https://twitter.com/CluckyChicksNFT">
          <span className="foot-discord">
              <Icon icon="fontisto:discord"  style={{ width: '20px', height: '20px' }} />
          </span>
        </a>
        <a href="mailto:paul@cluckychicks.app">
          <span className="foot-mailbox">
              <Icon icon="fluent:mail-28-filled" style={{ width: '20px', height: '20px' }} />
          </span>
        </a>
      </div>
    </div>
  );
}

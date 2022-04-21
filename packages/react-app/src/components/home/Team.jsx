import React, { useState ,useEffect  } from "react";
export default function Team() {

  return (
    <div className="teamContainer" id = "teamContainer">
      <div className="verse-title">
        <h1 >TEAM</h1>
      </div>
      <div className="team-list">
        
        <div className="verseBox">
          <div className="pixelVerse">
            <img src="./assets/image/founder.jpg" />
            <h2>PAUL B.</h2>
            <div className="team-text">
              <p>
                FOUNDER OF CLUCKY CHICKS
              </p>
            </div>
            <div className="">
              <a href="https://Twitter.com/paulbryantv">
                <span className="team-twitter">
                    <img src='./assets/image/twitter.png'/>
                </span>
              </a>
            </div>
          </div>

          <div className="Verse2D">
            <img src="./assets/image/artist.png" />
              <h2>BANGAGUS</h2>
              <div className="team-text">
                <p>
                  NFT ARTIST
                </p>
              </div>
              <div className="">
                <a href="https://Twitter.com/bangagus_online">
                  <span className="team-twitter">
                      <img src='./assets/image/twitter.png' />
                  </span>
                </a>
              </div>
          </div>

          <div className="Verse3D">
            <img src="./assets/image/dev.jpg" />
            <h2 className="team-text">AKIRA M.</h2>
            <div className="team-text">
              <p>
                FULL STACK DEV
              </p>
            </div>
            <div className="">
              <a href="https://www.linkedin.com/in/akira-mori">
                <span className="team-twitter">
                    <img src='./assets/image/linkedin_1.png' />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

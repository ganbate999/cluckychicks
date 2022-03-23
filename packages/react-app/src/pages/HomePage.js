import React from "react";
import {Header, Mint, Stake, NFTSlider, RoadMap, CluckyVerse, Faq, Footer} from "../components/home";

function HomePage(props) {
    return (
      <div className="Home">
          <Header {...props} />
          <Mint {...props} />
          <Stake {...props} />
          <NFTSlider />
          <RoadMap />
          <CluckyVerse />
          <Faq />
          <Footer />
      </div>
    );
  }
  
  export default HomePage;
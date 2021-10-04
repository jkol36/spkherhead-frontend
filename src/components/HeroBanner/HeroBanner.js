import React from "react";
import './HeroBanner.css';
import spkherhead from '../../spkrheads/speakerhead.jpg'

export const HeroBanner = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="home-text">
          <div className="section-text__title-big">
            Mint your Spkherhead
          </div>
          <div className="section-text__body">
            Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm
            tempor incididunt ulabore et dolore magna aliqua.
          </div>
          <a href="/mint" className="download-btn">
            Mint
          </a>
        </div>

        <div className="section-image">
          <img src={spkherhead} alt="app preview" />
        </div>
      </div>
    </section>
  );
}


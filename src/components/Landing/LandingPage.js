import React from "react";
import Particle from "./Particles";
import "../../css/landingpage.css";

function Landingpage() {
  return (
    <div class="lp">
      <Particle/>
      <div class="container">
        <div class="row">
          <div class="left">
            <div class="landing-page-title">Stay ahead of the game</div>
            <div class="landing-page-title page-title2">Just like institutional investors</div>
            <p class="landing-page-p">On-Chain Data and Intelligence Platform</p>
            <div class="viewcharts-buffer"><button>View Charts</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;

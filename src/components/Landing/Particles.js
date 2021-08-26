import React from "react";
import Particles from 'react-particles-js';

function Particle() {
  return (
    <Particles
      params={{
        "particles": {
            "number": {
                "value": 140
            },
            "size": {
                "value": 2
            },
            "color": {
                "value": "black"
            },
            "move": {
  	            "speed": 0.2
  	        },
            "line_linked": {
                color: "#474343",
                opacity: 0.1
            }
        },
      }}
    />
  );
}

export default Particle;

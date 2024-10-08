    import React from 'react';
    import Particles from "react-tsparticles";

    function ParticlesBackground() {
    const particlesOptions = {
      background: {
        color: {
          value: "#0d47a1", // Background color website
        },
        zIndex: 1, // Set z-index of particles container
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: { min: 1, max: 5 },
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          outModes: {
            default: "bounce",
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          repulse: {
            distance: 100,
          },
          push: {
            quantity: 4,
          },
        },
      },
      detectRetina: true,
    };


      return <Particles id="tsparticles" options={particlesOptions} />;
    }

    export default ParticlesBackground;

import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback, useMemo, useRef } from "react";

const ParticlesConfig = () => {
  const containerRef = useRef(null);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    (container) => {
      containerRef.current = container;

      window.particlesContainer = container;
    },
    [containerRef]
  );

  const options = useMemo(
    () => (
      
      {
      fullScreen: {
        zIndex: -1,
      },
      particles: {
        number: {
          value: 100,
        },
        links: {
          enable: true,
        },
        move: {
          enable: true,
        },
      },
      themes: [
        {
          name: "light",
          default: {
            value: true,
            auto: true,
            mode: "light",
          },
          options: {
            particles: {
              color: {
                value: "#000000",
              },
              links: {
                color: "#000000",
              },
            },
          },
        },
        {
          name: "dark",
          default: {
            value: true,
            auto: true,
            mode: "dark",
          },
          options: {
            background: {
              color: "#89b2e8",
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
              },
            },
          },
        },
        // {
        //   name: "dark", // The name of the theme
        //   default: {
        //     value: true, // Indicates that this is the default theme
        //     auto: true, // Automatically switch to this theme based on the mode
        //     mode: "dark", // The mode for which this theme is intended (e.g., "dark")
        //   },
        //   options: {
        //     background: {
        //       color: "#0000ff", // Background color for the "dark" theme (blue)
        //     },
        //     particles: {
        //       color: {
        //         value: "#ffffff", // Particle color for the "dark" theme (white)
        //       },
        //       links: {
        //         color: "#ffffff", // Link color for the "dark" theme (white)
        //       },
        //     },
        //   }
        // }
        
      ],
    }
    ),
    []
  );

  const lightTheme = useCallback(() => {
    if (!containerRef.current) {
      return;
    }

    console.log(containerRef.current);

    setTimeout(() => {
      containerRef.current.loadTheme("light");
    }, 500);
  }, [containerRef]);

  const darkTheme = useCallback(() => {
    if (!containerRef.current) {
      return;
    }

    console.log(containerRef.current);

    setTimeout(() => {
      containerRef.current.loadTheme("dark");
    }, 500);
  }, [containerRef]);
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </div>
  );
};

export default ParticlesConfig;

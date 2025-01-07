import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import cakeSliceImage from "../../cake.png"; // Path to the cake slice image

const Celebration = ({ onAnimationEnd }) => {
  const candleRef = useRef(null);
  const flameRef = useRef(null);
  const smokeRef = useRef(null);
  const cakeRef = useRef(null);
  const jumpRefs = useRef([]); // Holds refs for all cake slices
  const blowCandleTl = useRef(null); // Initialize the timeline as null
  const jumpTl = useRef(null); // Initialize the timeline as null
  const [cakeSlices, setCakeSlices] = useState([]);
  const [isCandleBlown, setIsCandleBlown] = useState(false); // Tracks if the candle is blown
  const [buttonsDisabled, setButtonsDisabled] = useState(false); // Tracks if buttons are disabled

  // Handle window resize to regenerate cake slices
  const handleResize = () => {
    setCakeSlices(generateCakeSlices());
  };

  // Generate the cake slices dynamically based on screen size
  const generateCakeSlices = () => {
    const imageSize = window.innerWidth < 600 ? 30 : 50; // Smaller slices on smaller screens
    const horizontalCount = Math.floor(window.innerWidth / imageSize);
    const verticalCount = Math.floor(window.innerHeight / imageSize);

    const slices = [];
    jumpRefs.current = []; // Reset refs

    for (let i = 0; i < verticalCount; i++) {
      for (let j = 0; j < horizontalCount; j++) {
        const ref = React.createRef();
        slices.push(
          <img
            key={`${i}-${j}`}
            src={cakeSliceImage}
            alt="Cake Slice"
            ref={ref}
            className="absolute w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 scale-0"
            style={{ left: `${j * imageSize}px`, top: `${i * imageSize}px` }}
          />
        );
        jumpRefs.current.push(ref); // Store ref
      }
    }

    return slices;
  };

  // Blow candle animation setup
  useEffect(() => {
    if (flameRef.current && smokeRef.current) {
      blowCandleTl.current = gsap
        .timeline({ paused: true })
        .to(flameRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power4.out",
        })
        .to(smokeRef.current, {
          opacity: 1,
          y: -50,
          scale: 1.2,
          duration: 1,
          borderRadius: "30% 70% 70% 30%",
          ease: "power2.out",
          onStart: () => (smokeRef.current.style.display = "block"),
        })
        .to(smokeRef.current, {
          opacity: 0.5,
          y: -100,
          scale: 1.8,
          duration: 1.5,
          borderRadius: "50% 50% 50% 50%",
          ease: "power2.inOut",
        })
        .to(smokeRef.current, {
          opacity: 0,
          y: -150,
          scale: 2.5,
          duration: 1,
          borderRadius: "80% 20% 20% 80%",
          ease: "power2.in",
          onComplete: () => (smokeRef.current.style.display = "none"),
        });
    }
  }, []);

  // Setup jump animation for cake slices
  useEffect(() => {
    if (jumpRefs.current.length > 0) {
      const elements = jumpRefs.current
        .map((ref) => ref.current)
        .filter(Boolean);
      if (elements.length > 0) {
        jumpTl.current = gsap
          .timeline({ paused: true })
          .to(elements, {
            duration: 0.8,
            scale: 1,
            y: "-50",
            ease: "bounce.in",
            stagger: { each: 0.05, from: "random" },
          })
          .to(elements, {
            duration: 0.8,
            scale: 0,
            y: "50",
            ease: "elastic.in(1, 0.75)",
            stagger: { each: 0.05, from: "random" },
          });
      }
    }
  }, [cakeSlices]);

  // Trigger blow candle animation
  const handleBlowCandle = () => {
    if (!buttonsDisabled && !isCandleBlown && blowCandleTl.current) {
      blowCandleTl.current.restart();
      setIsCandleBlown(true); // Mark the candle as blown
    }
  };

  // Trigger cake-cutting animation
  // Inside Celebration.jsx

  const handleCakeCut = () => {
    if (!buttonsDisabled) {
      if (!isCandleBlown) {
        console.error("Blow the candle first!");
        return;
      }

      // Disable the button when the animation starts
      setButtonsDisabled(true);

      if (jumpTl.current) {
        jumpTl.current.restart();
      }

      // Cake and candle animation
      gsap.to([candleRef.current, cakeRef.current], {
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      });

      // Timeout for when the animation ends
      setTimeout(() => {
        onAnimationEnd(); // Call the passed-in prop to notify animation end

        // Re-enable the button after a delay (e.g., 5 seconds after animation ends)
        setTimeout(() => {
          setButtonsDisabled(false);
        }, 5000); // Adjust this timeout duration to match your animation
      }, 36000); // Adjust this timeout to match your animation duration
    }
  };

  // Generate slices on mount and resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setCakeSlices(generateCakeSlices());
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative overflow-hidden mb-9 min-h-screen bg-[#1c1f2e]">
      {/* "Happy Birthday" Message */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold z-10">
        <h1>Happy Birthday!</h1>
      </div>

      {/* Buttons Positioned Bottom-Left, Centered in Column */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col space-y-4 z-20">
        <button
          onClick={handleBlowCandle}
          className={`px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition ${
            buttonsDisabled || isCandleBlown
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={buttonsDisabled || isCandleBlown}>
          Blow Candle
        </button>
        <button
          onClick={handleCakeCut}
          className={`px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition ${
            buttonsDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={buttonsDisabled}>
          Cut Cake
        </button>
      </div>

      <div
        className="relative w-full max-w-sm h-[300px] mx-auto mt-44 flex justify-center items-center"
        ref={cakeRef}>
        <img
          src={require("../../cake.gif")}
          alt="Cake"
          className="w-full h-auto sm:w-3/4 md:w-1/2 lg:w-screen object-cover rounded-full"
        />
        <div
          ref={candleRef}
          className="absolute -mt-14 sm:-mt-7 top-1/6 sm:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-12 sm:h-16 bg-white rounded-t-md z-20">
          <div
            ref={flameRef}
            className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 w-2.5 h-5 bg-yellow-400 rounded-full z-30"
          />
          <div
            ref={smokeRef}
            className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gray-400 opacity-0 rounded-full z-25 hidden"
          />
        </div>
      </div>
      {cakeSlices}
    </div>
  );
};

export default Celebration;

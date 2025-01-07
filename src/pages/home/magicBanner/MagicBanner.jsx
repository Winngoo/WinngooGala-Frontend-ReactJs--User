import React, { useEffect, useState } from "react";
import "./banner.css";
import img1 from "./image/img1.png";
import img2 from "./image/img2.png";
import img3 from "./image/img3.png";
import img4 from "./image/img4.png";

const MagicBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNext, setIsNext] = useState(false);
  const [isPrev, setIsPrev] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
    setIsNext(true);
    setIsPrev(false);
    setTimeout(() => {
      setIsNext(false);
    }, 500);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
    setIsPrev(true);
    setIsNext(false);
    setTimeout(() => {
      setIsPrev(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3500);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const slides = [
    {
      img: img1,
      title: "𝒞𝑒𝓁𝑒𝒷𝓇𝒶𝓉𝑒 𝒴𝑜𝓊𝓇",
      highlight: "Birthday in Style",
      description:
        "Make your birthday unforgettable with our customized party themes, entertainment, and decor, ensuring an amazing celebration for you and your guests.",
    },
    {
      img: img2,
      title: "𝒮𝒶𝓎 '𝐼 𝒟𝑜' 𝒶𝓉 𝒴𝑜𝓊𝓇",
      highlight: "Dream Wedding",
      description:
        "From the ceremony to the reception, we provide tailored wedding planning services that bring your love story to life with elegance and perfection.",
    },
    {
      img: img3,
      title: "𝑀𝒶𝓀𝑒 𝒴𝑜𝓊𝓇",
      highlight: "Occasions Special",
      description:
        "Whether it's an anniversary, family reunion, or any personal milestone, we create intimate events that reflect your personality and vision.",
    },
    {
      img: img4,
      title: "𝐵𝑜𝑜𝓈𝓉 𝒴𝑜𝓊𝓇",
      highlight: "Business Events",
      description:
        "From corporate conferences to product launches, we offer professional event management solutions designed to impress and inspire your clients and partners.",
    },
  ];

  return (
    <div className="mt-12 lg:mt-12">
      <div
        className={`carousel ${isNext ? "next" : ""} ${isPrev ? "prev" : ""}`}>
        <div className="list">
          {slides.map((slide, index) => (
            <div
              className="item"
              key={index}
              style={{ display: currentSlide === index ? "block" : "none" }}>
              <img
                className="brightness-[0.60]"
                src={slide.img}
                alt={`Slide ${index + 1}`}
              />
              <div className="content mt-32 ml-5 lg:mt-20">
                <div>
                  <p className="text-sm ml-1 font-semibold tracking-wider text-slate-300 md:text-xl">
                    •------» 𝓦𝓲𝓷𝓷𝓰𝓸𝓸 𝓖𝓪𝓵𝓪 «------•
                  </p>
                  <div className="my-10">
                    <h1 className="text-3xl lg:text-6xl font-bold text-slate-200">
                      {slide.title}
                    </h1>
                  </div>
                  <div className="my-5">
                    <h1 className="drop-shadow-2xl text-lime-500 text-5xl lg:text-7xl font-bold">
                      {slide.highlight}
                    </h1>
                  </div>
                  <div className="w-2/3 hidden lg:flex ">
                    <p className="text-slate-200">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corrected Arrows */}
        <div className="arrows">
          <button className="arrow prev" onClick={prevSlide}>
            {"<"}
          </button>
          <button className="arrow next" onClick={nextSlide}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MagicBanner;

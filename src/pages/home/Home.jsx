import React from "react";
import MagicBanner from "./magicBanner/MagicBanner";
import AllServices from "../bookings/allServices/AllServices";

const Home = () => {
  return (
    <div>
      <MagicBanner />
      <AllServices />
    </div>
  );
};

export default Home;

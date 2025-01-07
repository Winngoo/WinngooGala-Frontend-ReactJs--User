import React from "react";

const Container = ({ children }) => {
  return (
    <div className="pb-20 mx-auto px-4 md:px-8 lg:px-12 bg-gradient-to-b from-[#1E3E62] via-[#184E4E] to-black">
      {children}
    </div>
  );
};

export default Container;

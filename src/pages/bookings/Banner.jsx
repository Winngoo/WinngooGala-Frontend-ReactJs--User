import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import organizer from "../../assets/Organizer/organizer.jpg";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Set to false to trigger animations again when scrolled back
    });
  }, []);

  return (
    <section
      className="bg-cover bg-center bg-no-repeat bg-fixed h-[100vh]"
      style={{ backgroundImage: `url('${organizer}')` }}>
      <div className="bg-black bg-opacity-25 h-[100vh] flex items-center justify-center">
        <div data-aos="fade-up">
          {" "}
          {/* AOS effect applied here */}
          <h2 className="text-3xl md:text-6xl text-center max-w-4xl mx-auto font-bold text-white">
            𝙒𝙞𝙣𝙣𝙜𝙤𝙤 𝙂𝙖𝙡𝙖 - 𝙊𝙪𝙧 𝙎𝙚𝙖𝙢𝙡𝙚𝙨𝙨 𝙀𝙫𝙚𝙣𝙩 𝙋𝙡𝙖𝙣𝙣𝙞𝙣𝙜 𝙋𝙧𝙤𝙘𝙚𝙨𝙨
          </h2>
          <p className="text-2xl text-center text-white font-medium mt-5">
            𝐖𝐞 𝐭𝐚𝐤𝐞 𝐜𝐚𝐫𝐞 𝐨𝐟 𝐞𝐯𝐞𝐫𝐲 𝐝𝐞𝐭𝐚𝐢𝐥, 𝐟𝐫𝐨𝐦{" "}
            <span
              className="bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br p-1 px-2 rounded-full font-bold"
              data-aos="fade-down">
              𝘊𝘰𝘯𝘤𝘦𝘱𝘵 𝘵𝘰 𝘌x𝘦𝘤𝘶𝘵𝘪𝘰𝘯
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;

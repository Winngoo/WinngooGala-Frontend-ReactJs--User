import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Homepage.css";
import Navbar from "../../components/shared/navbar/Navbar";
import { useCookies } from "react-cookie";
import { gsap } from "gsap";
import axios from "axios";
import { useGetUserToken } from "../../components/customHook/customHook";
import Swal from "sweetalert2";

const Homepage = () => {
  const [cookies, setCookie] = useCookies(["access_token"]);
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const roomIdContainerRef = useRef(null);
  const buttonRefs = useRef([]);

  const [price, setprice] = useState("");

  const { id } = useParams();

  const token = useGetUserToken();

  const getPrice = async () => {
    try {
      const res = await axios.get(
        "https://winngoogala.winngooconsultancy.in/api/prices/" + id,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setprice(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPrice();
  }, []);

  useEffect(() => {
    // GSAP animations on load
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.5, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      roomIdContainerRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, delay: 1, duration: 0.8, ease: "power3.out" }
    );
    buttonRefs.current.forEach((button, index) => {
      gsap.fromTo(
        button,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          delay: 1.2 + index * 0.2,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    });
  }, []);

  useEffect(() => {
    // Clear the room ID if the user is not logged in
    if (!cookies.access_token) {
      setRoomId("");
    }
  }, [cookies.access_token]);

  const handleRoomIdGenerate = () => {
    const randomId1 = Math.random().toString(30).substring(2, 5);
    const randomId2 = Math.random().toString(30).substring(2, 5);
    const randomId3 = Math.random().toString(30).substring(2, 5);
    const generatedRoomId = `${randomId1}-${randomId2}-${randomId3}`;
    if (cookies.access_token) {
      setRoomId(generatedRoomId);
      // Room ID animation when generated
      gsap.fromTo(
        roomIdContainerRef.current,
        { scale: 1.1 },
        { scale: 1, duration: 0.3, ease: "bounce.out" }
      );
    } else {
      navigate("/sign-in");
    }
  };

  const handleOneAndOneCall = () => {
    if (!roomId) {
      Swal.fire({
        title: "Room ID Required",
        text: "Please generate a room ID first",
        icon: "warning",
        confirmButtonColor: "#3085d6",
      });
      return;
    }
    navigate(`room/${roomId}?type=one-on-one`);
  };

  const handleGroupCall = (size) => {
    if (!roomId) {
      Swal.fire({
        title: "Room ID Required",
        text: "Please generate a room ID first",
        icon: "warning",
        confirmButtonColor: "#3085d6",
      });
      return;
    }
    navigate(`room/${roomId}?type=group-call&size=${size}`);
  };

  // console.log(buttonRefs)

  return (
    <>
      <Navbar />
      <div className="homepage-container">
        <div className="homepage-content">
          <h1 className="homepage-title" ref={titleRef}>
            Welcome to
            <br />
            Winngoo Gala Celebration
          </h1>
          <p className="homepage-subtitle" ref={subtitleRef}>
            Start a Winngoo Gala Celebration with a randomly generated Room ID
          </p>
          <div className="room-id-container" ref={roomIdContainerRef}>
            <input
              type="text"
              className="room-id-input"
              placeholder="Generated Room ID"
              value={roomId}
              readOnly
            />
            <button className="generate-button" onClick={handleRoomIdGenerate}>
              Generate
            </button>
          </div>

          <div className="flex justify-center">
            {/* <button
              className="call-button"
              onClick={handleOneAndOneCall}
              disabled={""}
              ref={(el) => (buttonRefs.current[0] = el)}
            >
              One-on-One Call
            </button> */}
            {price.max_quantity == 10 ? (
              <button
                className="call-button"
                onClick={() => handleGroupCall("small")}
                disabled={""}
                ref={(el) => (buttonRefs.current[1] = el)}>
                Group Call (1-10)
              </button>
            ) : (
              ""
            )}
            {price.max_quantity == 20 ? (
              <button
                className="call-button"
                onClick={() => handleGroupCall("large")}
                disabled={""}
                ref={(el) => (buttonRefs.current[2] = el)}>
                Group Call (1-20)
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;

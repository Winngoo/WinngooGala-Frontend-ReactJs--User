import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { APP_ID, APP_SECRET } from "../../Config";
import "./Room.css";
import Swal from "sweetalert2";

import logo from "../../assets/logo/gala.png";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Celebration from "./Celebration";

// //CONSTANTS
// const MAX_USERNAME_LENGTH = 15;

// // Function to validate username
// isValidUsername = (username) => {
//   return /^[a-zA-Z]+$/.test(username) && username.length <= MAX_USERNAME_LENGTH;
// };

const Room = () => {
  const { roomId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const zpRef = useRef(null);
  const [joined, setJoined] = useState(false);
  const [callType, setCallType] = useState({});
  const [invitationListConfig, setInvitationListConfig] = useState({
    waitingSelectUsers: [],
    defaultChecked: true,
  });
  const [pendingApproval, setPendingApproval] = useState(false);
  const [approvalMessage, setApprovalMessage] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [celebrationVisible, setCelebrationVisible] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoContainerRef = useRef(null);
  const myUserId = "YourUserId";
  const myUserName = "YourUserName";

  const myMeeting = ({ type, size }) => {
    if (!roomId) {
      Swal.fire({
        title: "Error!",
        text: "Room ID is required to join a meeting",
        icon: "error",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/");
      });
      return;
    }
    const appID = APP_ID;
    const serverSecret = APP_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      myUserName
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zpRef.current = zp;

    const maxUsers = type === "one-on-one" ? 2 : size === "small" ? 10 : 20;

    const generatedLink = `${window.location.protocol}//${
      window.location.host
    }${window.location.pathname}?type=${encodeURIComponent(
      type
    )}&size=${encodeURIComponent(size)}`;
    setMeetingLink(generatedLink);

    zp.joinRoom({
      container: videoContainerRef.current,
      sharedLinks: [
        {
          name: "Celebration link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            `?type=${encodeURIComponent(type)}&size=${encodeURIComponent(
              size
            )}`,
        },
      ],
      scenario: {
        mode:
          type === "one-on-one"
            ? ZegoUIKitPrebuilt.OneONoneCall
            : ZegoUIKitPrebuilt.GroupCall,
      },
      layout: "Grid",
      showUserList: true,
      showRemoveUserButton: true,
      lowerLeftNotification: {
        showUserJoinAndLeave: true,
        showTextChat: true,
      },
      branding: {
        logoURL: logo,
      },
      maxUsers: maxUsers,
      callingInvitationListConfig: {
        waitingSelectUsers: invitationListConfig.waitingSelectUsers,
        defaultChecked: invitationListConfig.defaultChecked,
      },
      showInviteToCohostButton: true,
      showRemoveCohostButton: true,
      showRequestToCohostButton: true,
      onJoinRoom: () => {
        setJoined(true);
        console.log("Joined the room");
        Swal.fire({
          title: "Welcome!",
          text: "You have successfully joined the room",
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
        });
      },
      onLeaveRoom: () => {
        navigate("/");
        console.log("Left the room");
        Swal.fire({
          title: "Goodbye!",
          text: "You have left the room",
          icon: "info",
          timer: 2000,
          showConfirmButton: false,
        });
      },
      onUserJoin: (users) => {
        console.log("Users joined: ", users);
        if (!joined) {
          requestJoinPermission(); // Request permission to join
        }
      },
      onUserLeave: (users) => {
        console.log("Users left: ", users);
      },
      onInRoomCustomCommandReceived: (command) => {
        const data = JSON.parse(command);
        if (data.type === "permission-response") {
          if (data.approved) {
            Swal.fire({
              title: "Approved!",
              text: "Your request has been approved. You can now join the call.",
              icon: "success",
            });
            setApprovalMessage(
              "Your request has been approved. You can now join the call."
            );
            setJoined(true);
          } else {
            Swal.fire({
              title: "Denied",
              text: "Your request to join the call has been denied.",
              icon: "error",
            });
            setApprovalMessage(
              "Your request to join the call has been denied."
            );
          }
          setPendingApproval(false);
        }
      },
    });
  };

  const requestJoinPermission = () => {
    const command = {
      type: "join-request",
      userId: myUserId,
      userName: myUserName,
    };

    // Send the join request to the host
    // if (zpRef.current) {
    //   zpRef.current.sendCustomCommand("host-user-id", JSON.stringify(command)); // Replace 'host-user-id' with actual host ID
    // }

    setPendingApproval(true);
    setApprovalMessage("Your request to join the call is pending approval.");
  };

  const handleExit = () => {
    if (zpRef.current) {
      zpRef.current.destroy();
    }
    navigate("/");
  };

  const handleAnimationComplete = () => {
    console.log("Animation Complete");
    setCelebrationVisible(false);
    setIsFullScreen(true);
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const type = query.get("type");
    const size = query.get("size");
    setCallType({ type, size });

    if (type === "group" && size === "small") {
      setInvitationListConfig({
        waitingSelectUsers: [{ userId: "user1", userName: "User One" }],
        defaultChecked: true,
      });
    }
  }, [location.search]);

  useEffect(() => {
    if (callType.type) {
      myMeeting(callType);
    }

    return () => {
      if (zpRef.current) {
        zpRef.current.destroy();
      }
    };
  }, [callType, roomId, navigate]);

  useLayoutEffect(() => {
    // Ensure the video container is available and still in the DOM before appending
    if (joined && videoContainerRef.current) {
      // Render the Celebration component conditionally (no direct DOM manipulation needed)
      videoContainerRef.current.appendChild(document.createElement("div"));
    }
  }, [joined]);

  const handleWhatsAppSent = () => {
    const activeMeetingLink = meetingLink.startsWith("http")
      ? meetingLink
      : `https://${meetingLink}`;
    const message = `Hey, join this meeting: ${activeMeetingLink}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailSent = () => {
    const activeMeetingLink = meetingLink.startsWith("http")
      ? meetingLink
      : `https://${meetingLink}`;
    const subject = "Join this Meeting";
    const body = `Hey, join this meeting: ${activeMeetingLink}`;

    // Navigate to Gmail with a pre-filled draft
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the Gmail compose window
    window.open(gmailUrl, "_blank");

    Swal.fire({
      title: "Gmail Draft Opened",
      text: "A Gmail draft has been opened in your browser.",
      icon: "success",
      confirmButtonColor: "#3085d6",
    });
  };

  return (
    <div
      className="room-container"
      style={{ height: isFullScreen ? "100vh" : "auto" }}>
      {!joined && (
        <>
          <header className="flex justify-between items-center min-w-full bg-[#1c1f2e] p-4 text-lg font-semibold text-gray-200 font-['Inter']">
            <span>
              {callType.type === "one-on-one"
                ? "One-on-One Video Call"
                : "Celebration Video Call"}
            </span>

            {/* Exit Button */}
            {!pendingApproval && (
              <button
                className="bg-red-600 text-white py-2 sm:py-2  px-6 rounded-md shadow-md hover:bg-red-700 transition mt-0.5 md:mt-0"
                onClick={handleExit}>
                Exit
              </button>
            )}
          </header>

          {/* Conditional Approval Message */}
          {pendingApproval && (
            <p className="approval-message text-center text-yellow-400 my-2 md:text-lg">
              {approvalMessage}
            </p>
          )}
        </>
      )}
      <div className="room-container">
        <div ref={videoContainerRef} className="video-container">
          {joined && celebrationVisible && (
            <Celebration onAnimationEnd={handleAnimationComplete} />
          )}
        </div>
        <div className="flex justify-center gap-3 bg-[#1c1f2e] p-2">
          <div className="flex flex-row items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-200 font-['Inter']">
              Invite Friends via :
            </h3>
            <div className="flex gap-4">
              <div className="invite-icon-wrapper">
                <FaWhatsapp
                  onClick={handleWhatsAppSent}
                  className="invite-icon whatsapp-icon"
                />
              </div>
              <div className="invite-icon-wrapper">
                <SiGmail
                  onClick={handleEmailSent}
                  className="invite-icon gmail-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;

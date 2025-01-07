import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const SecretPage = ({ children }) => {
  const [cookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.access_token) {
      navigate("/"); // Redirect if the user is already logged in
    } 
  }, [cookies, navigate]);

  // Render the child element passed in the route (Login or Register)
  return <>{children}</>;
};

export default SecretPage;

// else if (!cookies.access_token) {
//   navigate("/login");
// }

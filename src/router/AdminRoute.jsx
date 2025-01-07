import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const AdminRouter = ({ children1 }) => {
  const [cookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.access_token) {
      navigate("/login"); // Redirect if the user is already logged in
    }
  }, [cookies, navigate]);

  // Render the child element passed in the route (Login or Register)
  return <>{children1}</>;
};

export default AdminRouter;

// import { Navigate } from "react-router-dom";
// import Loading from "../components/loading/Loading";
// import useAdmin from "../hooks/useAdmin";
// import useAuth from "../hooks/useAuth";

// const AdminRouter = ({ children }) => {
//     const { user, loading } = useAuth();
//     const [admin, isAdminPending] = useAdmin();

//     if (loading || isAdminPending) {
//         return <Loading />;
//     }
//     if (user && admin) {
//         return children;
//     }
//     return <Navigate to="/login" replace/>;
// };

// export default AdminRouter;

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";

const AdminRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isLoading] = useAdmin();
  const location = useLocation();

  if (loading || isLoading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 text-center"></div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;

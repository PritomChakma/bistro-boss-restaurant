import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, replace, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location = useLocation()

if(loading){
    return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 text-center"></div>
}

    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location} } replace></Navigate>
};

export default PrivateRoutes;   
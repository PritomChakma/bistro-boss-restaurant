import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin = false, isLoading, isError } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !!user?.email && !authLoading, // Prevent query until user data is loaded
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data?.admin;
    },
    staleTime: 5 * 60 * 1000, // Cache admin status for 5 minutes
  });

  return [isAdmin, isLoading, isError];
};

export default useAdmin;

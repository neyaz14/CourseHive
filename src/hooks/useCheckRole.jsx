import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';
import { useQuery } from "@tanstack/react-query";

const useCheckRole = () => {
    const axiosPublic = useAxiosPublic();
    const {user , loading } = useAuth();
    const {data: role, isloading} = useQuery(
        {
            queryKey:['role', user?.email],
            queryFn: async()=>{
                {
                    const {data} = await axiosPublic(`/user/role/${user?.email}`)
                    return data?.role;
                }
            }
        }
    )
    return [role, isloading]
};

export default useCheckRole;
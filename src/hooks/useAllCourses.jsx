import React from 'react';
// import useaxiosPublic from "./useaxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useAllCourses = () => {
    const axiosPublic = useAxiosPublic();
    // const 

    const { data: courses = [], refetch , isLoading} = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await axiosPublic.get('/courses');
            return res.data;
        }
    });
    return [courses, refetch, isLoading];
};

export default useAllCourses;
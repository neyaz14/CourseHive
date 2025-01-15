import React from 'react';
// import useaxiosPublic from "./useaxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useAllCourses = () => {
    const axiosPublic = useAxiosPublic();
    // const 

    const { data: courses = [], refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await axiosPublic.get('/courses');
            return res.data;
        }
    });
    return [courses, refetch];
};

export default useAllCourses;
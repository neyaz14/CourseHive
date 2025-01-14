import React from 'react';
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAllCourses = () => {
    const axiosSecure = useAxiosSecure();

    const { data: courses = [], refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await axiosSecure.get('/courses');
            return res.data;
        }
    });
    return [courses, refetch];
};

export default useAllCourses;
import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllFeedback = () => {
    const axiosPublic = useAxiosPublic();


    const { data: feedback = [], refetch,isLoading } = useQuery({
        queryKey: ['feedback'],
        queryFn: async () => {
            const res = await axiosPublic.get('/feedback');
            return res.data;
        }
    });
    
    return [feedback, refetch, isLoading];
};

export default useAllFeedback;
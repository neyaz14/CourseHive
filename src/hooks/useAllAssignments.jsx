
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAllAssignments = () => {
    const axiosSecure = useAxiosSecure();


    const { data: assignments = [], refetch,isLoading } = useQuery({
        queryKey: ['assignments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/assignments');
            return res.data;
        }
    });
    
    return [assignments, refetch, isLoading];
};

export default useAllAssignments;
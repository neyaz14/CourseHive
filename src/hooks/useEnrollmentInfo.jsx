import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';
import useAuth from "./useAuth";
const useEnrollmentInfo = () => {
    const axiosPublic = useAxiosPublic();
    const {user  } = useAuth();
    const { data: enrolleCourse = [], refetch,isLoading } = useQuery({
        queryKey: ['enrolleCourse', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/enrolledCourse/${user?.email}`);
            return res.data;
        }
    });
    
    return [enrolleCourse, refetch, isLoading];
};

export default useEnrollmentInfo;
import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import CheckOutForm from '../components/Form/CheckOutForm';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";




const stripePromise = loadStripe(import.meta.env.VITE_PKEY);
const Payment = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();

     const { data: course = {}, refetch, isLoading } = useQuery({
            queryKey: ['course', id],
            queryFn: async () => {
                const res = await axiosPublic.get(`/courses/${id}`);
                return res.data;
            }
        });
        if (isLoading) return <LoadingSpinner></LoadingSpinner>
        const { _id, price } = course;









    return (
        <div>
            <div className='flex justify-center'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm id={id} price={price}></CheckOutForm>
                </Elements>
            </div>



        </div>
    );
};

export default Payment;
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import Container from '../../Shared/Container';
import useAllFeedback from '../../../hooks/useAllFeedback';
import LoadingSpinner from '../../Shared/LoadingSpinner';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';



const Feedback = () => {
    const [feedback, refetch, isLoading] = useAllFeedback();
    if(isLoading) return <LoadingSpinner></LoadingSpinner>;
    refetch();
    return (
        <Container>
            <section className="bg-[#fee68e] rounded-lg p-10">
                <motion.h2
                    className="text-4xl text-[#2c2e2d] font-bold mb-4 text-center "
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    Our Students Feedback
                </motion.h2>
                <p className="text-center  mb-8 text-[#2c2e2d]">Our Students tell stories and are impressed about our services.</p>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    breakpoints={{
                        425: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                      }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    className='flex lg:flex-col flex-row '
                >
                    {feedback.map((fdb, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="bg-white p-6 rounded-lg max-h-fixed  shadow-lg "
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5 }}
                            >
                                <h3 className="text-xl text-gray-950 font-semibold mb-2">{fdb.name}</h3>
                                <p className="text-gray-600 mb-4">{fdb.feedback}</p>
                                <div className="flex items-center">
                                    <img src={fdb.image} alt={fdb.name} className="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <p className="font-bold text-gray-800">{fdb.studentEmail}</p>
                                        <p className="text-sm text-gray-800">Student</p>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-between mt-4">
                    <p className='text-black opacity-40'>Slide to see more...</p>
                </div>
            </section>
        </Container>
    );
};

export default Feedback;


// export default Feedback;
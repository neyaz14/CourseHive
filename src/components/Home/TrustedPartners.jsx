import React from 'react';
import { FaApple, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import Container from '../Shared/Container';

const TrustedPartners = () => {
    return (
        <Container>
            <div className="bg-blue-100 rounded-lg my-4 py-12">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">25m+ Trusted Partners</h2>
                    <p className="text-gray-600">Education is the foundation of personal societal growth, empowering individuals with knowledge, skills, and critical thinking.</p>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-8">
                    <div className="flex justify-center items-center w-1/4">
                        <FaApple size={80} className="text-gray-700" />
                    </div>
                    <div className="flex justify-center items-center w-1/4">
                        <FaGoogle size={80} className="text-gray-700" />
                    </div>
                    <div className="flex justify-center items-center w-1/4">
                        <FaMicrosoft size={80} className="text-gray-700" />
                    </div>
                   
                </div>
            </div>
        </Container>
    );
};

export default TrustedPartners;

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import Banner from '../../assets/images/Banner.png'
import Container from '../Shared/Container';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    Swal.fire({
      title: 'Thank you!',
      text: 'We will be connected with you.',
      icon: 'success',
      confirmButtonText: 'Close',
    });
    setEmail('');
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <Container>
      <div className="bg-blue-500 text-white p-8 rounded-lg my-4 mx-auto flex flex-col md:flex-row items-center gap-6 justify-between">
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            className="text-4xl font-semibold mb-2"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.6 }}
          >
            Subscribe our <span className="italic">Newsletter</span>
          </motion.h2>

          <motion.p
            className="text-lg"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore a diverse selection of courses all in one platform, designed to cater to various learning.
          </motion.p>

          <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
            <motion.input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 rounded-full text-white w-full md:w-72"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.button
              onClick={handleSubscribe}
              className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full font-medium"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Subscribe
            </motion.button>
          </div>
        </div>


        
      </div>
    </Container>
  );
};

export default NewsletterSubscription;

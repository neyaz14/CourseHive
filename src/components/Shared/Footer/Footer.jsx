import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {  // Done Recheck the name 
  return (
    <footer className="bg-black text-white p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h4 className="font-bold text-lg">CourseHive</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg">About</h4>
          <ul>
            <li>Categories</li>
            <li>Features</li>
            <li>Browse courses</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg">Company</h4>
          <ul>
            <li>Hire IO</li>
            <li>Stories</li>
            <li>Testimonials</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg">Any Questions?</h4>
          <p><FaEnvelope className="inline mr-2" /> hello@coursehive.com</p>
          <p>Feel free! Ask us anything related to our service.</p>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-4 text-center">
        <p>© 2023 CourseHive. All Rights Reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <FaFacebookF className="hover:text-blue-500 transition-colors duration-300" />
          <FaTwitter className="hover:text-blue-400 transition-colors duration-300" />
          <FaLinkedinIn className="hover:text-blue-600 transition-colors duration-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

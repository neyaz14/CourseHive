import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const {_id, image, title, description, price, TeacherName, TeacherEmail, TeacherPhotoURL, timestamp } = course ;
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base h-12 overflow-hidden">{description}</p>
            </div>
            <div className='flex justify-start items-center gap-5 px-6'>
                <img src={TeacherPhotoURL} alt="" className='w-10 rounded-full' />
                <p>{TeacherName}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                    ${price}
                </span>
                <Link to={`/courses/${_id}`}>
                    <button className="btn text-white font-bold py-2 px-4 rounded">
                        Explore Course
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;
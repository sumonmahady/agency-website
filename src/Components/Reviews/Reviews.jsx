import React from 'react';
import ReviewsCard from './ReviewsCard';
import Heading from '../../assets/Layout/Heading';
import img1 from '../../assets/author1.jpg'
import img2 from '../../assets/author2.jpg'
import img3 from '../../assets/author3.png'

const Reviews = () => {
    return (
        <div className='min-h[80vh] flex flex-col items-center justify-center md:px32 px-5'>
            <Heading title='Clint' title2='Reviws' ></Heading>

            <div className='flex flex-col  md:flex-row gap-5 mt-10'>
                <ReviewsCard img={img1} ></ReviewsCard>
                <ReviewsCard img={img2} ></ReviewsCard>
                <ReviewsCard img={img3}></ReviewsCard>
            </div>
        </div>
    );
};

export default Reviews;
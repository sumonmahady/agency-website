import React from 'react';

const ReviewsCard = (props) => {
    return (
        <div className='w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg hover:bg-red-200 transition-all duration-300'>
           <div>
           <p className='font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae distinctio a quidem quae numquam,
               ullam voluptatum. Culpa eius quisquam officiis.</p>
           </div>

           <div className='flex flex-row justify-center'>
            <img className='rounded-full w-1/4 mt-10' src={props.img} alt="" />
           </div>
        </div>
    );
};

export default ReviewsCard;
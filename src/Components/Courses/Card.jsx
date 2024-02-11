import React from 'react';

const Card = (props) => {
    return (
        <div className='flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg
        hover:bg-red-200 duration-300 transition-all'>
            
            <div className='w-3/5'>
                <img src={props.img} alt="img" />
            </div>
            <div>
                <h3 className='font-semibold text-2xl text-center my-5'> {props.title} </h3>
                <p className='text-lightText text-center md:text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, harum!</p>
            </div>
        </div>
    );
};

export default Card;
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/boy.jpg'
import Layout from '../../assets/Layout/Layout';

const Homes = () => {
    return (
        <div className=' min-h[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-10 mt-20'>
            <div className='md:w-2/4 text-center'>
            <h2 className='text-5xl font-extrabold mb-4 '>Knowledge with</h2>
            <span className='text-3xl font-semibold text-brandPrimary'>Digital Agency</span>
            <p className=' font-medium mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste dolor omnis
             repudiandae architecto iure quidem reprehenderit voluptatum praesentium optio atque!</p>

             <Link to="contact" spy={true} smooth={true} duration={500}>
               <Layout 
                title="Contact us"></Layout>
             </Link>
            </div>
            <div className='md:mt-4 mt-10'>
                <img src={img} alt="" />
            </div>

        </div>
    );
};

export default Homes;
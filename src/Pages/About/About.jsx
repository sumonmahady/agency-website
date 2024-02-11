import React from 'react';
import img from '../../assets/img.jpg'
import Layout from '../../assets/Layout/Layout';
import Heading from '../../assets/Layout/Heading';
const About = () => {
    return (
        <div className='md:min-h-screen md:mx-32 mx-5'>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="w-72 rounded-lg md:w-2/4 " />
                    <div> 
                        <Heading title='About' title2='Us?' ></Heading>
                        <p className="py-6 font-medium w-full md:w-2/4 space-y-2 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda 
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, soluta!</p>
                        <Layout title='Contact us'></Layout>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import Heading from '../../assets/Layout/Heading';
import Layout from '../../assets/Layout/Layout';
import photo from '../../assets/photo.jpg'

const Contact = () => {
    return (
        <div className='flex flex-col min-h-screen items-center justify-center md:mx-32  mx-5 mt-10'>
            <Heading title='Contact' title2='Us' ></Heading>

            <div className='flex flex-col md:flex-row justify-between w-full'>
                <form className='w-full md:w-2/5 space-y-5 pt-20 font-medium'>
                    <div className='flex flex-col'>
                        <label htmlFor="userName">Your Name</label>
                        <input className='py-3 px-4 rounded-lg hover:bg-red-300'
                        type="text"
                         name='userName' 
                         id='userName' 
                        placeholder='Enter Your Name' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="userEmail">Your Email</label>
                        <input className='py-3 px-4 rounded-lg hover:bg-red-300'
                        type="Email"
                         name='userEmail' 
                         id='userEmail' 
                        placeholder='Enter Your Email' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="userNumber">Your Number</label>
                        <input className='py-3 px-4 rounded-lg hover:bg-red-300'
                        type="text"
                         name='userNumber' 
                         id='userNumber' 
                        placeholder='Enter Your Number' />
                    </div>
                    <div className='flex flex-row justify-center'>
                        <Layout title="Send Message" ></Layout>
                    </div>

                   
                </form>

                <div className=' w-full md:w-2/4 mt-6'>
                        <img src={photo} alt="img" />
                    </div>
            </div>
        </div>
    );
};

export default Contact;
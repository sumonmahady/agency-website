import React from 'react';
import Heading from '../../assets/Layout/Heading';
import img1 from '../../assets/pic.jpg'
import img2 from '../../assets/pic2.jpg'
import img3 from '../../assets/pic4.jpg'
import img4 from '../../assets/picD.jpg'
import Card from './Card';

const Courses = () => {
    return (
        <div className='min-h-screen flex flex-col items-center md:px-32 px-5 my-10'>
          <Heading title='Our' title2='Courses' ></Heading>

          <div className='flex flex-wrap justify-center gap-6  mt-5'>
            <Card img={img1} title='Web Development' ></Card>
            <Card img={img2} title='App Development' ></Card>
            <Card img={img3} title='Graphic Designer' ></Card>
            <Card img={img4} title='Digital Marketing' ></Card>
          </div>
        </div>
     
    );
};

export default Courses;
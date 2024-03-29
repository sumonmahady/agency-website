import React from 'react';
import logo from '../../../assets/photos/cover.png'
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';


const Nav = () => {
    const [menu,setMenu] = useState(false)
    const handleMenu = ()=>{
        setMenu(!menu)
    }
    return (
        <div className='flex items-center justify-center space-x-7 bg-slate-100'>
            <div className='flex items-center cursor-pointer'>
                <img className='w-52  items-center' src={logo} alt="" />
            </div>

            <nav className='hidden md:flex gap-8 text-lg font-medium p-2 cursor-pointer'>
                <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-brandPrimary transition-all cursor-pointer' >Home</Link>
                <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-brandPrimary transition-all cursor-pointer' >About</Link>
                <Link to="courses" spy={true} smooth={true} duration={500} className='hover:text-brandPrimary transition-all cursor-pointer' >Courses</Link>
                <Link to="reviews" spy={true} smooth={true} duration={500} className='hover:text-brandPrimary transition-all cursor-pointer' >Reviews</Link>
                <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-brandPrimary transition-all cursor-pointer' >Contact</Link>
            </nav>
            <div className='flex md:hidden ' onClick={handleMenu}>
                <div className='p-3 ml-10'>
                <IoMdMenu size={22} />
                </div>
            </div>

            <div className={`${
                menu ? "translate-x-0" : "-translate-x-full"
            } md:hidden flex flex-col bg-white absolute left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}>
            <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-brandPrimary transition-all cursor-pointer' >Home</Link>
                <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-brandPrimary transition-all cursor-pointer' >About</Link>
                <Link to="courses" spy={true} smooth={true} duration={500} className='hover:text-brandPrimary transition-all cursor-pointer' >Courses</Link>
                <Link to="reviews" spy={true} smooth={true} duration={500} className='hover:text-brandPrimary transition-all cursor-pointer' >Reviews</Link>
                <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-brandPrimary transition-all cursor-pointer' >Contact</Link>
            </div>
        </div>
    );
};

export default Nav;
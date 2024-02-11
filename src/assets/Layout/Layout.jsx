import React from 'react';

const Layout = (props) => {
    return (
        <div>
            <button className='bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow hover:bg-brandPrimary hover:text-white transition-all'>
                    {props.title}
            </button>
        </div>
    );
};

export default Layout;
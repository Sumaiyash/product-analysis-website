import React from 'react';
import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav className='nav-bar flex justify-center'>
                <div className='text-3xl uppercase p-4 flex'>
                    <CustomLink to="/home">Home</CustomLink>
                    <CustomLink to="/reviews">Reviews</CustomLink>
                    <CustomLink to="/dashboard">Dashboard</CustomLink>
                    <CustomLink to="/blogs">Blogs</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;
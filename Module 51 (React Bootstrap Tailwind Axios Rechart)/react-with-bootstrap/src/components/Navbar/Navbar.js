import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-purple-300'>
           <ul className='md:flex p-4 justify-center items-center'>
               <li><a href="./Home">Home</a></li>
               <li><a href="./Products">Products</a></li>
               <li><a href="./Contact">Contact</a></li>
               <li><a href="./About">About</a></li>
               <li><a href="./Account">Account</a></li>
           </ul> 
        </nav>
    );
};

export default Navbar;
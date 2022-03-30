import React from 'react';
// import {Link} from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header=() => {
    return (
        <div>
            <nav>
                <ul>
                    <CustomLink to="/"><li>Home</li></CustomLink>
                    <CustomLink to="products"><li>Products</li></CustomLink>
                    <CustomLink to="about"><li>About</li></CustomLink>
                    <CustomLink to="post"><li>Post</li></CustomLink>


                </ul>
            </nav>
        </div>
    );
};

export default Header;
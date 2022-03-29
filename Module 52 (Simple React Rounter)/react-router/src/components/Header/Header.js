import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="products"><li>Products</li></Link>
                    <Link to="about"><li>About</li></Link>
                    
                    
                </ul>
            </nav>
        </div>
    );
};

export default Header;
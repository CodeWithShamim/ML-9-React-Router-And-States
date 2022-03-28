import React, {useState} from 'react';
import Link from '../Link/Link';
import './Navbar.css'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const linkItem = [
        {id:1, name: "Home", link:'./home'},
        {id:2, name: "Products", link:'./products'},
        {id:3, name: "Contact", link:'./contact'},
        {id:4, name: "About", link:'./about'},
        {id:5, name: "Account", link:'./account'}
    ]
    return (
        <nav className='bg-purple-600'>
            <div onClick={()=>setOpen(!open)}  className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
           <ul className={`md:flex justify-center bg-purple-600 w-full items-center md:top-0 p-8 absolute duration-500 ease-in ${open ? 'top-6' : 'top-[-210px] md:top-0'}`}>
               {linkItem.map(item=><Link key={item.id} item={item}></Link>)}
           </ul> 
        </nav>
    );
};

export default Navbar;
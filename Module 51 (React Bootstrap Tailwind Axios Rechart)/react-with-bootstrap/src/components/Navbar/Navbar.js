import React, {useState} from 'react';
import Link from '../Link/Link';
import './Navbar.css'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [items, setItems] = useState(false);
    const linkItem = [
        {id:1, name: "Home", link:'./home'},
        {id:1, name: "Products", link:'./products'},
        {id:1, name: "Contact", link:'./contact'},
        {id:1, name: "About", link:'./about'},
        {id:1, name: "Account", link:'./account'}
    ]
    return (
        <nav className='bg-purple-500'>
            <div onClick={()=>setItems(!items)}  className='w-6 h-6 md:hidden'>
                {items ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
           <ul className='md:flex p-4 justify-center items-center'>
               {linkItem.map(item=><Link key={item.id} item={item}></Link>)}
           </ul> 
        </nav>
    );
};

export default Navbar;
import React from 'react';

const Link = ({item}) => {
    const {name,link} = item;
    return (
        <div>
            <li className='ml-4 text-xl text-white  hover:text-orange-500'><a href={link}>{name}</a></li>
        </div>
    );
};

export default Link;
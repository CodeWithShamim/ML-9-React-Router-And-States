import React from 'react';
import {useNavigate} from 'react-router-dom';

const Home=() => {
    let navigate=useNavigate();
    const showProductDetails=(id) => {
        const path=`/about`;
        navigate(path)

    }
    return (
        <div>
            <h1>this is Home</h1>
            <button onClick={() => showProductDetails(10)}>GO About Page</button>
        </div>
    );
};

export default Home;
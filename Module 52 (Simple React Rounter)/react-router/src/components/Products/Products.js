import React from 'react';

const Products = () => {
    const searchProducts = e =>{
        console.log(e.target.value);
    }
    return (
        <div>
            <h1>Search your favourite products</h1>
            <input type="search" onChange={searchProducts} />
        </div>
    );
};

export default Products;
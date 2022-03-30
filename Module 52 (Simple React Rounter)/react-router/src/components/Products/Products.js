import React, {useEffect, useState} from 'react';

const Products = () => {
    const [searchFood, setSearchFood] = useState("");
    const [meals, setMeals] = useState([]);
    const searchProduct = e =>{
        setSearchFood(e.target.value)
    }


    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            if(data.meals){
                setMeals(data.meals)
            }
        })
    },[searchFood])

    console.log(meals);
    return (
        <div>
            <h1>Search your favourite Foods</h1>
            <input type="search" onChange={searchProduct} />
            <h3>Result: {meals.length}</h3>
        </div>
    );
};

export default Products;
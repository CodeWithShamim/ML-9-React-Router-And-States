import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const DynamicPart = () => {
    const {id} = useParams();
    const [show, setShow] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setShow(data));
    },[id])
    // console.log(id);
    return (
        <div>
            <h1>this is dynamic part:</h1>
            <h5>dynamic url parameter: {id}</h5>
            <p>------------------------------</p>
            <h1>ID: {show.id}</h1>
            <h2>Name: {show.name}</h2>
            <h2>Username: {show.username}</h2>
            <h2>Email: {show.email}</h2>
            <h2>Phone: {show.phone}</h2>
            <h2>Website: {show.website}</h2>
        </div>
    );
};

export default DynamicPart;
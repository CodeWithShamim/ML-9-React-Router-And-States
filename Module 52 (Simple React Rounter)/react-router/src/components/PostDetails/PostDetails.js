import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const PostDetails = () => {
    const {postId} = useParams();
    const [postDetails, setPostDetails] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=>res.json())
        .then(data=>setPostDetails(data));
    },[postId])
    return (
        <div>
            <h1>this is post details</h1>
            <h2>ID: {postId}</h2>
            <p>---------------------------</p>
            <h3>Post ID: {postDetails.id}</h3>
            <h5>Title: {postDetails.title}</h5>
            <h5>Body: {postDetails.body}</h5>
        </div>
    );
};

export default PostDetails;
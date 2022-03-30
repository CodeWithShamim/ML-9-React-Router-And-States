import React from 'react';
import {useParams} from 'react-router-dom';

const DynamicPart = () => {
    const params = useParams();
    console.log(params.id);
    return (
        <div>
            <h1>this is dynamic part:</h1>
            <h5>dynamic url parameter: {params.id}</h5>
        </div>
    );
};

export default DynamicPart;
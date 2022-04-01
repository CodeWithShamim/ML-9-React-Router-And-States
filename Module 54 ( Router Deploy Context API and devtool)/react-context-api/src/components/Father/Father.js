import React from 'react';
import Myself from '../Myself/Myself'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'

const Father=({house}) => {
    return (
        <div>
            <h1>Father</h1>
            <p>{house}</p>
            <Myself house={house}></Myself>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
        </div>
    );
};

export default Father;
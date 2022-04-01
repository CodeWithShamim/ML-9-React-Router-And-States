import React from 'react';
import Special from '../Special/Special';

const Myself = ({house}) => {
    return (
        <div>
            <p>{house}</p>
            <h1>this is Myself</h1>
            <Special></Special>
        </div>
    );
};

export default Myself;
import React from 'react';
import {useNavigate} from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const showResult=(id)=>{
        const path = `result/${id}`;
        navigate(path)

    }
    return (
        <div>
            this is about
            <button onClick={()=>showResult(1)}>btn-1</button>
            <button onClick={()=>showResult(2)}>btn-2</button>
            <button onClick={()=>showResult(3)}>btn-3</button>
            <button onClick={()=>showResult(4)}>btn-4</button>
            <button onClick={()=>showResult(5)}>btn-5</button>
        </div>
    );
};

export default About;
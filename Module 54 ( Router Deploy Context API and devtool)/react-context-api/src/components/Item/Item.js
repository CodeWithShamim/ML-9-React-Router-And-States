import React from 'react';
import {Link} from 'react-router-dom';

const Item=() => {
    const cart = [4,5,6,5,5]

    let command;
    if(cart.length === 0){
      command = <h1>please add item</h1>
    }
    else{
      command = <h1>thanks for add item!</h1>
    }

    return (
        <div>
            {command}
            this is item


            {cart.length ===0 || <div className=''>
                <h1>Yah, it's || operator!!!</h1>
                </div>}

            {cart.length ===5 && <div className=''>
                <h1>wow, it's && operator!!!</h1>
                </div>}
            {cart.length <=4 ? <h1>keep adding</h1> : <button>Remove all</button>}

             <br />
             <br />
            <Link to='/grandpa'>Grandpa</Link>
        </div>
    );
};

export default Item;
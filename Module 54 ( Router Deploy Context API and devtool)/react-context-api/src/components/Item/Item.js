import React from 'react';

const Item=() => {
    const cart = []

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
        </div>
    );
};

export default Item;
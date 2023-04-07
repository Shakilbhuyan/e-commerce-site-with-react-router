import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Order summary:{cart.length}</h1>
        </div>
    );
};

export default Cart;
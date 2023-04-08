import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p className='bg-slate-300 p-1 rounded mb-2'>please Add product.</p>
    }
    return (
        <div>
            <h1 className='text-2xl font-bold'>Order summary:{cart.length}</h1>
            {message}
            {
                cart.map(tShirt =><p 
                    className='bg-slate-300 p-1 rounded mb-2'
                key={tShirt._id}>
                    {tShirt.name}
                    <button onClick={()=> handleRemoveFromCart(tShirt._id)} className='border rounded-full p-1 text-yellow-400 bg-red-600'>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;
import React from 'react';

const Tshirt = ({tShirt, handleAddToCart}) => {
    const {_id, picture, name, price, gender} = tShirt;
    return (
            <div className='border border-blue-200 rounded p-10 bg-blue-50'>
            <img className='w-64 h-64 rounded' src={picture} alt="" />
            <p className='text-xl font-semibold mt-2'>{name}</p>
            <p>Price: ${price}</p>
            <p>Gender:{gender}</p>
            <button onClick={()=> handleAddToCart(tShirt)}>Buy Now</button>
            </div>
    );
};

export default Tshirt;
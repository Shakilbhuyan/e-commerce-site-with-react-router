import React from 'react';

const Tshirt = ({ tShirt, handleAddToCart }) => {
    const { _id, picture, name, price, gender } = tShirt;
    return (
        <div className='border border-blue-200 rounded p-10 bg-blue-50 relative'>
            <img className='w-64 h-60 rounded' src={picture} alt="" />
            <div>
            <p className='text-xl font-semibold mt-2'>{name}</p>
            <p>Price: ${price}</p>
            <p>Gender:{gender}</p>
            </div>
            <button className='border border-blue-300 bg-orange-600 p-2 rounded-md text-slate-500 hover:bg-orange-900 w-full absolute bottom-0 -ms-10 mt-1' onClick={() => handleAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (tShirt)=>{
        console.log(tShirt);
    }
    return (
        <div className='grid grid-cols-4 gap-10 ms-16 mt-5'>
             <div className='col-span-3 grid grid-cols-3 gap-6'>
             {
             tShirts.map(tShirt =><Tshirt
             key={tShirt._id}
             tShirt={tShirt}
             handleAddToCart={handleAddToCart}
             ></Tshirt>)
             } 
             </div>
             <div className='col-span-1'>
                <Cart ></Cart>
             </div>
        </div>
    );
};

export default Home;
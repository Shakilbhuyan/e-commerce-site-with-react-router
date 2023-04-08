import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';



const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (tShirt)=>{
        const exists = cart.find(ts => ts._id === tShirt._id);
        if(exists){
           toast('You have already added this T-shirt!')
        }
       else{
        const newCart = [...cart, tShirt];
        setCart(newCart);
       }
    }
    const handleRemoveFromCart = (id)=>{
        const remaining = cart.filter(ts =>ts._id !== id);
        setCart(remaining);
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
             <div className='col-span-1 bg-slate-200 rounded p-2'>
                <Cart 
                cart ={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
             </div>
        </div>
    );
};

export default Home;
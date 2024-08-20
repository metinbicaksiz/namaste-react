import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-center font-bold text-2xl m-5 p-5">
                    Cart
                </h1>
                <button
                    className="font-medium text-red-500"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            </div>
            <ul className="list-disc text-center mb-5">
                {cartItems?.items.length === 0 && "No Items in the Cart"}
                {
                    cartItems?.items.map((item, index) => (
                        <li key={index} className="text-center m-2 font-medium">{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Cart;
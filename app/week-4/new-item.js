"use client"

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);
    
    const increment = () => {
        let currentQuantity = quantity;
        if(quantity < 20) {
            setQuantity(currentQuantity + 1);
        }
    }

    const decrement = () => {
        let currentQuantity = quantity;
        if(quantity > 1) {
            setQuantity(currentQuantity - 1);
        }
    }

    return (
        <main className="flex justify-center bg-slate-600 rounded w-80 m-auto mt-2 p-5">
            <h2 className="text-white mr-10 text-2xl">Quantity: {quantity}</h2>
            <button className="mx-3 px-2 w-7 text-white bg-blue-400 hover:bg-blue-800 rounded-md" onClick={increment}>+</button>
            <button className="mx-3 px-2 w-7 text-white bg-blue-600 hover:bg-blue-950 rounded-md" onClick={decrement}>-</button>
        </main>
    );
}
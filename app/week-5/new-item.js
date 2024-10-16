"use client"

import { useState } from "react";

export default function NewItem2() {

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const handleName = (event) => setName(event.target.value);
    const handleCategory = (event) => setCategory(event.target.value);
    const handleSubmit = (event) => {
        event.preventDefault();

        let item = {
            iName: name,
            iQuantity: quantity,
            iCategory: category
        }

        alert(`
            Name: ${item.iName}
            Quantity: ${item.iQuantity}
            Category: ${item.iCategory}
            `);

        setName("");
        setQuantity("");
        setCategory("");
    }

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

    return(
        <main class="flex justify-center w-full">
            <form onSubmit={handleSubmit} className="p-4 m-4 bg-blue-950 max-w-sm w-full">

                <div className="mb-4">
                    <input 
                        onChange={handleName}
                        value={name}
                        type="text"
                        placeholder="Item Name"
                        className="w-full mt-1 rounded border-2 border-blue-500 focus:bg-amber-200 px-3 py-2"
                    />
                </div>

                <div className="flex justify-between">
                    
                    <div className="p-2 mt-1 mb-1 rounded border-2 border-blue-500 bg-white w-36">
                        <div className="flex justify-between">
                            <h2 className="text-black">{quantity}</h2>
                            <div className="flex">
                                <button type="button" className="mx-3 px-2 w-7 text-white bg-blue-400 hover:bg-blue-800 rounded-md" onClick={increment}>+</button>
                                <button type="button" className="mx-3 px-2 w-7 text-white bg-blue-600 hover:bg-blue-950 rounded-md" onClick={decrement}>-</button>
                            </div>
                        </div>
                    </div>

                    <select onChange={handleCategory} className="ml-1 bg-white rounded border-2 border-blue-500 focus:bg-amber-200 ">
                        <option value disabled>Category</option>  
                        <option value="produce" selected>Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>

                </div>

                <div>
                    <button onSubmit={handleSubmit} className="w-full bg-green-500 hover:bg-red-500 active:bg-blue-500 text-white rounded mt-4 px-3 py-2">Submit Registration</button>
                </div>

            </form>
        </main>
    );

}
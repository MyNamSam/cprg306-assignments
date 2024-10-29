"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem])
    };

    return ( 
        <main className="pb-3 bg-green-300">
            <h2 className="text-xl font-bold pl-4 pt-4">Shopping List</h2>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}
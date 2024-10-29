"use client"

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "category") return a.category.localeCompare(b.category);
        return 0;
    });

    return (
    <div>
        <div>
            <button
                className={`rounded p-2 mx-4 mt-2 ${sortBy === "name" ? "bg-emerald-800 text-white" : "bg-slate-400 text-black"}`}
                onClick={() => setSortBy("name")}
            > Name
            </button>
            <button
                className={`rounded p-2 ${sortBy === "category" ? "bg-emerald-800 text-white" : "bg-slate-400 text-black"}`}
                onClick={() => setSortBy("category")}
            > Category
            </button>
        </div>

        <div>
            {sortedItems.map((item) => (
            <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
            />
            ))}
        </div>
    </div>
  );
};
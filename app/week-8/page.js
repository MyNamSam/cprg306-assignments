"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meals-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const clearName = item.name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();
    setSelectedItemName(clearName);
  };

  return (
    <main className="flex pb-3 bg-green-300">
      <div className="p-4">
        <h1 className="text-xl font-bold pl-4 pt-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="p-4">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

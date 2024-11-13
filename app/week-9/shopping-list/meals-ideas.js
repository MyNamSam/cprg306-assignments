"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!response.ok) {
      console.log(response.status);
      return [];
    }
    const data = await response.json();
    return data.meals ?? [];
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return [];
  };
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (!ingredient) return;
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals ?? []);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="font-bold">Meal Ideas with {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} width={150} />
          </li>
        ))}
      </ul>
    </div>
  );
};

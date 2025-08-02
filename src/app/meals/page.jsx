"use client";
import React, { useEffect, useState } from "react";

const MealsPage = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setMeals(data?.meals || []);

      return data?.meals || [];
    } catch (error) {
      console.error("Error fetching meals:", error);
      setMeals([]);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [search]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <input
        type="text"
        placeholder="Search meals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-2 border rounded w-full max-w-md"
      />

      {meals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {meals.map((meal) => (
            <div key={meal?.idMeal} className="border p-4 rounded">
              <h2 className="text-lg font-bold mb-2">{meal?.strMeal}</h2>
              <img
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
                className="w-full h-40 object-cover rounded"
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No meals found.</p>
      )}
    </div>
  );
};

export default MealsPage;

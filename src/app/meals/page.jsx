import MealsSearchInputs from "./components/MealsSearchInputs";

const MealsPage = async ({ searchParams }) => {
  const search = searchParams.search || "";

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      // setMeals(data?.meals || []);

      return data?.meals || [];
    } catch (error) {
      console.error("Error fetching meals:", error);
      return [];
      // setMeals([]);
    }
  };

  const meals = await fetchMeals();

  return (
    <div className="max-w-7xl mx-auto p-4">
      <MealsSearchInputs />
      <h1 className="text-2xl font-bold mb-4">Meals</h1>
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

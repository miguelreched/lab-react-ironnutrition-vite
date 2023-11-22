import "./App.css";
import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [allFood, setAllFood] = useState(foodsJson);

  // const [food, setFood] = useState ("")

  const handleToDelete = (indexToDelete) => {
    const clone = JSON.parse(JSON.stringify(allFood));
    clone.splice(indexToDelete, 1);
    setAllFood(clone);
  };

  return (
    <div>
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm 
      allFood={allFood} 
      setAllFood={setAllFood} />

      <hr />

      {allFood.map((eachFood, index) => {
        return (
          <div key={eachFood.id}>
            <h2>Name: {eachFood.name}</h2>
            <img src={eachFood.image} alt="" width={200} />
            <p>Calories: {eachFood.calories}</p>
            <p>Servings: {eachFood.servings}</p>
            <h3>Total Clories: {eachFood.servings * eachFood.calories} kcal</h3>

            <button onClick={() => handleToDelete(index)}>Delete</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;

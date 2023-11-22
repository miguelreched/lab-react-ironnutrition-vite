// Your code here
import { useState } from "react"
function FoodBox(props) {
    const [allFood, setallFood] = useState([])
    
  return (
    <div>
        <h2>{props.food.name}</h2>
        <img src={props.food.image} alt="" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <h3>Total Calories: {props.food.servings * props.food.calories} kcal</h3>
    <button>Delete</button>


    </div>
  )
}
export default FoodBox
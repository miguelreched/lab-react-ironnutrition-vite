// Your code here
import { useState } from "react";

function AddFoodForm(props) {
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newCalories, setNewCalories] = useState("");
  const [newServings, setNewServings] = useState("");

  const handleToName = (event) =>{
    setNewName(event.target.value)
  }

  const handleToImage = (event) =>{
    setNewImage(event.target.value)
  }

  const handleToCalories = (event) =>{
    setNewCalories(event.target.value)
  }

  const handleToServings = (event) =>{
    setNewServings(event.target.value)
  }

  const handleToCreate = (event) => {
    event.preventDefault();

    const newFood = {
      name: newName,
      image: newImage,
      calories: newCalories,
      servings: newServings,
    };

    const clone = JSON.parse(JSON.stringify(props.allFood));
    clone.push(newFood);
    props.setAllFood(clone);
  };

  return (
    <div>
      <form onSubmit={handleToCreate}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" onChange={handleToName}value={newName}/>
        <br />
        <label htmlFor="image">Image: </label>
        <input type="text" name="image" onChange={handleToImage} value={newImage} />
        <br />
        <label htmlFor="calories">Calories: </label>
        <input type="number" name="calories" onChange={handleToCalories} value={newCalories}/>
        <br />
        <label htmlFor="servings">Servings: </label>
        <input type="number" name="servings" onChange={handleToServings} value={newServings}/>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;

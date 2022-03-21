import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';

function App() {
  const [foodList, setFoodList] = useState(foods);
/* console.log(foodList) */

  foodList.map((food) => {
    /* console.log(food) */
    return (
      <div className="App">
      <h1>Food List</h1>
        <div>
          <p> {food.name} </p>
          <img src={food.image} alt={food.image} width={100} />
        </div>
      </div>
    );
  })
}
export default App;

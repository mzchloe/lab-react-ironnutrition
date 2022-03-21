import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox/FoodBox';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">

<FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />
      {/* {foodList.map((food) => (
        <div>
          <p> {food.name} </p>
          <img src={food.image} alt={food.image} width={100} />
        </div>
      ))} */}
    </div>
  );
}
export default App;

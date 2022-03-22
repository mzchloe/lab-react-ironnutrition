import React from 'react';
import { useState } from 'react';
import { Divider, Input } from 'antd';

export default function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  //handling the change of the input fields
  const handleNameInput = (event) => setName(event.target.value);
  const handleImageInput = (event) => setImage(event.target.value);
  const handleCaloriesInput = (event) => setCalories(event.target.value);
  const handleServingsInput = (event) => setServings(event.target.value);

  //handling the form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    /*  const newFood = {name, image, calories, servings} */
    props.setFoodList((previousFoodList) =>
      previousFoodList.concat({
        name: name,
        image: image,
        calories: calories,
        servings: servings,
      })
    )

   /*  setName('');
    setImage('');
    setCalories(0);
    setServings(0); */
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px 45px 20px 45px' }}>
      <Divider plain>
        <h2>
          <b>Add Food Entry</b>
        </h2>
      </Divider>

      <label>Name</label>
      <br></br>
      <Input name="name" value={name} type="text" onChange={handleNameInput} />
      <br></br>
      <label>Image</label>
      <br></br>
      <Input
        name="image"
        value={image}
        type="text"
        onChange={handleImageInput}
      />
      <br></br>
      <label>Calories</label>
      <br></br>
      <Input
        name="calories"
        value={calories}
        type="text"
        onChange={handleCaloriesInput}
      />
      <br></br>
      <label>Servings</label>
      <br></br>
      <Input
        name="servings"
        value={servings}
        type="text"
        onChange={handleServingsInput}
      />
      <br></br>
      <button type="submit">Create</button>
    </form>
  );
}

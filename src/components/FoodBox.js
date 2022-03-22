import { Card, Col, Button } from 'antd';


// Iteration 2
export default function FoodBox(props) {

    const totalCal = () => {
        const totalCal =props.food.calories * props.food.servings
    return totalCal
    }

  return (
    <Col span={8}>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10, justifyContent: 'left' }}
      >
        <img src={props.food.image} height={60} alt="food" />
        <p>Calories: {props.food.calories}</p>
        <p>Serving: <b> {props.food.servings}</b></p>
        <p>
          <b>Total Calories: {totalCal()}</b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}



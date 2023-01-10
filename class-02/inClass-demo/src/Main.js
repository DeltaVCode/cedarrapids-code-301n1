import React from "react";
import Pizza from "./Pizza.js";
import data from "./data.json";
import './Main.css';

class Main extends React.Component {
  render() {
    console.log("data? :", data);

    let pizzas = [];

    data.forEach((newPizza, index) => {
      pizzas.push(
        <Pizza pizzaName={newPizza.name} imageURL={newPizza.imageURL} key={index} />
      );
    });
    console.log('data compon', pizzas);
    return (
      <main>
      {pizzas}
        {/* <Pizza pie="Detroit" toppings="Cheese" crust="Detroit Style"/>
        <Pizza pie="New York Thin"/>
        <Pizza pie="Chicago Deep Dish"/>
        <Pizza pie="Oven Grinder"/>
        <Pizza pie="Brick Oven"/>
        <Pizza pie="Calzone"/> */}
      </main>
    );
  }
}

export default Main;

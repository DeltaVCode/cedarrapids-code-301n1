import React from 'react';
import Pizza from './Pizza.js';

class Main extends React.Component {
  render() {
    return (
      <main>
      {/* its as if the pie is a parameter name for our arguments our pizza values  */}
        <Pizza pie="Detroit" toppings="Cheese" crust="Detroit Style"/>
        <Pizza pie="New York Thin"/>
        <Pizza pie="Chicago Deep Dish"/>
        <Pizza pie="Oven Grinder"/>
        <Pizza pie="Brick Oven"/>
        <Pizza pie="Calzone"/>
      </main>
    )
  }
}

export default Main;

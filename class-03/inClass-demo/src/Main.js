import React from "react";
import Pizza from "./Pizza.js";
import "./Main.css";
import { Container, Row } from "react-bootstrap";


class Main extends React.Component {
  render() {
    let pizzas = [];

    this.props.data.forEach((newPizza, index) => {
      pizzas.push(
        <Pizza
          pizzaName={newPizza.name}
          imageURL={newPizza.imageURL}
          key={index}
          addPizzaEmoji={this.props.addPizzaEmoji}
          handleOnShow={this.props.handleOnShow}
        />
      );
    });
    //  console.log('props', this.props);
    return (
      <main>
        <Container>
          <Row lg={4} md={3} sm={2} xs={1}>
            {pizzas}
          </Row>
        </Container>
      </main>
    );
  }
}

export default Main;

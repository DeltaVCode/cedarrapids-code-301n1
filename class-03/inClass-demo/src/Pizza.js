import React from "react";
import "./Pizza.css";
// import Button from "react-bootstrap/Button";
import { Card, Button, Col } from "react-bootstrap";

class Pizza extends React.Component {
  //functions
  //constructor functions
  constructor(props) {
    super(props);
    this.state = {
      //can have several properties in here
      // count likes
      likes: 0,
      // assign default values to make state more readable
      pizzaNeeded: false,
      // global variable would update one value and not render. State is for the comp to handle instances of the 'this'
    };
  }

  handleLikes = () => {
    //method to allow us to update state
    this.setState({
      likes: this.state.likes + 1,
      //could add things to state here 
      // bananas: 'Thats Bananas',
    });
  };

  pizzaNeeded = () => {
    this.setState({
      pizzaNeeded: true,
    });
  };

  pizzaGot = () => {
    this.setState({
      pizzaNeeded: false,
    });
  };

  helpHandleOnShow = () => {
    this.props.handleOnShow(this.props.pizzaName);
  }


  render() {
    console.log("our pizza properties: ", this.props.handleOnShow);
    return (
      // 1. we need to render all pizza names and images
      <>
        {/* <article>


          <h4 onClick={this.helpHandleOnShow}>🍕 {this.props.pizzaName}</h4>



          <p>{this.state.likes} Likes!</p>
          <p onClick={this.handleLikes}>Click to like this pizza!</p>
          <img 
            src={this.props.imageURL} 
            alt={this.props.pizzaName} 
            onClick={this.props.addPizzaEmoji}
            /> */}

          {/* <p>{this.state.bananas}</p> */}
          {/* <button>html button</button> */}
          {/* 
        Ternary Operator
        What? True : False 
        BooleanValue ? console.log('true') : console.log('false');
        */}

          {/* <div>{this.state.pizzaNeeded ? "I need this Pizza!" : ""}</div>
          <Button
            variant="warning"
            onClick={this.pizzaNeeded}
            className="buttonMargin"
          >
            I need this Pizza!
          </Button>
          <Button variant="success" onClick={this.pizzaGot}>
            I got this Pizza!
          </Button>
        </article> */}





        {/* last update to the card bootstrap */}
        <Col className="mt-4">
          <Card className="h-100 p-3">
            <Card.Title onClick={this.helpHandleOnShow}>
              {this.props.pizzaName}
            </Card.Title>
            <Card.Img
              className="mb-4 "
              src={this.props.imageURL}
              alt={this.props.pizzaName}
              title={this.props.pizzaName}
              onClick={this.props.addPizzaEmoji}
            />
            <p>{this.state.likes} Likes!</p>
            <p onClick={this.handleLikes}>Click to Like this Pizza?</p>
            <div>{this.state.pizzaNeed ? 'I need this Pizza!' : ''}</div>
            <Button onClick={this.pizzaNeeded} className="buttonMargin">I need Pizza!</Button>
            <Button variant="success" onClick={this.pizzaGot}>
              I got some Pizza!
            </Button>
          </Card>
        </Col>
      </>
    );
  }
}

export default Pizza;

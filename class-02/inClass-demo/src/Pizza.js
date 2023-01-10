import React from "react";
import "./Pizza.css";
import Button from "react-bootstrap/Button";

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
      bananas: "That Bananas",
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

  render() {
    console.log("our pizza properties: ", this.props);
    return (
      <>
        <article>
          <h3>{this.props.pizzaName}</h3>
          <p>{this.state.likes} Likes!</p>
          <p onClick={this.handleLikes}>Click to like this pizza!</p>
          <img src={this.props.imageURL} alt={this.props.pizzaName} />

          {/* 
        Ternary Operator
        What? True : False 
        BooleanValue ? console.log('true') : console.log('false');
        */}
          
          <div>{this.state.pizzaNeeded ? 'I need this Pizza!' : ''}</div>
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
        </article>
      </>
    );
  }
}

export default Pizza;

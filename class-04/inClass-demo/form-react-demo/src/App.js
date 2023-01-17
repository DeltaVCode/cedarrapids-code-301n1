//1. imports
import React from "react";
//bootstrap form
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//form html
//class
//select for form
//diff between forms
//event listeners
//state for user name and sorted data
//going to filter helper function for selecting even or odd or all numbers.
// we have to update state and with forms it can be weird.
//helper functions will be for taking in form data, also taking in form input as user is typing it.
//2.
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class App extends React.Component {
  //is a good place to add our helper functions
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      howToSort: "",
      sortedData: data,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let userName = event.target.userName.value;
    // // console.log("🚀 ~ file: App.js:27 ~ App ~ userName", userName);
    //add it to state


    let firstName = event.target.firstName.value;
    console.log("🚀 ~ file: App.js:39 ~ firstName", firstName);
    

    this.setState({
      userName: userName,

    });
    console.log("user in state? ", this.state.userName);
  };

  handleInput = (event) => {
    //we dont need to prevent default
    let userName = event.target.value;
    // // console.log("🚀 ~ file: App.js:44 ~ App ~ userName", userName);
    //now add to state
    this.setState({
      userName: userName,
    });
  };

  handleSelect = (event) => {
    let selected = event.target.value;
    // console.log("🚀 ~ file: App.js:53 ~ App ~ selected", selected);
    //if even
    if (selected === "even") {
      //if odd
      //filter over our array of numbers
      let newData = data.filter((number) => number % 2 === 0);
      //set state with the evens
      this.setState({ sortedData: newData });
    } else if (selected === "odd") {
      //filter over our array of numbers
      let newData = data.filter((number) => number % 2 !== 0);
      //set state with the odds
      this.setState({ sortedData: newData });
    } else {
      //set state back to everything
      //give me back all the data
      this.setState({ sortedData: data });
    }
  };

  render() {
    // // // console.log("🚀 ~ file: App.js:18 ~ data", data);
    // let numbers = data.map((number, index) => {
    let numbers = this.state.sortedData.map((number, index) => {
      return <ListGroup.Item key={index}>{number}</ListGroup.Item>;
    });

    return (
      <>
        <header>Forms in React</header>
        <main>
          <ListGroup>{numbers}</ListGroup>

          <Form onSubmit={this.handleSubmit}>
            {/* to make label and input siblings in react forms in plain old html we would use for attribute to denote which input goes with label tag. Need and 'id' and a 'for' */}
            <Form.Label>Name: 
              {/* with no back slash we get error */}
              <input type="text" name="userName" onInput={this.handleInput} />
            </Form.Label>
            

            {/* 
            <Form.Label htmlFor="name">Name: 
              with no back slash we get error
              <input type="text" name="userName" onInput={this.handleInput} id="name"/>
            </Form.Label> */}
            {/* One Way to add the for and id
              <Form.Label add for="" but we need the htmlFor="" >First Name:</Form.Label>
              <Form.Control type="text" add id="lastName" />
            */}

            <Form.Group controlId="firstName">
              <Form.Label>Name:</Form.Label>
                <Form.Control  type="text" />
                {/* with no back slash we get error */}
                {/* <input type="text" name="userName" onInput={this.handleInput} /> */}
              
            </Form.Group>

            <p>Selected Numbers</p>
            <Form.Select name="selected" onChange={this.handleSelect}>
              <option value="all">All</option>
              <option value="even">Even</option>
              <option value="odd">Odd</option>
            </Form.Select>

            {/* how do we submit a form, there are several ways this is similar to
           201 lets add a button, add the type for react be explicit for reacts sake
          So now add event listener just like on click
           */}
            <Button type="submit">Submit</Button>
          </Form>
        </main>
      </>
    );
  }
} // closes our class....

//3.
export default App;

// <form onSubmit={this.handleSubmit}>
// <label>
//   with no back slash we get error
//   <input type="text" name="userName" onInput={this.handleInput} />
// </label>
// <fieldset>
//   <legend>Selected Numbers</legend>
//   <select name="selected" onChange={this.handleSelect}>
//     <option value="all">All</option>
//     <option value="even">Even</option>
//     <option value="odd">Odd</option>
//   </select>
// </fieldset>
// how do we submit a form, there are several ways this is similar to
// 201 lets add a button, add the type for react be explicit for reacts sake
// So now add event listener just like on click

// <button type="submit">Submit</button>
// </form>

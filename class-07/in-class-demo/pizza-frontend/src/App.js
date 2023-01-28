import "./App.css";
import React from "react";
import axios from "axios";

let SERVER_API = process.env.REACT_APP_API_URL;
// console.log("🚀 ~ file: App.js:6 ~ App ~ SERVER_API", SERVER_API);

class App extends React.Component {
  //add constructor
  constructor(props) {
    super(props);
    this.state = {
      //get a pizza object back from server
      pizzaData: {},
      //we are passing a pizzatype to our server
      pizzaType: "",
      //conditionaly render our api object that is returned to us
      showPizza: false,
    };
  }

  //add helper functions
  handleOnChange = (event) => {
    //is going to capture our input on change keystrokesss. to update state
    // console.log(event.target.value);
    this.setState({
      pizzaType: event.target.value,
    });
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();
    // console.log("🚀 ~ file: App.js:30 ~ App ~ event", event);

    //create a request url for our server to accept as that request object
    //http://localhost:3003/pizza?pizzatype=Chicago%20Pizza
    let url = `${SERVER_API}/pizza?pizzatype=${this.state.pizzaType}`;

    // console.log("🚀 ~ file: App.js:44 ~ App ~ url", url);
    let pizzaData = await axios.get(url);
    console.log("🚀 ~ file: App.js:46 ~ App ~ pizzaData", pizzaData.data);

    this.setState({
      pizzaData: pizzaData.data,
      error: false,
      showPizza: true,
    });
  };

  render() {
    //add form to allow user to request pizza types
    // conditional render when we have state updated.
    console.log(this.state.pizzaData);
    return (
      <>
        <h1>hello Pizza world!</h1>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            <input type="text" onChange={this.handleOnChange} />
          </label>
          <button type="submit">Get Pizza</button>
        </form>

        {this.state.showPizza && (
          <p>
            {this.state.pizzaData.pizzaType} can be found in{" "}
            {this.state.pizzaData.location}
          </p>
        )}
      </>
    );
  }
}
export default App;

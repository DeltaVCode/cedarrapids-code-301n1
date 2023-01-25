import React from "react";
import axios from "axios";

let API_KEY = process.env.REACT_APP_LOCATION_KEY;
// console.log("api key", API_KEY);

class App extends React.Component {
  //constructor function
  constructor(props) {
    super(props);
    this.state = {
      starWarsChars: [],
      //add for city
      city: "",
      cityData: {},
      error: false,
      errorMessage: "",
    };
  }

  //add helper functions
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let starWarsCharacters = await axios.get(
        "https://swapi.dev/api/people/?page=1"
      );
      this.setState({
        starWarsChars: starWarsCharacters.data.results,
        error: false,
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An error occurred: ${error.response.status}`,
      });
    }
  };

  submitCityHandler = async (event) => {
    event.preventDefault();

    try {
      // console.log("proof of life", event.target);
      // https://us1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json
      let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.city}&format=json`;

      // console.log("🚀 ~ file: App.js:37 ~ App ~ submitCityHandler= ~ url", url);
      let cityInfo = await axios.get(url);
      console.log("🚀 ~ file: App.js:37  cityInfo", cityInfo.data[0]);

      this.setState({
        cityData: cityInfo.data[0],
        error: false,
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An error occurred: ${error.response.status}`,
      });
    }
      console.log("error!!!!", this.state.error);
      console.log("error.message!!!!", this.state.errorMessage);
  };

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  render() {
    let starWarsList = this.state.starWarsChars.map((charName, index) => {
      return <li key={index}>{charName.name}</li>;
    });
    // console.log(this.state.city);
    console.log("city", this.state.cityData);
    return (
      <>
        <h1>Data from SWAPI!!</h1>
        <ul>{starWarsList}</ul>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Display Star Wars Characters</button>
        </form>

        {/* add city search  */}
        <form id="form" onSubmit={this.submitCityHandler}>
          <label>
            {" "}
            Pick a City:
            <input type="text" onInput={this.handleCityInput} />
          </label>
          <button type="submit">Get City Data</button>
        </form>
      </>
    );
  }
}

export default App;

import React from "react";
import axios from "axios";
import Cats from "./components/Cats.js";
import CreateCat from "./components/CreateCat";
import Nav from "./components/Nav";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

let SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    };
  }

  getCats = async () => {
    // console.log(SERVER);
    try {
      let results = await axios.get(`${SERVER}/cats`);
      console.log("results from api", results);
      this.setState({
        cats: results.data,
      });
    } catch (error) {
      console.log("we have an error: ", error.response.data);
    }
  };
  //post new cat
  handleCatSubmit = async (event) => {
    event.preventDefault();
    let newCat = {
      name: event.target.name.value,
      color: event.target.color.value,
      spayNeuter: event.target.spayNeuter.checked,
      location: event.target.location.value,
    };
    console.log(newCat);
    this.postCat(newCat);
  };

  postCat = async (newCatObject) => {
    //we can post to our db
    try {
      let url = `${SERVER}/cats`;
      let createdCat = await axios.post(url, newCatObject);
      console.log(
        "🚀 ~ file: App.js:50 ~ App ~ postCat= ~ createCat",
        createdCat
      );
      this.setState({
        cats: [...this.state.cats, createdCat.data],
      });
    } catch (error) {
      console.log("we have an error: ", error.response.data);
    }
  };

  //delete cat
  deleteCats = async (id) => {
    try {
      //create our route to server 
      let url = `${SERVER}/cats/${id}`;
      await axios.delete(url);
      //now its out of the database
      //lets now take it out of state
      let updatedCats = this.state.cats.filter((cat) => cat._id !== id);
      this.setState({
        cats: updatedCats,
      })
    } catch (error) {
      console.log("we have an error: ", error.response.data);

    }
  };





  //net effect is that when the site loads (I should say this specific componenet loads), the data will be displayed the getCats will be invoked when component mounts after all its tasks.
  componentDidMount() {
    this.getCats();
  }

  render() {
    return (
      <>
        <Nav />
        <Container className="mt-5">
          <h1>World of Cats</h1>
          <div>
            {this.state.cats.length > 0 && (
              <>
                <Cats
                 cats={this.state.cats} 
                 deleteCats={this.deleteCats}
                 />
              </>
            )}
          </div>
          <CreateCat handleCatSubmit={this.handleCatSubmit} />
        </Container>
        <Outlet />
      </>
    );
  }
}

export default App;

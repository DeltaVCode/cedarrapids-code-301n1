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

  handleCatSubmit = async (event) => {
    event.preventDefault();
    let newCat = {
      name: event.target.name.value,
      color: event.target.color.value,
      spayNeuter: event.target.spayNeuter.checked,
      location: event.target.location.value,
    };
    this.postCat(newCat);
  };

  // make api call for our new cat
  postCat = async (newCatObject) => {
    try {
      let url = `${SERVER}/cats`;
      let createdCat = await axios.post(url, newCatObject);
      this.setState({
        cats: [...this.state.cats, createdCat.data],
      });
    } catch (error) {
      console.log("we hav an error: ", error.response.data);
    }
  };

  deleteCats = async (id) => {
    try {
      let url = `${SERVER}/cats/${id}`;
      await axios.delete(url);
      let updatedCats = this.state.cats.filter((cat) => cat._id !== id);
      this.setState({
        cats: updatedCats,
      });
    } catch (error) {
      console.log("we have an error: ", error.response.data);
    }
  };

  //we need to send the whole cat which lives in state.
  updateCats = async (catToUpdate) => {
    try {
      //create url to server to update cat and add id from our catToUpdate
      let updateURL = `${SERVER}/cats/${catToUpdate._id}`;
      //dont forget to add the 'body' of the request with the cat {}
      let newUpdatedCat = await axios.put(updateURL, catToUpdate);
      console(newUpdatedCat);

      let updatedCatArray = this.state.cats.map((existingCat) => {
        return existingCat._id === catToUpdate._id
          ? newUpdatedCat.data
          : existingCat;
      });
      this.setState({
        cats: updatedCatArray,
      });

      //now update state with the updateCatArray
    } catch (error) {}
  };

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
                  updateCats={this.updateCats}
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

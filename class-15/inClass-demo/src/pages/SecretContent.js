import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
// import axios from "axios";

class SecretContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treasure: [],
    };
  }

  async componentDidMount() {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log("token: ", jwt);

      // const config = {
      //   headers: { Authorization: `Bearer ${jwt}` },
      //   method: "get",
      //   baseURL: process.env.REACT_APP_SERVER,
      //   url: "/our-route",
      // };
      //build URL
      // let axiosData = await axios(config);

      let treasureData = [
        { treasure: "gold" },
        { treasure: "gems" },
        { treasure: "pizza" },
      ];
      this.setState({
        treasure: treasureData,
      });
    }
  }



  render() {
    console.log("jkhlkhljhljhlkh", this.state.treasure);

    let allLoot = this.state.treasure.map((loot, index) => {
      return <li key={index}>{loot.treasure}</li>;
    });
    return (
      <>
        <h1>SecretContent we hope</h1>
        <ul>{allLoot}</ul>
      </>
    );
  }
}

export default withAuth0(SecretContent);

import React from "react";
import cat from "../images/cat.jpg";


class Home extends React.Component {

  
  render() {
    return (
      <>
        <div>WELCOME HOME</div>
        <img src={cat} alt={"cat"} />
        <footer />
      </>
    );
  }
}

export default Home;

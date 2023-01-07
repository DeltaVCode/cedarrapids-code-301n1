import React from "react";

class Pizza extends React.Component {
  render() {
    console.log("our pizza properties: ", this.props);
    return (
      <>
        <article>
          <h3>{this.props.pie}</h3>
          <p>Is this your favorite pizza</p>
        </article>

        {/* 
        <article>
        <h3>Detroit</h3>
        <p>Is this your favorite pizza</p>
      </article>
      <article>
        <h3>Chicago</h3>
        <p>Is this your favorite pizza</p>
      </article>
      <article>
        <h3>{this.props.pie}</h3>
        <p>Is this your favorite pizza</p>
      </article>
      <article>
        <h3>{this.props.pie}</h3>
        <p>Is this your favorite pizza</p>
      </article>
      <article>
        <h3>{this.props.pie}</h3>
        <p>Is this your favorite pizza</p>
      </article> */}
      </>
    );
  }
}

export default Pizza;

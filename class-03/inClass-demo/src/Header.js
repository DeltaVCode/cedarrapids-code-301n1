import React from 'react';

class Header extends React.Component {
  render() {

    // console.log('header prop',this.props.pizzaSlice)
    return (
      <header>
        <h1>Pizza of 301{this.props.pizzaSlice}</h1>
      </header>
    );
  }
}

export default Header;





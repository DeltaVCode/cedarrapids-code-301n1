import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <>
        <Header/>
        <Main/>
        <footer>DeltaV: 2023</footer>
      </>
    );
  }
}

export default App;

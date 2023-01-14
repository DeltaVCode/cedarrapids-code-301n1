import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import './App.css';
import data from "./data.json";
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
//we can constructor functions
constructor(props){
  super(props);
  this.state = {
    // pizza: 'testForPizza'
    pizzaEmoji: '',
    showModal: false,
    selectPizza: '',
  }

}

// helperfunctions
addPizzaEmoji = () => {
  this.setState({
    pizzaEmoji : this.state.pizzaEmoji + "🍕",
  });
};

handleOnShow = (pizzaName) => {
 this.setState({
  //this will make it appear
  showModal: true,
  selectPizza: pizzaName
 });
};


  render() {
    return (
      <>
      {/* <p onClick={this.handleOnShow}>SHOW ME NOW TEST MODAL</p> */}
        <Header 
          pizzaSlice={this.state.pizzaEmoji}
           />
        <Main
          addPizzaEmoji={this.addPizzaEmoji}
          data={data}
          handleOnShow={this.handleOnShow}
        />
        <footer>DeltaV: 2023</footer>

       {/* <SelectedBeast /> */}
        <Modal show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.selectPizza}</Modal.Title>
        </Modal.Header>
      </Modal>





      </>
    );
  }
}

export default App;

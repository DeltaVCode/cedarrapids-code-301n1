## app.js

```js
import React from 'react'; //1.
import Header from './Header.js';//x

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  addCount = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return(
      <> //4.
      <button onClick={this.addCount}>Click Me</button>
      <p>{this.state.counter}</p>
      <Header title="the best counter app in the world!" />
      </>
    );
  }

} 

export default App;

```
## header.js

```js
// 2.do we need another import na pry not. 
import React from 'react';

class Header extends React.Component {

  render(){
    return <h1>{this.props.title}</h1>
  }
}

export default Header;

```
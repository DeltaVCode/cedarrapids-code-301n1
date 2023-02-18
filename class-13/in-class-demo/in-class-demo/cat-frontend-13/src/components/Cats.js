import React from "react";
//lets add some bootstrap
import UpdateCatForm from '../components/UpdateCatForm';
import { Container, ListGroup, Button } from "react-bootstrap";
class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false,
    };
  }

  render() {
    console.log(this.props.cats);
    //Cat is a nested component
    let cats = this.props.cats.map((cat) => (
      <Cat
        cat={cat}
        key={cat._id}
        deleteCats={this.props.deleteCats}
        updateCats={this.props.updateCats}
      />
    ));

    return (
      <Container>
        <ListGroup>{cats}</ListGroup>
      </Container>
    );
  }
}

//two components in the same file they belong together and Cats can only use Cat
class Cat extends Cats {
  render() {
    return (
      <>
      <ListGroup.Item>
        {this.props.cat.name} is {this.props.cat.color}
        <Button
          variant="warning"
          onClick={() => this.props.deleteCats(this.props.cat._id)}
        >
          Delete
        </Button>
        <Button
          variant="success"
          onClick={() => this.setState({ showUpdateForm: true })}
        >
          Update
        </Button>
      </ListGroup.Item>
       {this.state.showUpdateForm &&
      <UpdateCatForm 
         updateCats={this.props.updateCats}
         cat={this.props.cat}

         />
      }
      </>
    );
  }
}

export default Cats;

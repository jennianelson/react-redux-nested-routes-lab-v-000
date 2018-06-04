import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPet } from '../actions';

class PetsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { addPet, history, lastPetId } = this.props
    addPet(this.state);
    history.push("/pets")
    // history.push(`/pets/${lastPetId + 1}`);
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Add a Pet</h2>
        <form onSubmit={this.handleOnSubmit} >
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleOnChange} />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.handleOnChange} />
          <input
            type="submit"
            value="Add Pet" />
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {lastPetId : state.pets.length}
}

export default connect(mapStateToProps, { addPet })(PetsNew);

import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    console.log(event.target.id);
    this.setState({
      // [event.target.id]: event.target.value  problem from the test, we can't directly quote event.target.id
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state);
  }

  render() {
    console.log(this.state.location);
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return{
//     addRestaurant: (restaurant) => {
//       dispatch(addRestaurant(restaurant));
//     }
//   }
// };

//connect this component by wrapping RestaurantInput below
export default connect(state => ({restaurants: state.restaurants}), { addRestaurant })(RestaurantInput)

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {

     restaurants = () => this.props.restaurants.map((restaurant, index) => <li key={index}>{restaurant.name}</li>);

  render() {



    return (
      <div>
        <ul>

          {this.restaurants()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps)(Restaurants);

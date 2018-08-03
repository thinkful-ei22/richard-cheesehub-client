import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }
  render() {
    const cheeseListString = this.props.cheeses.map((cheese,index) => {
      return (
        <li key={index}>
          {cheese}
        </li>
      );
    });

    return (
      <ul>
        {cheeseListString}
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    cheeses: state.cheeses
  };
};

export default connect(mapStateToProps)(CheeseList);
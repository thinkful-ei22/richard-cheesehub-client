import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }
  render() {
    const cheeseListString = this.props.cheeses.map(cheese => {
      return (
        <li key={cheese.id}>
          {cheese.name}
        </li>
      );
    });

    if(this.props.loading){
      return <div>Loading... </div>;
    }

    if(this.props.error){
      return <div>{this.props.error}</div>;
    }

    return (
      <ul>
        {cheeseListString}
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    cheeses: state.cheeses,
    loading: state.loading,
    error: state.error
  };
};

export default connect(mapStateToProps)(CheeseList);
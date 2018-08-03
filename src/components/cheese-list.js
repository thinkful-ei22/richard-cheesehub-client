import React from 'react';
import {fetchCheeses} from '../actions/cheese';

export default function CheeseList(props) {
  const cheeseListString = props.cheeses.map((cheese,index) => {
    return (
      <li key={index}>
        {cheese}
      </li>
    );
  });

  return (
    <div>
      <ul>
        {cheeseListString}
      </ul>
      <button onClick={fetchCheeses}>TESTBUTTON</button>
    </div>
  );

}
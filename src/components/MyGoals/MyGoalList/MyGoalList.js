import React from 'react';

import MyGoalItem from '../MyGoalItem/MyGoalItem';
import './MyGoalList.css';

const MyGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <MyGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </MyGoalItem>
      ))}
    </ul>
  );
};

export default MyGoalList;

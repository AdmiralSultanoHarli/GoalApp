import React, { useState } from 'react';

import MyGoalList from './components/MyGoals/MyGoalList/MyGoalList';
import MyInput from './components/MyGoals/MyInput/MyInput';
import './App.css';

const App = () => {
  const [myGoals, setMyGoals] = useState([
    { text: 'Be Successful!', id: 'g1' },
    { text: 'Have unlimited knowledge!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setMyGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setMyGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (myGoals.length > 0) {
    content = (
      <MyGoalList items={myGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <MyInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {myGoals.length > 0 && (
          <MyGoalList
            items={myGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;

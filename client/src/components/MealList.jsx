import React from 'react';
import Meal from './Meal.jsx';

const MealList = ({meals}) => (
  <div>
    {meals.map((meal) => {
      return(
        <Meal meal={meal} key={meal.id}/>
      )}
    )}
  </div>
);

export default MealList;

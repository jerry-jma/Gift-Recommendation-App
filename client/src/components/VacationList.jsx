import React from 'react';
import VacationSpot from './VacationSpot.jsx';

const VacationList = ({vacationIdeas}) => (
  <div>
    {vacationIdeas.map((vacationIdea, vacation_id) => {
      return(
        <VacationSpot vacationIdea={vacationIdea} key={vacation_id}/>
      )}
    )}
  </div>
);

export default VacationList;

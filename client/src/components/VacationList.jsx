import React from 'react';
import VacationSpot from './VacationSpot.jsx';

const VacationList = ({vacationIdeas}) => (
  <div>
    {console.log(vacationIdeas)}
    {vacationIdeas.map((vacationIdea) => {
      return(
        <VacationSpot vacationIdea={vacationIdea} key={vacationIdea.id} />
      )}
    )}
  </div>
);

export default VacationList;

import React from 'react';
import PresentItem from './PresentItem.jsx';

const PresentList = ({vacationIdeas}) => (
  <div>
    {vacationIdeas.map((vacationIdea, vacation_id) => {
      return(
        <PresentItem vacationIdea={vacationIdea} key={vacation_id}/>
      )}
    )}
  </div>
);

export default PresentList;

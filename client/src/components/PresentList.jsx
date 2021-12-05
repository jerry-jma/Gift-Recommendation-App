import React from 'react';
import PresentItem from './PresentItem.jsx';

const PresentList = ({presents}) => (
  <div>
    {presents.map((present) => {
      return(
        <PresentItem present={present} key={present.id}/>
      )}
    )}
  </div>
);

export default PresentList;

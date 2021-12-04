import React, { useState } from 'react';
import VacationModal from './modal/VacationModal.jsx';

const AddDestination = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
      >
        Share Your Thoughts
      </button>
      {open && (<VacationModal setOpen={setOpen} />)}
    </div>
  );
};

export default AddDestination;
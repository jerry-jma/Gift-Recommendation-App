import React, { useState } from 'react';
import NewIdeaModal from './modal/NewIdeaModal.jsx';
import { AddOpinionButton } from './styles/Shared.style';

const AddNewIdea = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <AddOpinionButton
        onClick={() => setOpen(true)}
      >
        New Idea
      </AddOpinionButton>
      {open && (<NewIdeaModal setOpen={setOpen} />)}
    </div>
  );
};

export default AddNewIdea;
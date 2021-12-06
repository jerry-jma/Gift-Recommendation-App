import React, { useState } from 'react';
import ModalView from './modal/ModalView.jsx';
import { AddOpinionButton } from './styles/Shared.style';

const AddOpinion = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <AddOpinionButton
        onClick={() => setOpen(true)}
      >
        Share Your Thoughts
      </AddOpinionButton>
      {open && (<ModalView setOpen={setOpen} />)}
    </div>
  );
};

export default AddOpinion;
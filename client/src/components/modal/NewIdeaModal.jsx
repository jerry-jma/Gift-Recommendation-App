import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import NewIdeaForm from './NewIdeaForm.jsx';
import { ModalShadow, Modal } from '../styles/Modal.style.js';

const ModalView = ({setOpen}) => {
  const [newQuestion, setNewQuestion] = useState({
    question_body: '',
    asker_name: '',
    email: '',
    answers: {},
  });

  return (
    ReactDOM.createPortal(
      <>
      <ModalShadow />
      <Modal>
        <NewIdeaForm
          setNewQuestion={setNewQuestion}
          newQuestion={newQuestion}
          setOpen={setOpen}
        />
      </Modal>
    </>,
    document.getElementById('app-modal'),
    )
  )
};

export default ModalView;
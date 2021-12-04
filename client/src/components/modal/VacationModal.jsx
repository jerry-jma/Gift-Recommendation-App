import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import VacationForm from './VacationForm.jsx';
import { ModalShadow, Modal } from '../styles/Modal.style.js';

const VacationModal = ({setOpen}) => {
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
        <VacationForm
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

export default VacationModal;
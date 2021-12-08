import React from 'react';
import {
  Container1, LabelArea, LargeText, InputArea, Notes,
  SubmitInput, SubmitContainer, Title, SubTitle, TitleContainer, Exit,
} from '../styles/Modal.style';

const ModalForm = ({
  setOpen,
  newQuestion,
  setNewQuestion,
  handleAddQuestion,
}) => {
  const handleSumbit = (e) => {
    e.preventDefault();
    // handleAddQuestion(newQuestion);
    setOpen(false);
  };
  return (
    <form onSubmit={handleSumbit}>
      <TitleContainer>
        <Title>
          Share Your Idea
        </Title>
        <Exit onClick={() => setOpen(false)}>
          X
        </Exit>
      </TitleContainer>
      <Container1>
        <LabelArea htmlFor="tile">
          Add a Title
        </LabelArea>
        <InputArea
          id="tile"
          type="text"
          required
          maxlength="60"
          onChange={(e) => setNewQuestion({ ...newQuestion, name: e.target.value })}
        />
      </Container1>
      <Container1>
        <label for="newIdea">Choose an idea tag:</label>
        <select name="idea" id="newIdea">
            <option value="">--Please choose an option--</option>
            <option value="Vacation Idea">Vacation Idea</option>
            <option value="Presents idea">Presents idea</option>
            <option value="Romantic Meal Idea">Romantic Meal Idea</option>
        </select>
      </Container1>
      <Container1>
        <LabelArea htmlFor="nickname">
          Your nickname
        </LabelArea>
        <InputArea
          id="nickname"
          type="text"
          required
          maxlength="60"
          onChange={(e) => setNewQuestion({ ...newQuestion, name: e.target.value })}
        />
        <Notes>
          For privacy reasons, do not use your full name or email address
        </Notes>
      </Container1>
      <Container1>
        <LabelArea htmlFor="question">
          What's your idea for your special day?
        </LabelArea>
        <LargeText
          id="question"
          type="text"
          maxlength="1000"
          required
          onChange={(e) => setNewQuestion({ ...newQuestion, body: e.target.value })}
        />
      </Container1>
      <Container1>
        <LabelArea htmlFor="link">
          Where to read more about it, please provide link?
        </LabelArea>
        <InputArea
          id="link"
          type="text"
          required
          maxlength="500"
          onChange={(e) => setNewQuestion({ ...newQuestion, email: e.target.value })}
        />
      </Container1>
      <Container1>
        <LabelArea htmlFor="link">
        Please upload a revelant image
        </LabelArea>
        <InputArea
          id="link"
          type="file"
          accept="image/*"
          required
          onChange={(e) => setNewQuestion({ ...newQuestion, email: e.target.value })}
        />
      </Container1>
      <SubmitContainer>
        <SubmitInput
          type="submit"
          value="Submit"
        />
      </SubmitContainer>
    </form>
  );
};


export default ModalForm;
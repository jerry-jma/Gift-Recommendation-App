import React, { useState } from 'react';
import AddOpinion from './AddOpinion.jsx';
import AllDiscussions from './AllDiscussions.jsx';

import { Img, SectionContainer, ActionsContainer, Title, Actions, Discussions, Btn, Likes, Dislikes, ReadMore, ActNow, ProfilePic, DiscussionBody, UserContainer, userName, Anker } from './styles/Shared.style'

const VacationSpot = ({vacationIdea}) => {
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);

  const updateLikes = () => {
    if (!isLike) {
      setIsLike(true);
      vacationIdea.likes++;
    }
  }
  const updateDislikes = () => {
    if (!isDislike) {
      setIsDislike(true);
      vacationIdea.dislikes++;
    }
  }

  return (
    <SectionContainer >
      <Img src={vacationIdea.image} />
        <Title>
           <div>{vacationIdea.title}</div>
        </Title>
        <Actions>
          <ActionsContainer>
            <Likes onClick={updateLikes}>{`LIKE BY HER | ${vacationIdea.likes}`}</Likes>
            <Dislikes onClick={updateDislikes}>DISLIKE BY HER | {vacationIdea.dislikes}</Dislikes>
            <ReadMore>
                <Anker href={vacationIdea.moreDetails}>Read More</Anker>
            </ReadMore>
            <ActNow>
              <Anker href="https://www.tripadvisor.com/">Plan Your Trip NOW</Anker>
            </ActNow>
          </ActionsContainer>
        </Actions>
        <Discussions>
          {vacationIdea.discussions.map((discussion) => (
            <AllDiscussions discussion={discussion} key={discussion.discussion_id}/>
            )
          )}
          <AddOpinion />
        </Discussions>
    </SectionContainer>
  )
};

export default VacationSpot;

import React, { useState } from 'react';
import AddDestination from './AddDestination.jsx';
import VacationDiscussions from './VacationDiscussions.jsx';

import { Img, SectionContainer, ActionsContainer, Title, Actions, Discussions, Btn, Likes, Dislikes, ReadMore, ActNow, ProfilePic, DiscussionBody, UserContainer, userName } from './styles/Shared.style'

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
            <Likes onClick={updateLikes}>LIKE BY HER |  {vacationIdea.likes}</Likes>
            <Dislikes onClick={updateDislikes}>DISLIKE BY HER | {vacationIdea.dislikes}</Dislikes>
            <ReadMore>
                <a href={vacationIdea.moreDetails}>Read More</a>
            </ReadMore>
            <ActNow>
              <a href="https://www.tripadvisor.com/">Plan Your Trip NOW</a>
            </ActNow>
          </ActionsContainer>
        </Actions>
        <Discussions>
          {vacationIdea.discussions.map((discussion) => (
            <VacationDiscussions discussion={discussion} key={discussion.discussion_id}/>
            )
          )}
          <AddDestination />
        </Discussions>
    </SectionContainer>
  )
};

export default VacationSpot;

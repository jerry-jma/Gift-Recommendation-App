import React, { useState } from 'react';
import AddDestination from './AddDestination.jsx';
import VacationDiscussions from './VacationDiscussions.jsx';

import { Img, VacationContainer, ActionsContainer, VacationDetails, Location, Actions, Discussions, Btn, Likes, Dislikes, ReadMore, PlanNow, ProfilePic, DiscussionBody, UserContainer, userName } from './styles/Vacation.style'

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
    <VacationContainer >
      <Img src={vacationIdea.image} />
        <Location>
           <div>{vacationIdea.vacation_location}</div>
        </Location>
        <Actions>
          <ActionsContainer>
            <Likes onClick={updateLikes}>LIKE BY HER |  {vacationIdea.likes}</Likes>
            <Dislikes onClick={updateDislikes}>DISLIKE BY HER | {vacationIdea.dislikes}</Dislikes>
            <ReadMore>
                <a href={vacationIdea.moreDetails}>Read More</a>
            </ReadMore>
            <PlanNow>
              <a href="https://www.instagram.com/p/CXBz68moKyl/">Plan Your Trip NOW</a>
            </PlanNow>
          </ActionsContainer>
        </Actions>
        <Discussions>
          {vacationIdea.discussions.map((discussion) => (
            <VacationDiscussions discussion={discussion} key={discussion.discussion_id}/>
            )
          )}
          <AddDestination />
        </Discussions>
    </VacationContainer>
  )
};

export default VacationSpot;

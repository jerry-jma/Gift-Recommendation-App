import React, { useState } from 'react';
import PresentsDiscussions from './PresentsDiscussions.jsx'
import { Img, VacationContainer, ActionsContainer, VacationDetails, Location, Actions, Discussions, Btn, Likes, Dislikes, ReadMore, PlanNow, ProfilePic, DiscussionBody, UserContainer, userName } from './styles/Vacation.style';

const PresentItem = ({ present }) => {
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);

  const updateLikes = () => {
    if (!isLike) {
      setIsLike(true);
      present.likes++;
    }
  }
  const updateDislikes = () => {
    if (!isDislike) {
      setIsDislike(true);
      present.dislikes++;
    }
  }

  return (
    <VacationContainer >
      <Img src={present.image} />
        <Location>
           <div>{present.present_name}</div>
        </Location>
        <Actions>
          <ActionsContainer>
            <Likes onClick={updateLikes}>LIKE BY HER |  {present.likes}</Likes>
            <Dislikes onClick={updateDislikes}>DISLIKE BY HER | {present.dislikes}</Dislikes>
            <ReadMore>
                <a href={present.moreDetails}>Read More</a>
            </ReadMore>
            <PlanNow>
              <a href="https://www.instagram.com/p/CXBz68moKyl/">Plan Your Trip NOW</a>
            </PlanNow>
          </ActionsContainer>
        </Actions>
        <Discussions>
          {present.discussions.map((discussion) => (
            <PresentsDiscussions discussion={discussion} key={discussion.discussion_id}/>
            )
          )}
          {/* <AddDestination /> */}
        </Discussions>
    </VacationContainer>
  )
}

export default PresentItem;
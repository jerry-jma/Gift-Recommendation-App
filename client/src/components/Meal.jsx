import React, { useState } from 'react';
import AddOpinion from './AddOpinion.jsx';
import AllDiscussions from './AllDiscussions.jsx';

import { Img, SectionContainer, ActionsContainer, Title, Actions, Discussions, Btn, Likes, Dislikes, ReadMore, ActNow, ProfilePic, DiscussionBody, UserContainer, userName, Anker } from './styles/Shared.style';

const PresentItem = ({ meal }) => {
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);

  const updateLikes = () => {
    if (!isLike) {
      setIsLike(true);
      meal.likes++;
    }
  }
  const updateDislikes = () => {
    if (!isDislike) {
      setIsDislike(true);
      meal.dislikes++;
    }
  }

  return (
    <SectionContainer >
      <Img src={meal.image} />
        <Title>
           <div>{meal.title}</div>
        </Title>
        <Actions>
          <ActionsContainer>
            <Likes onClick={updateLikes}>LIKE BY HER |  {meal.likes}</Likes>
            <Dislikes onClick={updateDislikes}>DISLIKE BY HER | {meal.dislikes}</Dislikes>
            <ReadMore>
                <Anker href={meal.moreDetails}>Read More</Anker>
            </ReadMore>
            <ActNow>
              <Anker href="https://www.yelp.com/">Reserve NOW</Anker>
            </ActNow>
          </ActionsContainer>
        </Actions>
        <Discussions>
          {meal.discussions.map((discussion) => (
            <AllDiscussions discussion={discussion} key={discussion.discussion_id}/>
            )
          )}
          <AddOpinion />
        </Discussions>
    </SectionContainer>
  )
}

export default PresentItem;
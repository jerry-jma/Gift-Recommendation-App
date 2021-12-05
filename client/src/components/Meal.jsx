import React, { useState } from 'react';
import MealDiscussions from './MealDiscussions.jsx'
import { Img, SectionContainer, ActionsContainer, Title, Actions, Discussions, Btn, Likes, Dislikes, ReadMore, ActNow, ProfilePic, DiscussionBody, UserContainer, userName } from './styles/Shared.style';

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
                <a href={meal.moreDetails}>Read More</a>
            </ReadMore>
            <ActNow>
              <a href="https://www.yelp.com/">Reserve NOW</a>
            </ActNow>
          </ActionsContainer>
        </Actions>
        <Discussions>
          {meal.discussions.map((discussion) => (
            <MealDiscussions discussion={discussion} key={discussion.discussion_id}/>
            )
          )}
          {/* <AddDestination /> */}
        </Discussions>
    </SectionContainer>
  )
}

export default PresentItem;
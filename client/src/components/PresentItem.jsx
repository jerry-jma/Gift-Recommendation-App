import React, { useState } from 'react';
import AddOpinion from './AddOpinion.jsx';
import AllDiscussions from './AllDiscussions.jsx'
import { Img, SectionContainer, ActionsContainer, Title, Actions, Discussions, Btn, Likes, Dislikes, ReadMore, ActNow, ProfilePic, DiscussionBody, UserContainer, userName, Anker } from './styles/Shared.style';

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
    <SectionContainer >
      <Img src={present.image} />
        <Title>
           <div>{present.title}</div>
        </Title>
        <Actions>
          <ActionsContainer>
            <Likes onClick={updateLikes}>LIKE BY HER |  {present.likes}</Likes>
            <Dislikes onClick={updateDislikes}>DISLIKE BY HER | {present.dislikes}</Dislikes>
            <ReadMore>
                <Anker href={present.moreDetails}>Read More</Anker>
            </ReadMore>
            <ActNow>
              <Anker href={present.reference}>Purchase NOW</Anker>
            </ActNow>
          </ActionsContainer>
        </Actions>
        <Discussions>
          {present.discussions.map((discussion) => (
            <AllDiscussions discussion={discussion} key={discussion.discussion_id}/>
            )
          )}
          <AddOpinion />
        </Discussions>
    </SectionContainer>
  )
}

export default PresentItem;
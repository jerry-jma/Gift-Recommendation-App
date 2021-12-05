import React from 'react';
import { ProfilePic, DiscussionBody, UserContainer } from './styles/Shared.style';

const MealDiscussions = ({discussion}) => {
  return (
    <UserContainer>
      <ProfilePic src={discussion.userProfile} />
      <DiscussionBody>
        <span>
          {`${discussion.userName}: ${discussion.discussion_body}`}
        </span>
      </DiscussionBody>
   </UserContainer>
  )
}

export default MealDiscussions;
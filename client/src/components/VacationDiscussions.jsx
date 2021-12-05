import React from 'react';
import { ProfilePic, DiscussionBody, UserContainer } from './styles/Vacation.style';

const VacationDiscussions = ({discussion}) => {
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

export default VacationDiscussions;
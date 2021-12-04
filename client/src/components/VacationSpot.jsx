import React from 'react';
import AddDestination from './AddDestination.jsx'
import { Img, VacationContainer, VacationDetails, Location, Actions, Discussions, Btn } from './styles/VacationSpot.style'

const VacationSpot = ({vacationIdea}) => {

  return (
    <VacationContainer >
      <Img src={vacationIdea.image} />
        <Location>
           <div>{vacationIdea.vacation_location}</div>
        </Location>
        <Actions>
          <Btn>LIKE BY HER</Btn>
          {vacationIdea.likes}
          <Btn>DISLIKE BY HER</Btn>
          {vacationIdea.dislikes}
          <div>
              <a href="https://www.instagram.com/p/CXBz68moKyl/">Read More</a>
          </div>
          <div>
             <a href="https://www.instagram.com/p/CXBz68moKyl/">Plan Your Trip NOW</a>
          </div>
        </Actions>
        <Discussions>
          <div>
            {vacationIdea.discussion[0].discussion_body}
          </div>
          <div>
            {vacationIdea.discussion[0].discussion_replies[0].reply_body}
          </div>
          <AddDestination />
        </Discussions>
    </VacationContainer>
  )
};

export default VacationSpot;
{/*
// const vacation = [
//   {
//     vacation_id: 1,
//     vacation_location: "Italy",
//     asker_name: "marvelloushotels",
//     likes: 11,
//     dislikes: 1,
//     image: "images/somewhere.jpg",
//     moreDetails: "https://www.bbc.com/travel/article/20200603-hallstatt-austrias-tiny-village-with-10000-day-trippers",
//     discussion: [
//       {
//         discussion_id: 1,
//         discussion_body: "Life is either a daring adventure, or nothing at all✨",
//         discussion_replies: [
//           {
//             reply_id: 1,
//             reply_body: "Perfect click without any doubt.👍😍"
//           },
//           {
//             reply_id: 2,
//             reply_body: "Dream vacation 💙💙💙"
//           }
//         ]
//       }
//     ]
//   }, */}
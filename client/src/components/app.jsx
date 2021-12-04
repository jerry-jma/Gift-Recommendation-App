import React, { useState, useEffect } from 'react';
import VacationList from './VacationList.jsx'
import PresentList from './PresentList.jsx'
import { MasterContainer, Btn, Header } from './styles/app.style';


const App = () => {
  const [test, setTest] = useState(5);
  const [vacationIdeas, setVacationIdeas] = useState(vacation);

  return (
    <MasterContainer>
        <h1>HAPPY WIFE ? HAPPY LIFE : Vacation Presents Romantic Meals</h1>
        <VacationList vacationIdeas={vacationIdeas} />
        {/* <PresentList /> */}
    </MasterContainer>
  )
};

export default App;

const vacation = [
  {
    vacation_id: 1,
    vacation_location: "Italy",
    asker_name: "marvelloushotels",
    likes: 11,
    dislikes: 1,
    image: "images/somewhere.jpg",
    moreDetails: "https://www.bbc.com/travel/article/20200603-hallstatt-austrias-tiny-village-with-10000-day-trippers",
    discussion: [
      {
        discussion_id: 1,
        discussion_body: "Life is either a daring adventure, or nothing at all✨",
        discussion_replies: [
          {
            reply_id: 1,
            reply_body: "Perfect click without any doubt.👍😍"
          },
          {
            reply_id: 2,
            reply_body: "Dream vacation 💙💙💙"
          }
        ]
      }
    ]
  },
  {
    vacation_id: 2,
    vacation_location: "Bora Bora Resort",
    asker_name: "vacationsaddictive",
    likes: 32,
    dislikes: 1,
    image: "images/Bora Bora Resort.jpeg",
    discussion: [
      {
        discussion_id: 1,
        discussion_body: "Never a bad day out on the water, especially if you have good people, sun, salty water and some drinks!",
        discussion_replies: [
          {
            reply_id: 1,
            reply_body: "I'm happy at any of those!!!.👍😍"
          },
          {
            reply_id: 2,
            reply_body: "Good vibes happen on the tides. 🌊🤍"
          }
        ]
      }
    ]
  },
  {
    vacation_id: 2,
    vacation_location: "The magical village of Hallstatt in Austria ⛰",
    asker_name: "giuliogroebert",
    likes: 5,
    dislikes: 5,
    image: "images/The magical village of Hallstatt in Austria ⛰.jpeg",
    moreDetails: "https://www.bbc.com/travel/article/20200603-hallstatt-austrias-tiny-village-with-10000-day-trippers",
    discussion: [
      {
        discussion_id: 1,
        discussion_body: "Have you been here before? 🇦🇹",
        discussion_replies: [
          {
            reply_id: 1,
            reply_body: "I'm happy at any of those!!!.👍😍"
          },
          {
            reply_id: 2,
            reply_body: "Good vibes happen on the tides. 🌊🤍"
          }
        ]
      }
    ]
  }
]


        {/* {`Init Setup ${test}, ${vacation[0].asker_name}, ${vacation[0].discussion[0].discussion_body}`} */}
        {/* <a href="https://www.instagram.com/p/CXBz68moKyl/">Read More</a>
        <img src={vacation[2].image} width="320" height="320"/>
      <img src="images/Bora Bora Resort.jpeg" width="320" height="320"/> */}

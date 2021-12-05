import React, { useState, useEffect } from 'react';
import VacationList from './VacationList.jsx'
import PresentList from './PresentList.jsx'
import { MasterContainer, Btn, Header } from './styles/app.style';


const App = () => {
  const vacation = data.filter(info => info.tag === "vacations");
  const presentsData = data.filter(info => info.tag === "presents")

  const [test, setTest] = useState(5);
  const [vacationIdeas, setVacationIdeas] = useState(vacation);
  const [presents, setPresents] = useState(presentsData);

  const [isVacation, setIsVacation] = useState(false);
  const [isPresents, setIsPresents] = useState(false);
  const [isMeal, setIsMeal] = useState(false);

  const updateVacation = (e) => {
    setIsVacation(!isVacation);
     setIsPresents(false);
     setIsMeal(false);
  }
  const updatePresents = (e) => {
    setIsPresents(!isPresents);
    setIsVacation(false);
    setIsMeal(false);
  }
  const updateMeals = (e) => {
    setIsMeal(!isMeal)
     setIsVacation(false);
     setIsPresents(false);
  }

  return (
    <MasterContainer>
        <h1>HAPPY WIFE ? HAPPY LIFE : Vacation Presents Romantic Meals</h1>
        <Btn onClick={updateVacation}>
          Vacation Ideas
        </Btn>
        <Btn onClick={updatePresents}>
          Presents
        </Btn>
        <Btn onClick={updateMeals}>
          Romantic Meals
        </Btn>
        {isVacation && <VacationList vacationIdeas={vacationIdeas} />}
        {isPresents && <PresentList presents={presents}/>}
    </MasterContainer>
  )
};

export default App;

const data = [
  {
    id: 1,
    tag: "vacations",
    vacation_location: "Eiffel Tower | Paris",
    likes: 11,
    dislikes: 1,
    image: "images/Eiffel Tower | Paris.jpeg",
    moreDetails: "https://www.travelandleisure.com/attractions/landmarks-monuments/eiffel-tower-facts#:~:text=The%20Eiffel%20Tower%E2%80%94or%20as,the%20world's%20most%20recognizable%20landmarks.&text=The%20tower%20was%20built%20by,iron%20and%202.5%20million%20rivets.",
    discussions: [
      {
        discussion_id: 1,
        userName: "gigi_gallelli90",
        userProfile: "images/userProfiles/couple1.jpeg",
        discussion_body: "It doesn’t matter how many times you come to Paris, the Eiffel Tower never gets old 🥰",
      },
      {
        discussion_id: 2,
        userName: "2bags1van",
        userProfile: "images/userProfiles/pic2.jpeg",
        discussion_body: "this shot is so beautiful!! Love the reflection and haven’t seen this angle of the Eiffel Tower before 😍"
      }
    ]
  },
  {
    id: 2,
    tag: "vacations",
    vacation_location: "Bora Bora Resort",
    likes: 32,
    dislikes: 1,
    image: "images/Bora Bora Resort.jpeg",
    moreDetails: "https://www.bbc.com/travel/article/20200603-hallstatt-austrias-tiny-village-with-10000-day-trippers",
    discussions: [
      {
        discussion_id: 1,
        userName: "vacationsaddictive",
        userProfile: "images/userProfiles/p3.jpeg",
        discussion_body: "Never a bad day out on the water, especially if you have good people, sun, salty water and some drinks!"
      },
      {
        discussion_id: 2,
        userName: "maiorova3281",
        userProfile: "images/userProfiles/p4.jpeg",
        discussion_body: "Good vibes happen on the tides. 🌊🤍, I'm happy at any of those!!!.👍😍"
      }
    ]
  },
  {
    id: 3,
    tag: "vacations",
    vacation_location: "The magical village of Hallstatt in Austria ⛰",
    present_name: "",
    likes: 5,
    dislikes: 5,
    image: "images/The magical village of Hallstatt in Austria ⛰.jpeg",
    moreDetails: "https://www.bbc.com/travel/article/20200603-hallstatt-austrias-tiny-village-with-10000-day-trippers",
    sellerContact: "",
    discussions: [
      {
        discussion_id: 1,
        userName: "giuliogroebert",
        userProfile: "images/userProfiles/p5.jpeg",
        discussion_body: "Have you been here before? 🇦🇹"
      },
      {
        discussion_id: 2,
        userName: "pritima_trivedi6607❤️😍",
        userProfile: "images/userProfiles/p6.jpeg",
        discussion_body: "I'm happy at any of those!!!.👍😍"
      }
    ]
  },
  {
    id: 4,
    tag: "presents",
    vacation_location: "",
    present_name: "Chanel Classic Bag",
    likes: 11,
    dislikes: 1,
    image: "images/presents/Chanel Classic bag.jpeg",
    moreDetails: "https://www.chanel.com/us/fashion/collection/the-chanel-iconic/?gclid=Cj0KCQiA47GNBhDrARIsAKfZ2rAmSAf1SQlWljtniFqhYKMbVkC4Yke60t1xebMzMqN7Fo7MkhbbehsaAq7bEALw_wcB",
    sellerContact: "https://www.chanel.com",
    discussions: [
      {
        discussion_id: 1,
        userName: "gigi_gallelli90",
        userProfile: "images/userProfiles/couple1.jpeg",
        discussion_body: "It doesn’t matter how many times you come to Paris, the Eiffel Tower never gets old 🥰",
      },
      {
        discussion_id: 2,
        userName: "2bags1van",
        userProfile: "images/userProfiles/pic2.jpeg",
        discussion_body: "this shot is so beautiful!! Love the reflection and haven’t seen this angle of the Eiffel Tower before 😍"
      }
    ]
  },
  {
    id: 5,
    tag: "presents",
    vacation_location: "",
    present_name: "Chanel Classic Bag",
    likes: 11,
    dislikes: 1,
    image: "images/presents/Chanel Classic bag.jpeg",
    moreDetails: "https://www.chanel.com/us/fashion/collection/the-chanel-iconic/?gclid=Cj0KCQiA47GNBhDrARIsAKfZ2rAmSAf1SQlWljtniFqhYKMbVkC4Yke60t1xebMzMqN7Fo7MkhbbehsaAq7bEALw_wcB",
    sellerContact: "https://www.chanel.com",
    discussions: [
      {
        discussion_id: 1,
        userName: "gigi_gallelli90",
        userProfile: "images/userProfiles/couple1.jpeg",
        discussion_body: "It doesn’t matter how many times you come to Paris, the Eiffel Tower never gets old 🥰",
      },
      {
        discussion_id: 2,
        userName: "2bags1van",
        userProfile: "images/userProfiles/pic2.jpeg",
        discussion_body: "this shot is so beautiful!! Love the reflection and haven’t seen this angle of the Eiffel Tower before 😍"
      }
    ]
  }
]


        {/* {`Init Setup ${test}, ${vacation[0].asker_name}, ${vacation[0].discussion[0].discussion_body}`} */}
        {/* <a href="https://www.instagram.com/p/CXBz68moKyl/">Read More</a>
        <img src={vacation[2].image} width="320" height="320"/>
      <img src="images/Bora Bora Resort.jpeg" width="320" height="320"/> */}

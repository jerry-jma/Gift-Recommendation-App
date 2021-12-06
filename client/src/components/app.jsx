import React, { useState, useEffect } from 'react';
import VacationList from './VacationList.jsx';
import PresentList from './PresentList.jsx';
import MealList from './MealList.jsx';
import { Title, MasterContainer, IdeasContainer, IdeasSelector, Btn1, Btn2, Btn3, Header, Login, SignIn, SignUp } from './styles/app.style';


const App = () => {
  const vacation = data.filter(info => info.tag === "vacations");
  const presentsData = data.filter(info => info.tag === "presents");
  const mealsData = data.filter(info => info.tag === "meals");

  const [test, setTest] = useState(5);
  const [vacationIdeas, setVacationIdeas] = useState(vacation);
  const [presents, setPresents] = useState(presentsData);
  const [meals, setMeals] = useState(mealsData);
  const [isVacation, setIsVacation] = useState(false);
  const [isPresents, setIsPresents] = useState(false);
  const [isMeal, setIsMeal] = useState(false);

  const retrieveData = () => {
    fetch('/happywife')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  const postToAPI = (data) => {
    fetch('/happywife', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(() => this.retrieveData())
  }

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
    <div>
      <Title>HAPPY WIFE HAPPY LIFE</Title>
      <Login>
        <SignIn>Sign in</SignIn>
        <SignUp>Sign up</SignUp>
      </Login>
      <MasterContainer>
          <IdeasSelector>
            <Btn1 onClick={updateVacation}>
              Vacation Ideas
            </Btn1>
            <Btn2 onClick={updatePresents}>
              Presents
            </Btn2>
            <Btn3 onClick={updateMeals}>
              Romantic Meals
            </Btn3>
          </IdeasSelector>
          <IdeasContainer>
            {isVacation && <VacationList vacationIdeas={vacationIdeas} />}
            {isPresents && <PresentList presents={presents}/>}
            {isMeal && <MealList meals={meals}/>}
          </IdeasContainer>
      </MasterContainer>
    </div>
  )
};

export default App;

const data = [
  {
    id: 1,
    tag: "vacations",
    title: "Eiffel Tower | Paris",
    likes: 11,
    dislikes: 1,
    image: "images/Eiffel Tower | Paris.jpeg",
    moreDetails: "https://www.travelandleisure.com/attractions/landmarks-monuments/eiffel-tower-facts#:~:text=The%20Eiffel%20Tower%E2%80%94or%20as,the%20world's%20most%20recognizable%20landmarks.&text=The%20tower%20was%20built%20by,iron%20and%202.5%20million%20rivets.",
    reference: "https://www.chanel.com",
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
        userProfile: "images/userProfiles/p3.jpeg",
        discussion_body: "this shot is so beautiful!! Love the reflection and haven’t seen this angle of the Eiffel Tower before 😍"
      }
    ]
  },
  {
    id: 2,
    tag: "vacations",
    title: "Bora Bora Resort",
    likes: 32,
    dislikes: 1,
    image: "images/Bora Bora Resort.jpeg",
    moreDetails: "https://www.marriott.com/hotels/travel/bobxr-the-st-regis-bora-bora-resort/",
    reference: "https://www.chanel.com",
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
    title: "The magical village of Hallstatt in Austria ⛰",
    likes: 5,
    dislikes: 5,
    image: "images/The magical village of Hallstatt in Austria ⛰.jpeg",
    moreDetails: "https://www.bbc.com/travel/article/20200603-hallstatt-austrias-tiny-village-with-10000-day-trippers",
    reference: "",
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
    title: "Chanel Classic Bag",
    likes: 18,
    dislikes: 3,
    image: "images/presents/g3.png",
    moreDetails: "https://www.chanel.com/us/fashion/collection/the-chanel-iconic/?gclid=Cj0KCQiA47GNBhDrARIsAKfZ2rAmSAf1SQlWljtniFqhYKMbVkC4Yke60t1xebMzMqN7Fo7MkhbbehsaAq7bEALw_wcB",
    reference: "https://www.chanel.com",
    discussions: [
      {
        discussion_id: 1,
        userName: "gigi_gallelli90",
        userProfile: "images/userProfiles/p7.jpeg",
        discussion_body: "It doesn’t matter how many times you come to Paris, the Eiffel Tower never gets old 🥰",
      },
      {
        discussion_id: 2,
        userName: "2bags1van",
        userProfile: "images/userProfiles/p8.jpeg",
        discussion_body: "this shot is so beautiful!! Love the reflection and haven’t seen this angle of the Eiffel Tower before 😍"
      }
    ]
  },
  {
    id: 5,
    tag: "presents",
    title: "Trunk full of flowers",
    likes: 30,
    dislikes: 3,
    image: "images/presents/g7.jpeg",
    moreDetails: "https://www.lgn666.com/community/liwu/97867",
    reference: "https://www.lgn666.com/community/liwu/97867",
    discussions: [
      {
        discussion_id: 1,
        userName: "azucardecoracoes",
        userProfile: "images/userProfiles/p10.jpeg",
        discussion_body: "Wishing I got better pictures but check out this beautiful piece ✨ All arrangements are customizable from size to style! Don’t forget to place your order with time 🖤",
      },
      {
        discussion_id: 2,
        userName: "2bags1van",
        userProfile: "images/userProfiles/p11.jpeg",
        discussion_body: "Stunning must say! Sooo beautiful, something about florals that does it for me"
      }
    ]
  },
  {
    id: 6,
    tag: "presents",
    title: "Birthday Balloons Gift",
    likes: 11,
    dislikes: 5,
    image: "images/presents/g5.jpg",
    moreDetails: "https://www.instagram.com/p/CWRphPOp6ot/",
    reference: "https://www.instagram.com/azucardecoracoes/",
    discussions: [
      {
        discussion_id: 1,
        userName: "azucardecoracoes",
        userProfile: "images/userProfiles/p12.jpeg",
        discussion_body: "Olá tudo bem? Nos chame no link q está na bio pf.",
      },
      {
        discussion_id: 2,
        userName: "2bags1van",
        userProfile: "images/userProfiles/p3.jpeg",
        discussion_body: "uma festa intimista pra comemorar em grande estilo , 15 anos masculino ! isso mesmo 15 anos masculino com uma paleta de cor perfeita "
      }
    ]
  },
  {
    id: 7,
    tag: "meals",
    title: "ULTIMATE PRIVATE DINING EXPERIENCE | The Sarojin, Khao Lak, Thailand",
    likes: 11,
    dislikes: 5,
    image: "images/meals/m2.jpeg",
    moreDetails: "https://theromantictourist.com/news/9-most-romantic-dinners-around-the-world-romantic-restaurants-destination-dining",
    reference: "https://www.instagram.com/azucardecoracoes/",
    discussions: [
      {
        discussion_id: 1,
        userName: "gigi_gallelli90",
        userProfile: "images/userProfiles/p13.jpeg",
        discussion_body: "Hay amores tan bellos que justifican todas las locuras que hacen cometer. Plutarco .",
      },
      {
        discussion_id: 2,
        userName: "veladaparados",
        userProfile: "images/userProfiles/p15.jpeg",
        discussion_body: "Buenos días con gusto te podemos dar más detalles de nuestras experiencias, mándanos DM y con gusto te atendemos "
      }
    ]
  },
  {
    id: 8,
    tag: "meals",
    title: "The Gangleader's girl✔️",
    likes: 11,
    dislikes: 5,
    image: "images/meals/m1.jpeg",
    moreDetails: "https://thekitchencommunity.org/romantic-dinner-ideas/",
    reference: "https://thekitchencommunity.org/romantic-dinner-ideas/",
    discussions: [
      {
        discussion_id: 1,
        userName: "destination_foodpix",
        userProfile: "images/userProfiles/p16.jpeg",
        discussion_body: "THE PHOTO OF THE DAY ⭐November⭐02⭐2021⭐",
      },
      {
        discussion_id: 2,
        userName: "at_kates_home",
        userProfile: "images/userProfiles/p17.jpeg",
        discussion_body: "I was sittin on this place in September…😂"
      }
    ]
  },
  {
    id: 9,
    tag: "meals",
    title: "Muraka at Mirihi Island Resort",
    likes: 11,
    dislikes: 5,
    image: "images/meals/m3.jpeg",
    moreDetails: "https://travelaway.me/dining-locations-maldives/",
    reference: "https://www.instagram.com/azucardecoracoes/",
    discussions: [
      {
        discussion_id: 1,
        userName: "azucardecoracoes",
        userProfile: "images/userProfiles/p18.jpeg",
        discussion_body: "Olá tudo bem? Nos chame no link q está na bio pf.",
      },
      {
        discussion_id: 2,
        userName: "2bags1van",
        userProfile: "images/userProfiles/p19.jpeg",
        discussion_body: "uma festa intimista pra comemorar em grande estilo , 15 anos masculino ! isso mesmo 15 anos masculino com uma paleta de cor perfeita "
      }
    ]
  }
]

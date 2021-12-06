import styled from 'styled-components';

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(8, 12.5%);
  align-items: center;
  padding: 10px;
`;

export const Img = styled.img`
  grid-column: 1 / span 3;
  grid-row: 1 / span 8;
  width: 320px;
  height: 240px;
  justify-content: start;
  border-radius: 5%
`;

export const Title = styled.div`
  grid-column: 4 / span 7;
  grid-row: 1 / span 1;
  font-size: 16px;
  font-weight: bold;
  // padding: 10px;
  // margin: 10px;
  border-top: black solid 1px;
`;

export const Actions = styled.div`
  grid-column: 4 / span 7;
  grid-row: 2 / span 1;
  // border-bottom: black solid 1px;
`;

export const ActionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  justify-items: center;
  place-self: center;
`;

export const Likes = styled.button`
  grid-column: 1 / span 1;
  justify-self: start;
  font-size: 15px;
  font-family: 'Luckiest Guy', cursive;
  padding: 3px;
  color: #48E09C;
  border: 1px solid black;
  border-radius:20px;
  margin: 5px;
  cursor: pointer;
  &:hover {
     background:#016ABC;
     color: #fff;
     border:1px solid #eee;
     border-radius:20px;
     box-shadow:5px 5px 5px #eee;
     text-shadow: none;
  }
`;

export const Dislikes = styled.button`
  grid-column: 2 / span 1;
  padding: 3px;
  font-size: 15px;
  font-family: 'Luckiest Guy', cursive;
  color: #48E09C;
  border: 1px solid black;
  border-radius:20px;
  margin: 5px;
  cursor: pointer;
  &:hover {
     background:#016ABC;
     color: #fff;
     border:1px solid #eee;
     border-radius:20px;
     box-shadow:5px 5px 5px #eee;
     text-shadow: none;
  }
`;
export const ReadMore = styled.div`
  grid-column: 3 / span 1;
  border: black solid 1px;
  font-weight: 500;
  padding: 3px;
  color: #48E09C;
  border-radius:20px;
  margin: 5px;
  cursor: pointer;
  &:hover {
     background:#016ABC;
     color: #fff;
     border:1px solid #eee;
     border-radius:20px;
     box-shadow:5px 5px 5px #eee;
     text-shadow: none;
  }
`;

export const ActNow = styled.div`
  grid-column: 4 / span 1;
  border: black solid 1px;
  font-weight: 500;
  padding: 3px;
  color: #48E09C;
  border-radius:20px;
  margin: 5px;
  cursor: pointer;
  &:hover {
     background:#016ABC;
     color: #fff;
     border:1px solid #eee;
     border-radius:20px;
     box-shadow:5px 5px 5px #eee;
     text-shadow: none;
  }
`;
export const Anker = styled.a`
  text-decoration: none !important;
  color: inherit;
`;

export const Discussions = styled.div`
  grid-column: 4 / span 7;
  grid-row: 3 / span 6;
  // border-top: black solid 1px;
  // justify-self: start;
`;

export const DiscussionsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 20%)
`;

export const UserContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 12.5%);
  justify-contents: center;
  align-items; center;
`;

export const ProfilePic = styled.img`
  grid-column: 1 / span 1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export const DiscussionBody = styled.div`
  grid-column: 2 / span 7;
`;

export const Btn = styled.button`
  cursor: pointer;
  border: hidden;
  padding: 0px 8px 0px 0px;
  font-weight: bold;
  color: #32a1ce;
  &:hover {
    color: blue;
  }
`;

export const AddOpinionButton = styled.button`
  font-size:11px;
  font-family: 'Luckiest Guy', cursive;
  padding: 5px;
  color: black;
  border: 2px solid black;
  border-radius:20px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background:#48E09C;
    color: #fff;
    border:1px solid #eee;
    border-radius:20px;
    box-shadow:5px 5px 5px #eee;
    text-shadow: none;
  }
`;

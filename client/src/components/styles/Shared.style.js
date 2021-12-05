import styled from 'styled-components';

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(8, 12.5%);
  align-items: center;
  padding: 10px;
  border: black solid 1px;
`;

export const Img = styled.img`
  grid-column: 1 / span 1;
  grid-row: 1 / span 8;
  width: 320px;
  height: 240px;
  justify-content: start;
  border-radius: 5%
`;

export const Title = styled.div`
  grid-column: 3 / span 3;
  grid-row: 1 / span 1;
  border: black solid 1px;
`;

export const Actions = styled.div`
  grid-column: 3 / span 3;
  grid-row: 2 / span 1;
  border: black solid 1px;
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
  cursor: pointer;
  border: hidden;
  padding: 0px 8px 0px 0px;
  font-weight: bold;
  color: #32a1ce;
  &:hover {
    color: blue;
  }
`;
export const Dislikes = styled.button`
  grid-column: 2 / span 1;
  cursor: pointer;
  border: hidden;
  padding: 0px 8px 0px 0px;
  font-weight: bold;
  color: #32a1ce;
  &:hover {
    color: blue;
  }
`;
export const ReadMore = styled.div`
  grid-column: 3 / span 1;
  border: black solid 1px;
`;
export const ActNow = styled.div`
  grid-column: 4 / span 1;
  border: black solid 1px;
`;

export const Discussions = styled.div`
  grid-column: 3 / span 3;
  grid-row: 3 / span 6;
  border: black solid 1px;
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

export const Opinion = styled.div`

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


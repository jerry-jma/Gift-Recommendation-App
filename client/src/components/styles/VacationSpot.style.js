import styled from 'styled-components';

export const VacationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(4, 25%);
  padding: 10px;
`;

export const Img = styled.img`
  grid-column: 1 / span 1;
  grid-row: 1 / span 4;
  width: 320px;
  height: 240px;
  justify-content: start
`;

export const Location = styled.div`
  grid-column: 3 / span 3;
  grid-row: 1 / span 1;
  border: black solid 1px;
  // align-self:start;
  // justify-self: start;
`;

export const Actions = styled.div`
  grid-column: 3 / span 3;
  grid-row: 2 / span 1;
  border: black solid 1px;
`;

export const ActionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%)
  // justify-content: center;
`;

export const Likes = styled.button`
  grid-column: 1 / span 1;
`;
export const Dislikes = styled.button`
  grid-column: 2 / span 1;
`;
export const ReadMore = styled.div`
  grid-column: 3 / span 1;
`;
export const PlanNow = styled.div`
  grid-column: 4 / span 1;
`;

export const Discussions = styled.div`
  grid-column: 3 / span 3;
  grid-row: 3 / span 2;
  border: black solid 1px;
  // justify-self: start;
`;

export const DiscussionsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 20%)
  // justify-content: center;
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


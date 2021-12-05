import styled from 'styled-components';

export const Title = styled.header`
  text-align: center;
  // font-wight: bold;
`;
export const MasterContainer = styled.div`
  display: grid;
  border: 5px solid #FFFF00;
  // text-align: center;
  // margin-left: 10%;
  // margin-right: 10%;
  grid-template-columns: repeat(8, 12.5%);
  // grid-template-rows: repeat(8, 12.5%);
`;
  export const IdeasSelector = styled.div`
    grid-column: 1 / span 1;
  `;

  export const IdeasContainer = styled.div`
    grid-column: 2 / span 7;
  `;

  export const Btn = styled.button`
    display: flex;
  `;
  export const Header = styled.div`
    padding: 10px;
  `;
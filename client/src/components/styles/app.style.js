import styled from 'styled-components';

export const Title = styled.header`
  text-align: center;
  min-height: 50px;
  font-size: 48px;
  font-family: 'Luckiest Guy', cursive;
  padding-top: 1%;
  background-color: #48E09C;
  color: black;
  // opacity: 0.6;
`;
export const MasterContainer = styled.div`
  display: grid;
  // border: 5px solid #FFFF00;
  // margin-left: 10%;
  // margin-right: 10%;
  grid-template-columns: repeat(8, 12.5%);
  // grid-template-rows: repeat(8, 12.5%);
  min-height: 710px;
  // max-height: 666px;
  // overflow-y: auto;
`;
  export const IdeasSelector = styled.div`
    grid-column: 1 / span 1;
    display: grid;
    grid-template-rows: repeat(10, 10%);
  `;

  export const IdeasContainer = styled.div`
    grid-column: 2 / span 7;
  `;

  export const Btn1 = styled.button`
    grid-row: 1 / span 2;
    font-size: 19px;
    font-family: 'Luckiest Guy', cursive;
    padding: 25px;
    font-size: 1em;
    color: #48E09C;
    border: 2px solid black;
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
  export const Btn2 = styled.button`
    grid-row: 4 / span 2;
    font-size: 19px;
    font-family: 'Luckiest Guy', cursive;
    padding: 25px;
    font-size: 1em;
    color: #48E09C;
    border: 2px solid black;
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
  export const Btn3 = styled.button`
    grid-row: 7 / span 2;
    font-size: 19px;
    font-family: 'Luckiest Guy', cursive;
    padding: 25px;
    font-size: 1em;
    color: #48E09C;
    border: 2px solid black;
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
  export const Login = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 10%);
    background-color: #48E09C;
  `;
  export const SignIn = styled.button`
    grid-column: 9 / span 1;
    font-size: 15px;
    font-family: 'Luckiest Guy', cursive;
    margin: 5px;
    border-radius: 20px;
    cursor: pointer;
  `;
  export const SignUp = styled.button`
    grid-column: 10 / span 1;
    font-size: 15px;
    font-family: 'Luckiest Guy', cursive;
    margin: 5px;
    border-radius: 20px;
    cursor: pointer;
  `;
  export const AddIdeaButton = styled.button`
    grid-column: 1 / span 1;
    justify-self: end;
    align-self: center;
    font-size: 11px;
    font-family: 'Luckiest Guy', cursive;
    margin-bottom: 3%;
    border-radius: 20px;
    cursor: pointer;
  `;

  export const Header = styled.div`
    padding: 10px;
  `;

  export const HomeScreen = styled.img`
    height: 81%;
    width: 97%;
    margin-left: 2%;
    margin-top: 1%;
  `;
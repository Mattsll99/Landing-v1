import React from 'react'; 
import styled from 'styled-components';

function LogoBox() {
  return (
    <Container>
      <Circle1 src="../assets/SUSHI.png"/>
      <Circle2 src="../assets/ApeCoin2.png"/>
      <Circle3 src="../assets/dai logo.png"/>
      <Circle4 src="../assets/AAVE.png"/>
      <Circle5 src="../assets/COMP.png"/>
      <Circle6 src="../assets/USDC logo.png"/>
      <Circle7 src="../assets/UNI.png"/>
      <Points>...</Points>
    </Container>
  )
}

export default LogoBox

const Container = styled.div`
  height: 100px; 
  width:100%;
  background: transparent;
  border: solid 4px #C78080;
  background: #515050;
  display:flex; 
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  @media(max-width:700px) {
    width: 70%;
  }
`;

const Circle1 = styled.img`
  //height: 40px; 
  //width: 40px;
  height: 3vw; 
  width: auto;
  background: transparent;
  animation: floating 4s ease-in-out infinite;
  @media(max-width:700px) {
    height: 6vw; 
    width: auto;
  }
  @keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 10px); }
    100%   { transform: translate(0, -0px); } 
  }*/
`;

const Circle2 = styled.img`
  //height: 40px; 
  //width: 40px; 
  height:3vw; 
  width: auto;
  background: transparent;
  animation: secondFloating 4s ease-in-out infinite;
  @media(max-width:700px) {
    height: 6vw; 
    width: auto;
  }
  @keyframes secondFloating {
    0% {transform: translate(0, 0px);}
    50%  { transform: translate(0, -10px); }
    100% {transform: translate(0,  -0px); }
  }*/
`;

const Circle3 = styled(Circle1)``;

const Circle4 = styled(Circle2)``;

const Circle5 = styled(Circle1)``;

const Circle6 = styled(Circle2)``;

const Circle7 = styled(Circle1)``;

const Points = styled.text`
  color: #C78080;
  font-weight: 500;
  background: transparent;

`;


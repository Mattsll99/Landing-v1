import React from 'react'
import styled from 'styled-components'

function Staking() {
  return (
    <Container>
      <Left>
        <Description>Staked SYLIX</Description>
        <Number>1,252</Number>
      </Left>
      <Right>
        <Box>
          <Description2>A.P.R.</Description2>
          <Number2>18%</Number2>
        </Box>
      </Right>
    </Container>
  )
}

export default Staking

const Container = styled.div`
  height: 25%; 
  width: 100%; 
  background: #515050;
  display:flex; 
  flex-direction: row;
  @media(max-width:900px) {
    width: 50%;
    height:52%;
    flex-direction: column;
    //background: blue;
    width: 50%;
  }
`;

const Left = styled.div`
  height: 100%; 
  width:55%;
  background: transparent;
  display:flex; 
  flex-direction: column;
  padding: 10px;
  @media(max-width: 900px) {
    height: 60%;
    //flex-direction: row;
    padding: 5px;
    width: 100%;
  }
`;

const Right = styled.div`
  height: 100%; 
  width:45%;
  padding:10px;

  background: transparent;
  @media(max-width:900px) {
    width: 100%;
    padding: 10px;
  }
`;

const Box = styled.div`
  height: 100%; 
  width: 100%; 
  background: #F2D5B0;
  display: flex; 
  flex-direction: column;
  //padding-left: 5px;
  @media(max-width:900px) {
    flex-direction: row;
    padding: 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media(max-width:700px) {
    display:flex; 
    justify-content: space-between;
    margin-top: -10px;
  }
`;

const Description = styled.text`
  background: transparent;
  font-weight: 200; 
  //font-size: 17px;
  font-size: 1vw;
  color: #A5A5A5;
  @media(max-width: 900px) {
    font-size: 1.6vw;
  }
  @media(max-width: 700px) {
    font-size: 2.5vw;
  }
`; 

const Description2 = styled.text`
  background: transparent;
  font-weight: 300; 
  //font-size: 17px;
  font-size: 1vw;
  color: #515050;
  @media(max-width:900px) {
    font-size: 1.5vw;
  }
  @media(max-width:700px) {
    font-size: 18px;
  }
`; 

const Number = styled.text`
  background: transparent;
  font-weight: 400; 
  //font-size: 35px;
  font-size: 2.5vw;
  margin-top: -5px;
  color: #F2D5B0;
  @media(max-width:900px) {
    font-size: 2.9vw;
    margin-top: 1px;
  }
  @media(max-width: 700px) {
    font-size: 25px;
  }
`;

const Number2 = styled.text`
  background: transparent;
  font-weight: 400; 
  //font-size: 30px;
  font-size: 2.2vw;
  margin-top: -5px;
  color: #515050;
  margin-left: 15px;
  @media(max-width: 900px) {
    margin:0;
    font-size: 3vw;
  }
  @media(max-width:700px) {
    font-size: 25px;
  }
`;
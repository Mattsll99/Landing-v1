import React from 'react'
import styled from 'styled-components'

function ShareBox({volatile, stable, name, shares, apr}) {
  return (
    <Container>
      <Top>
        <Volatile src={volatile}/>
        <Stable src={stable}/>
        <Name>{name}</Name>
      </Top>
      <Bottom>
        <Left>
          <Title>Shares</Title>
          <Data>{shares}</Data>
        </Left>
        <Right>
          <Title>A.P.R.</Title>
          <Data>{apr}</Data>
        </Right>
      </Bottom>
    </Container>
  )
}

export default ShareBox

const Container = styled.div`
  height: 100%; 
  width: 49%;
  background: transparent;
  border: solid 3px #F0E9D9;
  padding: 5px;
`;

const Top = styled.div`
  width: 100%; 
  height: 30%; 
  background: transparent;
  display:flex; 
  flex-direction: row;
  @media(max-width:700px) {
    position: relative;
  }
`;

const Bottom = styled.div`
  height: 65%; 
  width: 100%;
  display: flex; 
  flex-direction: row;
  background: transparent;
`;

const Left = styled.div`
  height:100%;
  width: 50%; 
  display:flex; 
  flex-direction: column;
  background: transparent;
  align-items: center;
`; 

const Right = styled(Left)`
  border-left: solid 1px #D9D9D9;
`;

const Volatile = styled.img`
  height: 20px; 
  width: 20px; 
  background: transparent;
`; 

const Stable = styled(Volatile)`
  position: absolute; 
  //right: 42px;
  margin-left: 15px;
`;

const Name = styled.text`
  background: transparent;
  font-weight: 100; 
  //font-size: 14px;
  font-size: 1vw;
  //margin-left: 20px;
  margin-left: 1.3vw;
  @media(max-width:900px) {
    font-size: 1.7vw;
  }
  @media(max-width: 700px) {
    font-size: 2.5vw;
    position: absolute; 
    right: 23%;
    margin-left: auto; 
    margin-right: auto;
  }
`;

const Title = styled.text`
  background: transparent;
  font-weight: 300;
  color: #A5A5A5;
  font-size: 1.2vw;
  @media(max-width:900px) {
    font-size: 2vw;
  }
  @media(max-width:700px) {
    font-size: 3vw;
  }
`; 

const Data = styled.text`
  background: transparent;
  font-weight: 200;
  margin-top: 10px;
  //font-size: 25px;
  font-size: 1.3vw;
  @media(max-width: 900px) {
    font-size: 2.5vw;
    margin-top: 0;
  }
  @media(max-width:700px) {
    font-size: 4vw;
  }
`;
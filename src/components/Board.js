import React from 'react'
import styled from "styled-components"
import Menu from './Menu';

function Board() {
  return (
    <Container>
      <UpperWrap>
        <MenuWrap>
        <Title1>Volume</Title1>
        <Title2>T.V.L.</Title2>
        <Title3>A.P.R.</Title3>
        </MenuWrap>
      </UpperWrap>
      <Menu 
      stable = "../assets/USDC logo.png" 
      volatile = "../assets/CRV.png"
      name="CRVxUSDC"
      volume="$52,432,693" 
      tvl="$225,469,943" 
      apr="13%"/>
      <Menu 
      stable = "../assets/dai logo.png"
      volatile = "../assets/AAVE.png"
      name="AAVExDAI" 
      volume="$33,720,342" 
      tvl="$134,229,603" 
      apr="17%"/>
      <Menu 
      stable="../assets/FRAX logo.png"
      volatile="../assets/COMP.png"
      name="COMPxFRAX" 
      volume="$24,337,854" 
      tvl="$90,169,909" 
      apr="15%"/>
      <Menu 
      stable="../assets/LUSD.png"
      volatile="../assets/ApeCoin2.png"
      name="APExLUSD" 
      volume="$23,573,774" 
      tvl="$244,117,563" 
      apr="16%"/>
      <Menu 
      stable="../assets/BUSD.png"
      volatile="../assets/UNI.png"
      name="UNIxBUSD" 
      volume="$19,388,467" 
      tvl="$295,259,346" 
      apr="8%"/>
    </Container>
  )
}

export default Board

const Container = styled.div`
  height: 40vh; 
  width: 100%;
  background: #515050;
  padding-left: 20px; 
  padding-right: 20px;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  @media(max-width:840px) {
    display:flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
`;

const UpperWrap = styled.div`
  width: 100%; 
  height: 60px; 
  background: transparent;
  display:flex; 
  //justify-content: space-between; 
  align-items: center;
  justify-content: center;
`;

const Title1 = styled.text`
  background: transparent;
  font-weight: 300;
`;

const Title2 = styled(Title1)`
  @media(max-width: 1100px) {
    display: none;
  }
`;

const Title3 = styled(Title1)``;

const MenuWrap = styled.div`
  width: 50%; 
  display:flex; 
  justify-content: space-between;
  background: transparent;
  @media(max-width: 1100px) {
    width: 40%;
  }
  @media(max-width: 840px) {
    display: none;
  }
`;
import React from 'react'; 
import styled from "styled-components"

function Stabilization() {
  return (
    <Container>
      <LimitedBlock>
        <LimitedText>1 SYLI</LimitedText>
      </LimitedBlock>
      <Line>
        <Block1><Text>1 SYLI =</Text></Block1>
        <Block2 style={{backgroundColor: "#FF007A"}}><Text>0.037 UNI</Text></Block2>
        <Block2 style={{backgroundColor: "#2775CA"}}><Text>+0.620 USDC</Text></Block2>
        <Block4><Text style={{color: "#515050"}}>+0.041 SYLIX</Text></Block4>
      </Line>
      <Line>
      <Block1><Text>1 SYLI =</Text></Block1>
        <Block2 style={{backgroundColor: "#2EBAC6"}}><Text>0.0017 AAVE</Text></Block2>
        <Block2 style={{backgroundColor: "#FFCD45"}}><Text>+0.853 DAI</Text></Block2>
        <Block4><Text style={{color: "#515050"}}>+0.028 SYLIX</Text></Block4>
      </Line>
      <Line>
      <Block1><Text>1 SYLI =</Text></Block1>
        <Block2 style={{backgroundColor: "#0E0CF5"}}><Text>0.352 APE</Text></Block2>
        <Block2 style={{backgroundColor: "#000"}}><Text>+0.572 FRAX</Text></Block2>
        <Block4><Text style={{color: "#515050"}}>+0.0455 SYLIX</Text></Block4>
      </Line>
    </Container>
  )
}

export default Stabilization

const Container = styled.div`
  height: 100%; 
  width: 75%;
  background: #515050;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

const LimitedBlock = styled.div`
  height: 100%; 
  width: 100%; 
  z-index: 2; 
  background: transparent;
  display:none;
  border: solid 4px #FFFFFF;
  text-align: center;
  @media(max-width: 1020px) {
    display:flex;
    justify-content: center;
    align-items: center;
  }
`; 

const LimitedText = styled.text`
  margin-top: 10px; 
  margin-bottom: auto;
  color: blue;
  font-size: 5vw;
  font-weight: 400;
  background: transparent;
  color: #FFFFFF;
  @media(max-width: 700px) {
    font-size: 8vw;
  }
`;

const Line = styled.div`
  width:100%; 
  height: 28%;
  background: transparent;
  display:flex; 
  flex-direction: row; 
  justify-content: space-between;
  @media(max-width: 1020px) {
    display: none;
  }
`;

const Block1 = styled.div`
  height: 100%; 
  width: 24%; 
  display:flex; 
  justify-content: center; 
  align-items: center;
  background: transparent; 
  border: solid 2px #FFFFFF;
  @media(max-width: 1020px) {
    display: none;
  }
`;

const Block2 = styled(Block1)`
  border: none;
  @media(max-width: 1020px) {
    display: none;
  }
`;


const Block4 = styled(Block1)`
  border: none; 
  background: #FFFFFF;
  color: #515050;
  @media(max-width: 1020px) {
    display: none;
  }
`;



const Text = styled.text`
  font-size: 1vw; 
  background: transparent; 
  font-weight: 300;

`;
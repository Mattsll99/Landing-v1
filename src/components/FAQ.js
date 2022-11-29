import React, {useState} from 'react'
import styled from 'styled-components'
import Liquidation from './Liquidation';
import Locked from './Locked';
import Mint from './Mint';
import Redeem from './Redeem';
import Rewards from './Rewards';

//https://bobbyhadz.com/blog/react-show-element-on-hover

function FAQ() {

  const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }

  const [isHovering2, setIsHovering2] = useState(false);

  const handleMouseOver2 = () => {
    setIsHovering2(true);
  }

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  }

  const [isHovering3, setIsHovering3] = useState(false); 

  const handleMouseHover3 = () => {
    setIsHovering3(true);
  }

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  }

  const [isHovering4, setIsHovering4] = useState(false);

  const handleMouseHover4 = () => {
    setIsHovering4(true);
  }

  const handleMouseOut4 = () => {
    setIsHovering4(false);
  }

  const [isHovering5, setIsHovering5] = useState(false);

  const handleMouseHover5 = () => {
    setIsHovering5(true);
  }

  const handleMouseOut5 = () => {
    setIsHovering5(false);
  }

  return (
    <Container>
      <Title>FAQ</Title>
      <Wrapper>
        <Subtitle onMouseOver={handleMouseOver} onMouseOut= {handleMouseOut}>How to mint SYLI?</Subtitle>
        {isHovering && <Mint />}
        <Subtitle onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}>How to redeem SYLI?</Subtitle>
        {isHovering2 && <Redeem />}
        <Subtitle onMouseOver={handleMouseHover3} onMouseOut={handleMouseOut3}>Can my funds be locked?</Subtitle>
        {isHovering3 && <Locked />}
        <Subtitle onMouseOver={handleMouseHover4} onMouseOut={handleMouseOut4}>Can I be liquidated?</Subtitle>
        {isHovering4 && <Liquidation />}
        <Subtitle onMouseOver={handleMouseHover5} onMouseOut={handleMouseOut5}>How do rewards work?</Subtitle>
        {isHovering5 && <Rewards />}
      </Wrapper>
    </Container>
  )
}

export default FAQ

const Container = styled.div`
  width: 100%; 
  height: 75%;
  margin-top: 10px;
  background: transparent;
  border: solid 10px #515050;
  padding: 5px;
  overflow-x: scroll;
  @media(max-width:900px) {
    height: 52%;
    margin-top: 0;
    margin-left: 10px;
  }
`;

const Title = styled.text`
  background: transparent;
  font-size: 30px;
  color: #515050;
  font-weight: 500;
`;

const Wrapper = styled.div`
  margin-top: 10px; 
  width: 100%;
  height: 70%;
  background: transparent;
  display:flex; 
  flex-direction: column;
  text-align: start;
  justify-content: space-between;
`;

const Subtitle = styled.text`
  background: transparent;
  color: #515050;
  font-size: 15px;
  margin-top: 5px;
  font-weight: 400;
  cursor: pointer;
  &:hover {color: #FFFFFF;};
`;
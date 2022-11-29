import React, {useState} from 'react'
import styled from "styled-components"
import Close from "./Close";

function Mint() {

 /* const [active, setActive] = useState(true);

  function closeItem() {
    setActive(false);
  }

  function openItem() {
    setActive(true);
  }*/

  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);


  return (
    <Container>
      <Wrapper onClick={toggleMenu}>
      <Sentence>Choose a pool. The protocol will calculate the amount to provide for each token to match the exact price.</Sentence>
      <SecondWrapper>
        <ThirdWrapper>
          <Left>
            <Title>Mint</Title>
            <Amount>100 SYLI</Amount>
            <Amount2>(=$100)</Amount2>
          </Left>
          <Right>
            <Title>Provide</Title>
            <Panel>
              <Amount>0.02 ETH</Amount>
            </Panel>
            <Panel>
              <Amount>72.8 USDC</Amount>
            </Panel>
            <Panel>
              <Amount>14 SYLIX</Amount>
            </Panel>
            <Button>
              <Text>Validate</Text>
            </Button>
          </Right>
        </ThirdWrapper>
      </SecondWrapper>
      </Wrapper>
    </Container>
  )
}

export default Mint

const Container = styled.div`
  z-index:2; 
  height: 50vh; 
  width: 50vw; 
  position: absolute;
  left:0; 
  right: 0;
  margin-left: auto; 
  margin-right: auto;
  top:20%;
  display:flex; 
  justify-content: center; 
  align-items: center;
  padding: 10px;
  background: transparent;
  /*background: rgba( 255, 255, 255, 0.15 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 7px );
  -webkit-backdrop-filter: blur( 7px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );*/
  overflow: hidden ;
  @media(max-width:700px) {
    top: 120%;
    width: 70vw
  }
`;

const Button = styled.div`
  height: 30px;
  width: 120px;
  margin-top: 10px;
  background: #FFFFFF;
  display: flex; 
  justify-content: center;
  align-items: center;
`;

const Text = styled.text`
  background: transparent; 
  color: #515050;
  font-weight: 300;
`;

const Wrapper = styled.div`
  height: 50vh; 
  width:50vh; 
  background: #F2D5B0;
  border: solid 10px #515050;
  padding: 10px;
  display:flex; 
  flex-direction: column; 
  justify-content: space-between;
`;

const Sentence = styled.text`
  position: relative;
  background: transparent;
  font-size:14px;
  color: #515050;
  font-weight: 400;
`;

const SecondWrapper = styled.div`
  height: 75%; 
  width: 100%;
  background: #515050;
  padding-top: 30px; 
  padding-bottom: 30px; 
  padding-left:20px; 
  padding-right:20px;
`;

const ThirdWrapper = styled.div`
  height:100%;
  width:100%; 
  background: transparent; 
  border: solid 3px #FFFFFF;
  display:flex;
  flex-direction: row;
  padding: 15px;
`;

const Left = styled.div`
  height:100%; 
  width: 40%; 
  background: transparent;
  border-right: solid 3px #FFFFFF;
  display:flex; 
  flex-direction: column;
`;

const Right = styled.div`
  background: transparent;
  padding-left: 10px;
  display:flex; 
  flex-direction: column;
  height: 100%; 
  width: 60%;
`;

const Title = styled.text`
  background: transparent;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 15px;
`;

const Amount = styled.text`
  background: transparent; 
  font-size: 18px; 
  font-weight:300;
`;

const Amount2 = styled.text`
  background: transparent; 
  font-size: 12px; 
  font-weight: 200;
  color: #8A8A8A;
`; 

const Panel = styled.div`
  width: 100%; 
  height: 35px;
  background: transparent;
  border-bottom: solid 1px #FFFFFF;
`;

//https://bobbyhadz.com/blog/react-onclick-show-component
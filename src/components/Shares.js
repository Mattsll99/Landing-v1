import React from 'react'; 
import styled from "styled-components"
import ShareBox from './ShareBox';

function Shares() {
  return (
    <Container>
      <Cover>
      <Title>Shares</Title>
      </Cover>
      <Wrapper>
      <Panel1>
        <ShareBox 
          volatile = "../assets/CRV.png"
          stable="../assets/USDC logo.png"
          name="CRVxUSDC pool"
          shares="0.722%"
          apr="13%"
        />
        <ShareBox
          volatile= "../assets/ApeCoin2.png"
          stable="../assets/BUSD.png"
          name="APExBUSD pool"
          shares="0.094%"
          apr="9%"
        />
      </Panel1>
      <Panel2>
        <ShareBox 
          volatile="../assets/AAVE.png"
          stable = "../assets/FRAX logo.png"
          name="AAVExFRAX pool"
          shares="1.765%"
          apr="11%"
        />
        <ShareBox 
          volatile="../assets/SUSHI.png"
          stable="../assets/LUSD.png"
          name="SUSHIxLUSD pool"
          shares="0.048%"
          apr="14%"
        />
      </Panel2>
      </Wrapper>
    </Container>
  )
}

export default Shares

const Container = styled.div`
  height: 100%; 
  width: 100%; 
  background: #515050;
  padding: 10px;
  display:flex; 
  flex-direction: column;
  justify-content: space-between;
`; 

const Title = styled.text`
  background: transparent;
  //font-size: 40px;
  font-size: 3vw;
  font-weight: 400;
  color: #515050;
  margin-bottom: 15px;
  @media(max-width: 900px) {
    font-size: 4vw;
  }
`;

const Panel1 = styled.div`
  width: 100%; 
  //height: 35;
  //height: 105px;
  height: 13vh;
  display: flex; 
  flex-direction: row;
  background: transparent;
  display:flex;
  justify-content: space-between;
  margin-top: 10px;
`; 

const Panel2 = styled(Panel1)`
  @media(max-width:900px) {
    display: none;
  }
`;

const Cover = styled.div`
  background: #F2D5B0;
`;

const Wrapper  = styled.div`
  background: transparent;
  height: auto;
  background: transparent;
  display:flex;
  flex-direction: column;
`;
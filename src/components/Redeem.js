import React from 'react'
import styled from 'styled-components'

function Redeem() {
  return (
    <Container>
      <Wrapper>
        <Text>Same principle as for minting. Give back the amount of SYLI that you want, the protocol gives you back the exact amount of volatile, stable and SYLIX collaterals that match the price.</Text>
      </Wrapper>
    </Container>
  )
}

export default Redeem

const Container = styled.div`
  position: absolute; 
  height: auto; 
  width: auto;
  z-index: 2;
  display: flex; 
  justify-content: center;
  align-items: center;
  background: transparent;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  top: 40%;
  @media(max-width:700px) {
    top: 120%;
    width: 70vw
    height: 50px;
  }
`;

const Wrapper = styled.div`
  width: 420px; 
  height: 150px;
  background: #F2D5B0;
  border: solid 10px #515050;
  padding: 10px;
`; 

const Text = styled.text`
  background: transparent;
  color: #515050;
  font-weight: 300;
  font-size: 16px;
`;
import React from 'react'
import styled from 'styled-components'
import Close from './Close';

function Rewards() {
  return (
    <Container>
      <Wrapper>
        <Text>When you mint SYLI from a pool, you get shares of this pool. Each day you receive yields based on this.</Text>
      </Wrapper>
    </Container>
  )
}

export default Rewards

const Container = styled.div`
  position: absolute; 
  height: auto; 
  width: auto;
  z-index: 2;
  display: flex; 
  justify-content: center;
  align-items: center;
  background: transparent;
  top: 40%; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  @media(max-width:700px) {
    top: 130%;
    
  }
`;

const Wrapper = styled.div`
  width: 50vh; 
  height: 15vh;
  background: #F2D5B0;
  border: solid 10px #515050;
  padding: 10px;
  @media(max-width:700px) {
    height: 120px;
  }
`; 

const Text = styled.text`
  background: transparent;
  color: #515050;
  font-weight: 300;
`;
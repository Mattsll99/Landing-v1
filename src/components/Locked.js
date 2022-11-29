import React from 'react'; 
import styled from 'styled-components'

function Locked() {
  return (
    <Container>
      <Wrapper>
        <Text>No. All your positions are fully liquid.</Text>
      </Wrapper>
    </Container>
  )
}

export default Locked

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
    top: 130%;
    width: 70vw
  }
`;

const Wrapper = styled.div`
  background: #F2D5B0;
  border: solid 10px #515050;
  padding: 10px;
  width: 420px; 
  height: 120px;
`; 

const Text = styled.text`
  background: transparent;
  color: #515050;
  font-weight: 300;
`;
import React from 'react'
import styled from 'styled-components'

function Close() {
  return (
    <Container>
      <Line></Line>
      <Line2></Line2>
    </Container>
  )
}

export default Close

const Container = styled.div`
  height: 50px; 
  width: 50px;
  position: absolute;
  right: 30vw;
  top: 30vh;
  background: #F2D5B0;
  border: solid 5px #515050;
  display: flex; 
  justify-content: center; 
  align-items: center;
`;

const Line = styled.div`
  height 35px; 
  width: 5px;
  background: #515050;
  transform: rotate(45deg);
`; 

const Line2 = styled(Line)`
  transform: rotate(-45deg);
  position: absolute;
`;
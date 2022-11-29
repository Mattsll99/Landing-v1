import React from 'react'
import styled from 'styled-components'

function Menu({stable, volatile,  name, volume, tvl, apr}) {
  return (
    <Container>
      <MenuBox>
        <StableLogo src = {stable}/>
        <VolatileLogo src= {volatile}/>
        <Name>{name}</Name>
      </MenuBox>
      <Wrapper>
      <MenuBox>
        <Volume>{volume}</Volume>
      </MenuBox>
      <MenuBox>
        <Volume2>{tvl}</Volume2>
      </MenuBox>
      <MenuBox>
        <Volume3>{apr}</Volume3>
      </MenuBox>
      </Wrapper>
      <MenuBox>
        <Button>
          <Exchange>Mint SYLI</Exchange>
        </Button>
      </MenuBox>
    </Container>
  )
}

export default Menu

const Container = styled.div`
  width: 100%; 
  height: 50px; 
  background: transparent;
  border-top: solid 3px #F0E9D9;
  display:flex; 
  flex-direction: row;
  @media(max-width: 840px) {
    justify-content: center;
  }
`;

const MenuBox = styled.div`
  height: 100%; 
  width: 20%;
  background: transparent;
  display:flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: center;
  @media(max-width:840px) {
    width:100%;
  }
`;

const SYLILogo = styled.img`
  height:35px;
  width:35px;
  background: transparent;
`; 

const StableLogo = styled.img`
  height: 18px;
  width: 18px;
  background: transparent;
  //position: absolute;
  left: 58px;
  top: 95px;
  @media(max-width: 840px) {
    height: 25px; 
    width: 25px;
  }
`; 

const VolatileLogo = styled.img`
  height:18px; 
  width: 18px;
  background: transparent;
  z-index: 1;
  margin-left: -7px;
  @media(max-width: 840px) {
    height: 25px; 
    width: 25px;
  }
`;

const Name = styled.text`
  font-size: 13px; 
  background: transparent;
  font-weight: 200;
  margin-left: 10px;
  color: #F0E9D9;
  @media(max-width: 840px) {
    font-size: 20px;
    font-weight: 300;
    //margin-left:0;
    //position: fixed;
    //right: 200px;
  }
`;

const Volume = styled.text`
  background: transparent;
  font-weight: 200;
  color: #F0E9D9;
  /*@media(max-width: 840px) {
    display: none;
  }*/
`;

const Volume2 = styled(Volume)`
  @media(max-width: 1210px) {
    margin-left: 20px;
  }
  @media(max-width: 1100px) {
    display: none;
  }
`;

const Volume3 = styled(Volume)`
  background: transparent;
  font-weight: 200;
  color: #F0E9D9;
`;

const Button = styled.div`
  height: 30px; 
  width: 120px; 
  background: #F0E9D9;
  border: solid 2px #F0E9D9;
  display:flex; 
  align-items: center;
  justify-content: center;
  position: absolute; 
  right: 30px;
  @media(max-width: 840px) {
    right: 40px;
  }
`;

const Exchange = styled.text`
  background: transparent;
  font-weight: 400;
  color: #515050;
`;

const Wrapper = styled.div`
  margin-left: 30px;
  width: 50%;
  background: transparent;
  display:flex; 
  flex-direction: row;
  justify-content: space-between;
  @media(max-width: 1100px) {
    margin-left: 60px;
    width: 30%;
  }
  @media(max-width: 840px) {
    display: none;
  }
`;
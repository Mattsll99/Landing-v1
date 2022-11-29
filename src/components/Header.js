import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <Logo src="../assets/Logo.png"/>
      <Link href='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c4f40ab8-1e71-4639-9c30-891b6da0f578/SYLIUM-DAO-Whitepaper.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221129T153419Z&X-Amz-Expires=86400&X-Amz-Signature=069c0b2e6a080ad91d2ce754224d294c07c368e787463428f23b6f6d076d16ff&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22SYLIUM-DAO-Whitepaper.pdf%22&x-id=GetObject'>
      <Wrapper>
        <Text>Whitepaper</Text>
      </Wrapper>
      </Link>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 15vh; 
  width: 100%; 
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  @media(max-width: 840px) {
    height: 13vh;
  }
  @media(max-width:700px) {
  }
`;

const Logo = styled.img`
  height: 60px; 
  width: 60px; 
  background: transparent;
`;

const Wrapper = styled.div`
  height: 45px; 
  width: 150px; 
  background: #515050;
  display: flex; 
  align-items: center; 
  justify-content: center;
  &:hover {background: #C78080;};
  cursor: pointer;
  
`; 

const Text = styled.text`
  background: transparent;
  font-size: 20px;
  font-weight: 400;
`;

const Link = styled.a`
  background: transparent;
  text-decoration: none;
`; 
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Board from './components/Board';
import Stabilization from './components/Stabilization';
import Shares from './components/Shares';
import Staking from './components/Staking';
import FAQ from './components/FAQ';
import LogoBox from './components/LogoBox';


function App() {
  return (
    <Container>
      <LeftSection>
        <Header />
        <FirstSectionLeft>
          <TitleWrap>
            <Title>Solving the stablecoin trilemma</Title>
          </TitleWrap>
          <Introduction>SYLIUM introduces SYLI, the first dynamically-backed and market-driven stablecoin</Introduction>
        </FirstSectionLeft>
        <SecondSectionLeft>
          <Left>
            <TitleWrap>
            <Subtitle>Decentralized</Subtitle>
            </TitleWrap>
            <SubText>Mathematically designed to receive any token as collateral</SubText>
          </Left>
          <Right>
          <TitleWrap>
            <Subtitle>Capital efficient</Subtitle>
          </TitleWrap>
          <SubText>Users can mint SYLI at a 1:1 ratio, with a wide range of volatile and stable tokens</SubText>
          </Right>
        </SecondSectionLeft>
        <ThirdSectionLeft>
          <SecondLeft>
            <TopLeft>
            <TitleWrap>
            <Subtitle>Robust</Subtitle>
            </TitleWrap>
            <SubText>Built on an on-chain risk management protocol, SYLI is designed to be resilient</SubText>
            </TopLeft>
            <BottomLeft>
              <Link href='https://github.com/Mattsll99/SYLIUM-DAO'><Logo src="../assets/githubLogo.png"/></Link>
            </BottomLeft>
          </SecondLeft>
          <SecondRight>
            <Wrap>
          <TitleWrap>
            <Subtitle>Transparent</Subtitle>
            </TitleWrap>
            <SubText>Depending on how you minted your SYLI, you know at any moment what is backing it</SubText>
            </Wrap>
            <LogoBox />
          </SecondRight>
        </ThirdSectionLeft>
      </LeftSection>
      <RightSection>
        <Board />
        <Wrapper>
          <Stabilization />
          <Result>
            <Dollar>=$1</Dollar>
          </Result>
        </Wrapper>
        <LastWrap>
          <LastLeft>
            <Shares />
          </LastLeft>
          <LastRight>
            <Staking />
            <FAQ />
          </LastRight>
        </LastWrap>
      </RightSection>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh; 
  width: 100vw;
  display: flex; 
  flex-direction: row;
  @media(max-width:700px) {
    flex-direction: column;
    height: auto;
  }
`;

const Link = styled.a`
  background: transparent;
`;

const WrappAll = styled.div`
  height:50%;
  background: red;
`;

const LeftSection = styled.div`
  height: 100%; 
  width: 50%;
  overflow: scroll;
  @media(max-width:700px) {
    width: 100%;
  }
  //position: fixed;
`;

const RightSection = styled.div`
  height: 100%; 
  width: 50%;
  background: #F2D5B0;
  border-left: solid 5px #515050;
  //position: fixed;
  right: 0;
  display:flex; 
  flex-direction: column;
  padding: 10px;
  overflow-y: hidden;
  @media(max-width:700px) {
    width: 100%;
    border: solid 10px #515050;
  }
`;

const FirstSectionLeft = styled.div`
  width: 100%; 
  height: 25vh;
  border-top: solid 5px #515050;
  padding: 5px;
  @media(max-width: 945px) {
    height: 20vh;
  }
  @media(max-width: 927px) {
    height: 25vh;
  }
  @media(max-width:700px) {
    height: auto;
  }
`;

const TitleWrap = styled.div`
  //display:flex; 
  //align-items: center; 
  //justify-content: center;
  background: #C78080;
  //width: auto;
  text-align: start;
  //display: inline-block;
  //display: inline-block;
  padding: 5px;
`;

const Title = styled.text`
  background: transparent;
  //font-size: 35px;
  font-size: 2.5vw;
  font-weight: 500;
  color: #F0E9D9;
  @media(max-width: 925px) {
    font-size:3vw;
  }
  @media(max-width: 700px) {
    font-size: 35px;
  }
`;

const Introduction = styled.text`
  margin-top: 5px;
  display:flex; 
  text-align: start; 
  //font-size: 30px;
  font-size: 1.8vw;
  color: #515050;
  background: transparent;
  font-weight: 500;
  @media(max-width: 945px) {
    font-size: 20px;
  }
`;

const SecondSectionLeft = styled.div`
  width: 100%; 
  height: 20vh; 
  background: green;
  display: flex; 
  flex-direction: row;
  @media(max-width: 945px) {
    height: 25vh;
  }
  @media(max-width:926px) {
    height: 21vh;
  }
  @media(max-width: 840px) {
    flex-direction: column;
    height: 30vh;
  }
`; 

const Left = styled.div`
  height: 100%; 
  width: 40%; 
  border-top: solid 5px #515050;
  border-right: solid 5px #515050;
  padding: 5px;
  display:flex;
  flex-direction: column;
  @media(max-width: 840px) {
    width: 100%;
    border-right: none;
    
  }
`;

const Subtitle = styled.text`
  font-size: 2vw;
  background: transparent;
  color: #F0E9D9;
  font-weight:500;
  @media(max-width: 925px) {
    font-size: 22px;
  }
`;

const SubText = styled.text`
  font-size: 20px;
  color: #515050;
  font-weight: 500;
  //font-size: 2.5vh;
  font-size: 18px;
  @media(max-width: 1000px) {
    font-size: 16px;
  }
`;

const Right = styled.div`
  height: 100%; 
  width: 60%; 
  border-top: solid 5px #515050;
  padding: 5px;
  @media(max-width: 840px) {
    width: 100%;
    height: 600px;
  }
  @media(max-width:700px) {
    height: auto;
  }
`; 

const ThirdSectionLeft = styled.div`
  width: 100%;
  height: 40vh;
  background: red;
  display: flex; 
  flex-direction: row;
  @media(max-width: 840px) {
    flex-direction: column;
  }
`;

const SecondLeft = styled.div`
  height: 100%; 
  width: 40%; 
  //display:flex; 
  flex-direction: column;
  @media(max-width: 840px) {
    width: 100%;
  }
`; 

const TopLeft = styled.div`
  width: 100%; 
  height:80%;
  border-top: solid 5px #515050;
  border-right: solid 5px #515050;
  padding: 5px;
  @media(max-width: 840px) {
    border-right: none;
  }
`;

const BottomLeft = styled.div`
  height: 20%; 
  width: 100%; 
  background: #515050;
  display:flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
  @media(max-width: 840px) {
    display: none;
  }
`;

const Logo = styled.img`
  //height: 40px; 
  //width:40px;
  height:3vw; 
  width: auto;
  background: transparent;
  cursor: pointer;
  &:hover {background: #C78080;};
  border-radius: 40px;
`;

const SecondRight = styled.div`
  height: 100%; 
  width: 60%; 
  border-top: solid 5px #515050;
  padding: 5px;
  display:flex; 
  flex-direction:column; 
  justify-content: space-between;
  @media(max-width: 840px) {
    width: 100%;
  }
  @media(max-width: 700px) {
    align-items: center;
  }
`;

const Wrap = styled.div``;

const Result = styled.div`
  height: 100%;
  width: 165px;
  margin-left: 10px;
  background: #C78080;
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

const Dollar = styled.text`
  background: transparent;
  font-size: 70px;
  font-weight: 400;
  color: #F2D5B0;
`;

const Wrapper = styled.div`
  width:100%;
  height: 15vh; 
  background: transparent;
  margin-top: 10px;
  display:flex; 
  flex-direction: row
`;

const LastWrap = styled.div`
  width: 100%; 
  height: 40vh; 
  background: transparent;
  margin-top: 10px;
  display: flex; 
  flex-direction: row;
  @media(max-width:900px) {
    flex-direction: column;
    height: 40vh;
  }
`;

const LastLeft = styled.div`
  height: 100%; 
  width: 60%; 
  background: transparent;
  @media(max-width: 900px) {
    width: 100%;
  }
`; 

const LastRight = styled.div`
  height: 100%; 
  width: 40%;
  display:flex;
  flex-direction: column;
  background: transparent;
  margin-left: 10px;
  @media(max-width: 900px) {
    width: 100%;
    flex-direction: row;
    //justify-content: center; 
    padding-top: 10px;
    //padding-bottom:10px;
    height: 100%;
    margin-left:0;
  }
`;
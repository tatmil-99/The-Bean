import styled from "styled-components";
import Nav from "./Nav";

const Home = () => {
  return (
    <HomeDiv>
      <Nav />
      Home component
    </HomeDiv>
  );
}

const HomeDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export default Home;

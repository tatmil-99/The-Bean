import styled from "styled-components";

const Home = () => {
  return (
    <HomeDiv>
      Home component
    </HomeDiv>
  );
}

// STYLING FOR HOMEDIV CONTAINER
const HomeDiv = styled.div`
  height: 100vh;
  width: 100vw;
  /* display: flex;
  flex-direction: column;  */
  background-color: #B9B7BD;
  opacity: .3;
`;

export default Home;

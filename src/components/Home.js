import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTitle } from '../actions/cardActions'


const Home = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.stateReducer.items);
  console.log(title[0].title)

  return (
    <HomeDiv>
      {/* {title.map((data) => (<h4>{data[0].title}</h4>))} */}
  
    </HomeDiv>
  );
}

// STYLING FOR HOMEDIV CONTAINER
const HomeDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column; 
  background-color: #B9B7BD;
  opacity: .3;
`;

export default Home;

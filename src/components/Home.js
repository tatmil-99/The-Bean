import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTitle } from '../actions/cardActions'
import { Title } from "@material-ui/icons";


const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.stateReducer.items);
  
  return (
    <HomeDiv>
      {<DataDiv>
          <h4>{items[0].title}</h4><br></br>
          <pd>{items[0].description}</pd>
          <p>{items[0].ingredients[0]}</p>
       </DataDiv>
      }
  
    </HomeDiv>
  );
}

// STYLING FOR HOMEDIV CONTAINER
const HomeDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap; 
  background-color: #B9B7BD;
  opacity: .5;
`;

const DataDiv = styled.div`
  background-color: #EEEDE7;
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 60%;
  width: 30%;
  margin: 40px;
  padding: 20px;
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, .5);
  letter-spacing: 3px;
  box-shadow: 0px 12px 16px -5px rgb(0 0 0 / 80%);
  
  pd {
    text-indent: 25px;
  }

  &:hover {
    border: 2px solid rgba(0, 0, 0, .8);
  }
`;


export default Home;

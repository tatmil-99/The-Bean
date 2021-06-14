import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTitle, addBeans } from '../actions/cardActions'
import { Title } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.stateReducer.items);
  
  return (
    <HomeDiv>
      {<DataDiv0>
          <h4>{items[0].title}</h4><br></br>
          <pd>{items[0].description}</pd>
          <p>{items[0].ingredients[0]}</p>
          <h3 onClick={() => dispatch({type: "ADD_ROBUSTA", payload: items[0].title})}><AddCircleIcon /></h3>
       </DataDiv0>       }
      {<DataDiv1>
          <h4>{items[1].title}</h4><br></br>
          <pd>{items[1].description}</pd>
          <p>{items[1].ingredients[0]}</p>
          <h3 onClick={() => dispatch({type: "ADD_EXCELSA", payload: items[1].title})}><AddCircleIcon /></h3>
       </DataDiv1>
      }
      {<DataDiv2>
          <h4>{items[2].title}</h4><br></br>
          <pd>{items[2].description}</pd>
          <p>{items[2].ingredients[0]}</p>
          <h3 onClick={() => dispatch({type: "ADD_LIBERICA", payload: items[2].title})}><AddCircleIcon /></h3>
       </DataDiv2>
      }
      {<DataDiv3>
          <h4>{items[3].title}</h4><br></br>
          <pd>{items[3].description}</pd>
          <p>{items[3].ingredients[0]}</p>
          <h3 onClick={() => dispatch({type: "ADD_ARABICA", payload: items[3].title})}><AddCircleIcon /></h3>
       </DataDiv3>
      }
  
    </HomeDiv>
  );
}

// STYLING FOR HOMEDIV CONTAINER
const HomeDiv = styled.div`
  /* height: 100vh; */
  /* width: 100vw; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap; 
  background-color: #B9B7BD;
  opacity: .5;
  
`;

const DataDiv0 = styled.div`
  background-color: #EEEDE7;
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-height: 65%;
  min-height: 65%;
  width: 30%;
  margin: 40px;
  padding: 20px;
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, .5);
  letter-spacing: 3px;
  box-shadow: 0px 12px 16px -5px rgb(0 0 0 / 80%);
  overflow: hidden;

  h4 {
    margin-bottom: 40px;
  }

  h3 {
    margin-bottom: 0;

    &:active {
      color: rgba(0, 0, 0, .8);
    }
  }
  
  pd {
    text-indent: 25px;
  }

  p {
    margin-bottom: 30px;
  }

  &:hover {
    border: 2px solid rgba(0, 0, 0, .8);
  }

  @media (max-width: 768px) {
    min-width: 80%;
  }
  
`;

const DataDiv1 = styled.div`
  background-color: #EEEDE7;
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-height: 65%;
  min-height: 65%;
  width: 30%;
  margin: 40px;
  padding: 20px;
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, .5);
  letter-spacing: 3px;
  box-shadow: 0px 12px 16px -5px rgb(0 0 0 / 80%);
  overflow: hidden;

  h4 {
    margin-bottom: 40px;
  }

  h3 {
    margin-bottom: 0;

    &:active {
      color: rgba(0, 0, 0, .8);
    }
  }

  p {
    margin-bottom: 30px;
  }
  
  pd {
    text-indent: 25px;
  }

  &:hover {
    border: 2px solid rgba(0, 0, 0, .8);
  }

  @media (max-width: 768px) {
    min-width: 80%;
  }

`;

const DataDiv2 = styled.div`
  background-color: #EEEDE7;
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-height: 65%;
  min-height: 65%;
  width: 30%;
  margin: 40px;
  padding: 20px;
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, .5);
  letter-spacing: 3px;
  box-shadow: 0px 12px 16px -5px rgb(0 0 0 / 80%);
  overflow: hidden;

  h4 {
    margin-bottom: 40px;
  }

  h3 {
    margin-bottom: 0;

    &:active {
      color: rgba(0, 0, 0, .8);
    }
  }

  p {
    margin-bottom: 30px;
  }
  
  pd {
    text-indent: 25px;
  }

  &:hover {
    border: 2px solid rgba(0, 0, 0, .8);
  }

  @media (max-width: 768px) {
    min-width: 80%;
  }
`;

const DataDiv3 = styled.div`
  background-color: #EEEDE7;
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 65%;
  max-height: 65%;
  width: 30%;
  margin: 40px;
  padding: 20px;
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, .5);
  letter-spacing: 3px;
  box-shadow: 0px 12px 16px -5px rgb(0 0 0 / 80%);
  overflow: hidden;

  h4 {
    margin-bottom: 40px;
  }

  h3 {
    margin-bottom: 0;

    &:active {
      color: rgba(0, 0, 0, .8);
    }
  }

  p {
    margin-bottom: 30px;
  }
  
  pd {
    text-indent: 25px;
  }

  &:hover {
    border: 2px solid rgba(0, 0, 0, .8);
  }

  @media (max-width: 768px) {
    min-width: 80%;
  }
`;

// const IconDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   align-items: flex-end;
// `;

export default Home;

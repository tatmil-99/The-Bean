import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Cart = () => {
  const robustaBeans = useSelector(state => state.cartReducer.items1);
  const excelsaBeans = useSelector(state => state.cartReducer.items2);
  const libericaBeans = useSelector(state => state.cartReducer.items3);
  const arabicaBeans = useSelector(state => state.cartReducer.items4);

  const dispatch = useDispatch();

  const allBeans = [robustaBeans, excelsaBeans, libericaBeans, arabicaBeans];

  const renderBeans = (bean) => {
    switch (true) {
      case bean == robustaBeans:
        let beanTypeRobusta = robustaBeans[0];
        let beanQtyRobusta = robustaBeans.length;

        if (beanQtyRobusta > 0) {
          return (
            <ItemDiv0>
              <h3>
                {beanTypeRobusta}: <RemoveCircleIcon onClick={() => 
                  dispatch({type: "REMOVE_ROBUSTA"})} />
                {beanQtyRobusta} <AddCircleIcon onClick={() =>
                  dispatch({type: "ADD_ROBUSTA", 
                  payload: (state) => {state.items1.push(state.items1[0])}})} />
              </h3>
            </ItemDiv0>
          );
        } 
        break;

      case bean == excelsaBeans:
        let beanTypeExcelsa = excelsaBeans[0];
        let beanQtyExcelsa = excelsaBeans.length;
  
        if (beanQtyExcelsa > 0) {
          return (
            <ItemDiv1>
              <h3>
                {beanTypeExcelsa}: <RemoveCircleIcon onClick={() => 
                  dispatch({type: "REMOVE_EXCELSA"})} />
                {beanQtyExcelsa} <AddCircleIcon onClick={() =>
                    dispatch({type: "ADD_EXCELSA", 
                    payload: (state) => {state.items2.push(state.items2[0])}})} />
              </h3>
            </ItemDiv1>
          );
        }
        break; 

      case bean == libericaBeans:
        let beanTypeLiberica = libericaBeans[0];
        let beanQtyLiberica = libericaBeans.length;
    
        if (beanQtyLiberica > 0) {
          return (
            <ItemDiv2>
              <h3>
                {beanTypeLiberica}: <RemoveCircleIcon onClick={() => 
                  dispatch({type: "REMOVE_LIBERICA"})} />
                {beanQtyLiberica} <AddCircleIcon onClick={() =>
                  dispatch({type: "ADD_LIBERICA", 
                  payload: (state) => {state.items3.push(state.items3[0])}})} />
              </h3>
            </ItemDiv2>
          );
        }
        break;

      case bean == arabicaBeans:
        let beanTypeArabica = arabicaBeans[0];
        let beanQtyArabica = arabicaBeans.length;

        if (beanQtyArabica > 0) {
          return (
            <ItemDiv3>
              <h3>
                {beanTypeArabica}: <RemoveCircleIcon onClick={() => 
                  dispatch({type: "REMOVE_ARABICA"})} />
                {beanQtyArabica} <AddCircleIcon onClick={() => 
                  dispatch({type: "ADD_ARABICA", 
                  payload: (state) => {state.items4.push(state.items4[0])}})} />
              </h3>
            </ItemDiv3>
          )
        }
        break;

      default: 
        break;
    }
  }

  return (
    <CartContainer>
      <CartDiv>
        {allBeans.map((bean) => (
          renderBeans(bean)
        ))}
      </CartDiv>
    </CartContainer>
  );
}

// STYLING FOR CARTDIV CONTAINER
const CartContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #B9B7BD;
  opacity: .5;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const CartDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 65%;
  min-width: 30%;
  background-color: #EEEDE7;
  border-radius: 4px;
  box-shadow: 0px 12px 16px -5px rgb(0 0 0 / 80%);

  @media (max-width: 768px) {
    min-width: 80%;
  }
`;

const ItemDiv0 = styled.div`
  width: 70%;
  height: 70%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-bottom: 0;
    
  }
`;

const ItemDiv1 = styled.div`
  width: 70%;
  height: 70%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-bottom: 0;
  }
`;

const ItemDiv2 = styled.div`
  width: 70%;
  height: 70%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-bottom: 0;
  }
`;

const ItemDiv3 = styled.div`
  width: 70%;
  height: 70%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-bottom: 0;
  }
`;

export default Cart

import styled from "styled-components";
import { useSelector } from "react-redux";

const Cart = () => {
  const robustaBeans = useSelector(state => state.cartReducer.items);

  return (
    <CartContainer>
      <CartDiv>
        <ItemDiv>
          <h3>Item: {robustaBeans[0]}</h3>
          <h4>Qty: {robustaBeans.length}</h4>
        </ItemDiv>
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

  @media (max-width: 375px) {
    width: 80%;
  }
`;

const ItemDiv = styled.div`
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

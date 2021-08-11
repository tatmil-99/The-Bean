import styled from "styled-components";
import { useSelector } from "react-redux";

const Cart = () => {
  const robustaBeans = useSelector(state => state.cartReducer.items1);
  const excelsaBeans = useSelector(state => state.cartReducer.items2);
  const libericaBeans = useSelector(state => state.cartReducer.items3);
  const arabicaBeans = useSelector(state => state.cartReducer.items4);

  const allBeans = [robustaBeans, excelsaBeans, libericaBeans, arabicaBeans];

  const renderBeans = (bean) => {
    if (bean[0] == robustaBeans[0]) {
      let beanType = robustaBeans[0];
      let beanQty = robustaBeans.length;
      let cartItem = `${beanType}: ${beanQty}`;

      if (beanQty > 0) {
        return (
          <ItemDiv0>
            <h3>{cartItem}</h3>
          </ItemDiv0>
        );
      }
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-bottom: 0;
  }
`;

export default Cart

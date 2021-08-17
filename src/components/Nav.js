import { Link } from "react-router-dom";
import styled from "styled-components";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Hamburger from "./Hamburger";

const Nav = () => {

  return (
    <NavMenu>
      <h1><img src="../assets/images/bean2.png" alt="..." />The Bean</h1>
      <Links>
          <LinkHome>
            <Link to="/">Home</Link>
          </LinkHome>
          <LinkCart>
            <Link to="/cart"><ShoppingCartIcon /></Link>
          </LinkCart>
          <Hamburger>
          </Hamburger>
      </Links>
    </NavMenu>
  );
}

// STYLING
const NavMenu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 3px;
  background-color: #E7D2CC;
  width: 100vw;
  height: 100px;
  padding: 0;
  margin: 0;
  border-bottom: solid 1.5px rgba(0, 0, 0, 0.1);
  z-index: 1;

  h1 {
    padding: 0px 15px;
    margin: 0px 15px;
    font-weight: 1000;
    font-size: 40px;
    letter-spacing: 5px;
    color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;

    img {
      padding: 0;
      margin-right: 5px;
      
    }

    @media (max-width: 400px) {
      font-size: 30px;
    }

    @media (max-width: 325px) {
    font-size: 25px;
  }
    
  }
`;

const LinkHome = styled.div`
  padding: 0px 5px;
  margin: 0px 8px;
  font-weight: 700;
  
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    text-decoration: none;
    opacity: 0.4;
  }

  &:active {
    opacity: 0.9;
  }

  @media (max-width: 400px) {
      font-size: 15px;
    }

  @media (max-width: 325px) {
  font-size: 13px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkCart = styled.div`
  padding: 0px 15px 0px 5px;
  margin: 0px 15px 0px 8px;
  font-weight: 700;
  
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    text-decoration: none;
    opacity: 0.4;
  }

  &:active {
    opacity: 0.9;
  }

  @media (max-width: 400px) {
      font-size: 15px;
    }

  @media (max-width: 325px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 415px) {
    
  }
`;


export default Nav;

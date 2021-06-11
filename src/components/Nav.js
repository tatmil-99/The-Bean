import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavMenu>
      <h1>The Bean</h1>
      <Links>
        <LinkHome>
          <Link to="/">Home</Link>
        </LinkHome>

        <LinkCart>
          <Link to="/cart">Cart</Link>
        </LinkCart>
      </Links>
    </NavMenu>
  );
}

const NavMenu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* padding: 0px 15px; */
  /* margin: 0px 15px; */
  letter-spacing: 3px;
  background-color: #E7D2CC;
  width: 100vw;
  height: 11vh;
  padding: 0;
  margin: 0;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;

  h1 {
    padding: 0px 15px;
    margin: 0px 15px;
    font-weight: 1000;
    font-size: 40px;
    letter-spacing: 5px;
    color: rgba(0, 0, 0, 0.5);

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
    font-weight: 750;
    box-shadow: 0px 5px 9px -5px rgb(0 0 0 / 70%);
    padding-top: 5px;
    padding-bottom: 5px;
    border: solid 1.9px #EEEDE7;
    border-radius: 4px;

  }

  @media (max-width: 400px) {
      font-size: 15px;
    }

  @media (max-width: 325px) {
  font-size: 13px;
  }
`;

const LinkCart = styled.div`
  padding: 0px 5px;
  /* padding-right: 15px; */
  margin: 0px 8px;
  font-weight: 700;
  
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    text-decoration: none;
    font-weight: 750;
    box-shadow: 0px 5px 9px -5px rgb(0 0 0 / 70%);
    padding-top: 5px;
    padding-bottom: 5px;
    border: solid 1.9px #EEEDE7;
    border-radius: 4px;

  }

  @media (max-width: 400px) {
      font-size: 15px;
    }

  @media (max-width: 325px) {
    font-size: 13px;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;


export default Nav;

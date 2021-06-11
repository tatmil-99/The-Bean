import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavMenu>
      <h1>The Bean</h1>
      <LinkItems>
        <Link to="/">Home</Link>
      </LinkItems>
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
  width: 100%;
  height: 10%;
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
  }
`;

const LinkItems = styled.div`
  padding: 0px 15px;
  margin: 0px 15px;
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
`;


export default Nav;

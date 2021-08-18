import MenuIcon from '@material-ui/icons/Menu';
import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';

const Hamburger = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <HamburgerMenu>
      <h3 onClick={toggleHamburger}>
        {hamburgerOpen ? <CloseIcon /> : <MenuIcon />}
        <HamburgerLinks>
          {hamburgerOpen ? <div><Link to="/">Home</Link></div> : null}
          {hamburgerOpen ? <div><Link to="/cart">Cart</Link></div> : null}
        </HamburgerLinks>
      </h3>
    </HamburgerMenu>
  );
}

// STYLING
const HamburgerMenu = styled.div`
  /* background-color: rgba(0, 0, 0, 0.1); */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 30px;
  margin: 0;
  height: 50%;
  width: 100%;

  h3 {
    color: rgba(0, 0, 0, 0.5);
    svg {
      position: absolute;
      right: 30px;
      top: 35px;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const HamburgerLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: auto;
  background-color: #EEEDE7;
  margin-top: 100px;
  padding: 0px 15px 0px 15px;
  border-radius: 4px;
  box-shadow: 0px 5px 5px -4px rgb(0 0 0 / 60%);
  font-size: 20px;

  a {
    letter-spacing: 3px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 600;
    text-decoration: none;

    &:active {
      opacity: 0.7;
    }
  }

  div {
    margin: 5px 0px 5px 0px;
    padding: 0px 3px 0px 0px;
  }
`;


export default Hamburger;

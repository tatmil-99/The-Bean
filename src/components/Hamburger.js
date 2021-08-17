import MenuIcon from '@material-ui/icons/Menu';
import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Hamburger = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <HamburgerMenu>
      <h3 onClick={toggleHamburger}><MenuIcon />
        {hamburgerOpen ? <div><Link to="/">Home</Link></div> : null}
        {hamburgerOpen ? <div><Link to="/cart">Cart</Link></div> : null}
      </h3>
    </HamburgerMenu>
  );
}

// STYLING
const HamburgerMenu = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0px 30px;
  margin: 0;
  height: 100px;
  width: 100%;

  h3 {
    color: rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
export default Hamburger;

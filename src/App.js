import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Redirect,
  Switch, 
} from "react-router-dom";

import styled from 'styled-components';
import Home from './components/Home';
import Cart from './components/Cart';
import Nav from './components/Nav';
import PgNotFnd from './components/PgNotFnd';

function App() {
  return (
    <AppDiv>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="*" component={PgNotFnd} />
        </Switch>
      </Router>
      <Footer>

      </Footer>
    </AppDiv>
  );
}

// STYLING FOR APPDIV CONTAINER
const AppDiv = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex; 
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding-bottom: 100px; 

`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #868B8E;
  border-top: solid 1.5px rgba(0, 0, 0, 0.1);
`;

export default App;

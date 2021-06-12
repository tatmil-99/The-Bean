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
    </AppDiv>
  );
}

// STYLING FOR APPDIV CONTAINER
const AppDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export default App;

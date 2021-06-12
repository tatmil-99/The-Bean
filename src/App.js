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

function App() {
  return (
    <AppDiv>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
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
`;

export default App;

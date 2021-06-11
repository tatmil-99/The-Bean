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

function App() {
  return (
    <AppDiv>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </AppDiv>
  );
}

const AppDiv = styled.div`
 
`;

export default App;

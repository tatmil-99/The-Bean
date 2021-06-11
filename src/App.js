import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Redirect,
  Switch, 
} from "react-router-dom";

import Home from './components/Home';
import styled from 'styled-components';

function App() {
  return (
    <AppDiv>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </AppDiv>
  );
}

const AppDiv = styled.div`
 
`;

export default App;

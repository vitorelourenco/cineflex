import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import SessionSelection from './SessionSelection';
import SeatSelection from './SeatSelection';
import { useState } from 'react';
import Result from './Result';

export default function App(){
  const [sessionState, setSessionState] = useState({});

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sessoes/:idFilme">
          <SessionSelection />
        </Route>
        <Route exact path="/assentos/:idSessao">
          <SeatSelection 
            sessionState={sessionState} 
            setSessionState={setSessionState}
          />
        </Route>
        <Route exact path="/sucesso">
          <Result  
            sessionState={sessionState} 
            setSessionState={setSessionState}
          />
        </Route>
      </Switch>
    </Router>
  )
}

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import SessionSelection from './SessionSelection';
import SeatSelection from './SeatSelection';

export default function App(){
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
          <SeatSelection />
        </Route>
      </Switch>
    </Router>
  )
}

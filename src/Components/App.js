import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import SeatSelection from './SeatSelection';

export default function App(){
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

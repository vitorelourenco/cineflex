import "./global_styles/reset.css";

import "./global_styles/cineflex.css";
import "./global_styles/vel.css";

import ReactDom from "react-dom";
import App from "./components/App";
import {createBrowserHistory} from 'history';
import {Router} from 'react-router-dom';

const history = createBrowserHistory();
const root = document.querySelector(".root");

ReactDom.render(
  <Router history={history}>
    <App />
  </Router>,
  root
);

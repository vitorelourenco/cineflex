import "./global_styles/reset.css";

import "./global_styles/cineflex.css";
import "./global_styles/vel.css";

import ReactDom from "react-dom";
import App from "./components/App";

const root = document.querySelector(".root");

ReactDom.render(<App />, root);

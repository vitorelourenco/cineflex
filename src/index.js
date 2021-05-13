import "./global_styles/reset.css";

import ReactDom from "react-dom";
import App from "./components/App";
import "./global_styles/global_css.css";
import "./global_styles/vel.css";

const root = document.querySelector(".root");

ReactDom.render(<App />, root);

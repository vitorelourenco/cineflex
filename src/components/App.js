import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import SessionSelection from "./SessionSelection";
import SeatSelection from "./SeatSelection";
import Result from "./Result";
import { useState } from "react";

export default function App() {
  const [buyerCPF, setBuyerCPF] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const buyerVars = { buyerCPF, setBuyerCPF, buyerName, setBuyerName };

  return (
    <>
      <Header />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={SessionSelection} exact path="/sessoes/:idFilme" />
        <Route exact path="/assentos/:idSessao">
          <SeatSelection buyerVars={buyerVars} />
        </Route>
        <Route exact path="/sucesso">
          <Result buyerVars={buyerVars} />
        </Route>
      </Switch>
    </>
  );
}

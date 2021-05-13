import axios from "axios";
import { useState, useEffect } from "react";
import apiURL from "../ra_api";
import styled from "styled-components";
import MainWrapper from "./MainWrapper";
import NextButton from "./NextButton";
import { Link , useLocation} from "react-router-dom";

export default function Result({buyerVars}) {
  const {buyerCPF, setBuyerCPF, buyerName, setBuyerName} = buyerVars;

  const {
    seatNumbers ,
    ids,
    name,
    day,
    movie,
  } = useLocation().state;

  const [state, setState] = useState(null);

  useEffect(() => {

    const letter =
    buyerCPF && buyerName && ids
      ? { ids, cpf: buyerCPF, name: buyerName }
      : {};

    axios
      .post(apiURL + "/seats/book-many", letter)
      .then(() => {
        setState(true);
      })
      .catch(() => {
        setState(false);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (state === null) return <h3>processing order</h3>;

  if (state === false) return <h3>processing error</h3>;
  // day name time

  return (
    <MainWrapper>
      <Success>Pedido feito<br /> com sucesso!</Success>
      <Movie time={name} day={day.date} title={movie.title}></Movie>
      <Tickets seatNumbers={seatNumbers} ids={ids}></Tickets>
      <Buyer name={buyerName} cpf={buyerCPF}></Buyer>
      <Link
        onClick={() => {setBuyerCPF(""); setBuyerName("");}}
        style={{ width: "80%", marginTop: "20px" }}
        className="d-block"
        to="/"
      >
        <NextButton>Voltar pra Home</NextButton>
      </Link>
    </MainWrapper>
  );
}

const Success = styled.h2`
  font-weight: bold;
  font-size: min(6vw, 23px);
  margin-bottom: 35px;
  margin-top: 25px;
  color: #245a6b;
  text-align: center;
`;

const ArticleWrapper = styled.article`
  font-size: min(6vw, 23px);
  width: 100%;
  margin-bottom: 40px;
  color: #293845;
  header {
    font-weight: bold;
    margin-bottom: 12px;
  }
  p {
    font-size: min(5.5vw, 20px);
    margin-bottom: 5px;
  }
`;

function Movie({ title, day, time }) {
  return (
    <ArticleWrapper>
      <header>Filme e sessão</header>
      <p>{title}</p>
      <p>
        {day} {time}
      </p>
    </ArticleWrapper>
  );
}

function Tickets({ seatNumbers, ids }) {
  return (
    <ArticleWrapper>
      <header>Ingressos</header>
      {seatNumbers.map((number, i) => {
        return <p key={ids[i]}>Assento {number}</p>;
      })}
    </ArticleWrapper>
  );
}

function Buyer({ name, cpf }) {
  return (
    <ArticleWrapper>
      <header>Comprador</header>
      <p>Nome: {name}</p>
      <p>CPF: {formatCPF(cpf)}</p>
    </ArticleWrapper>
  );
}

function formatCPF(cpf) {
  let clock = 0;
  let outStr = "";
  for (let i = 0; i < cpf.length; i++) {
    outStr += cpf[i];
    clock++;
    if (clock % 9 === 0) outStr += "-";
    else if (clock % 3 === 0) outStr += ".";
  }
  return outStr;
}

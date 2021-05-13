import axios from "axios";
import { useState, useEffect } from "react";
import apiURL from "../ra_api";
import { Link , useLocation} from "react-router-dom";
import formatCPF from '../functions/formatCPF';
import BackButton from './BackButton';
import styled from 'styled-components';
import MainWrapper from './MainWrapper';
import NextButton from './NextButton';

export default function Result({buyerVars}) {
  const {buyerCPF, setBuyerCPF, buyerName, setBuyerName} = buyerVars;

  const {seatNumbers, ids, name, day, movie} = useLocation().state;

  const [readyToRender, setReadyToRender] = useState(false);

  useEffect(() => {
    const bodyPackage = { ids, cpf: buyerCPF, name: buyerName }

    axios
      .post(apiURL + "/seats/book-many/", bodyPackage)
      .then(() => {
        setReadyToRender(true);
      })
      .catch(() => {
        alert("Erro, tente novamente mais tarde");
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!readyToRender) return <h3>carregando...</h3>;

  return (
    <>
      <BackButton />
      <MainWrapper>
        <SuccessText>Pedido feito<br /> com sucesso!</SuccessText>
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
    </>
  );
}

function Movie({ title, day, time }) {
  return (
    <SuccessArticle>
      <header>Filme e sessão</header>
      <p>{title}</p>
      <p>{day} {time}</p>
    </SuccessArticle>
  );
}

function Tickets({ seatNumbers, ids }) {
  return (
    <SuccessArticle>
      <header>Ingressos</header>
      {seatNumbers.map((number, i) => {
        return <p key={ids[i]}>Assento {number}</p>;
      })}
    </SuccessArticle>
  );
}

function Buyer({ name, cpf }) {
  return (
    <SuccessArticle>
      <header>Comprador</header>
      <p>Nome: {name}</p>
      <p>CPF: {formatCPF(cpf)}</p>
    </SuccessArticle>
  );
}

const SuccessText = styled.h2`
  font-weight: bold;
  font-size: min(6vw, 23px);
  margin-bottom: 35px;
  margin-top: 25px;
  color: #245a6b;
  text-align: center;
`;

const SuccessArticle = styled.article`
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


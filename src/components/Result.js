import axios from "axios";
import { useState, useEffect } from "react";
import apiURL from "../ra_api";
import { Link , useLocation} from "react-router-dom";
import formatCPF from '../functions/formatCPF';
import * as S from './styledcomponents/exporter'

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
    <S.MainWrapper>
      <S.SuccessText>Pedido feito<br /> com sucesso!</S.SuccessText>
      <Movie time={name} day={day.date} title={movie.title}></Movie>
      <Tickets seatNumbers={seatNumbers} ids={ids}></Tickets>
      <Buyer name={buyerName} cpf={buyerCPF}></Buyer>
      <Link
        onClick={() => {setBuyerCPF(""); setBuyerName("");}}
        style={{ width: "80%", marginTop: "20px" }}
        className="d-block"
        to="/"
      >
        <S.NextButton>Voltar pra Home</S.NextButton>
      </Link>
    </S.MainWrapper>
  );
}

function Movie({ title, day, time }) {
  return (
    <S.SuccessArticle>
      <header>Filme e sessão</header>
      <p>{title}</p>
      <p>{day} {time}</p>
    </S.SuccessArticle>
  );
}

function Tickets({ seatNumbers, ids }) {
  return (
    <S.SuccessArticle>
      <header>Ingressos</header>
      {seatNumbers.map((number, i) => {
        return <p key={ids[i]}>Assento {number}</p>;
      })}
    </S.SuccessArticle>
  );
}

function Buyer({ name, cpf }) {
  return (
    <S.SuccessArticle>
      <header>Comprador</header>
      <p>Nome: {name}</p>
      <p>CPF: {formatCPF(cpf)}</p>
    </S.SuccessArticle>
  );
}

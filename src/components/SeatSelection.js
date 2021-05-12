import Theater from "./Theater";
import SeatLabels from "./SeatLabels";
import { Link } from "react-router-dom";
import MainWrapper from "./MainWrapper";
import Instruction from "./Instruction";
import NextButton from "./NextButton";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import apiURL from "../ra_api";
import filterState from "../functions/filterState";
import { useState } from 'react';
import InputField from './InputField';
import Footer from './Footer';

export default function SeatSelection({ sessionState, setSessionState }) {
  const idSessao = useParams().idSessao;

  const [buyerCPF, setBuyerCPF] = useState('');
  const [buyerName, setBuyerName] = useState('');

  useEffect(() => {
    axios
      .get(apiURL + `/showtimes/${idSessao}/seats`)
      .then(({ data }) => {
        data.seats.forEach((seat) => {
          seat.status = seat.isAvailable === true ? "free" : "taken";
        });
        setSessionState(data);
      })
      .catch((err) => {
        alert("Erro, tente novamente mais tarde");
        window.location.replace("/");
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const isReady = 
    sessionState
    &&sessionState.movie
    &&sessionState.movie.posterURL
    &&sessionState.movie.title
    &&sessionState.day
    &&sessionState.day.weekday
    &&sessionState.name;

  return (
    <>
      <MainWrapper style={{marginBottom: "115px"}}>

        <Instruction>Selecione o(s) assento(s)</Instruction>

        <Theater
          seats={sessionState.seats || []}
          sessionState={sessionState}
          setSessionState={setSessionState}
        />

        <SeatLabels />

        <InputField
          labelText="Nome do comprador:"
          placeholder="Digite seu nome..."
          state={buyerName}
          setState={setBuyerName}
          id="buyerName"
          type="text"
          name="buyerName"
        >
        </InputField>

        <InputField
          labelText="CPF do comprador:"
          placeholder="Digite seu CPF..."
          state={buyerCPF}
          setState={setBuyerCPF}
          id="buyerCPF"
          type="text"
          name="buyerCPF"
        >
        </InputField>

        <Link
          onClick={(e)=>submit(e, sessionState, buyerName, buyerCPF)}
          style={{ width: "60%", marginTop: "60px" }}
          className="d-block"
          to={{pathname:"/sucesso", state:{buyerCPF, buyerName}}}
        >
          <NextButton>Reservar assento(s)</NextButton>
        </Link>

      </MainWrapper>

      <Footer 
        posterURL={isReady ? sessionState.movie.posterURL : ""}
        title={isReady ? sessionState.movie.title : ""}
        text1={isReady ? sessionState.movie.title : ""}
        text2={isReady ? sessionState.day.weekday+" "+sessionState.name : ""}
        isLink={false}
      />
    </>
  );
}

function submit(e, sessionState, buyerName, buyerCPF){
  const [seatNumbers] = filterState(sessionState);
  const nSeats = seatNumbers.length;
  if (nSeats === 0 || buyerName === "" || buyerCPF === ""){
    e.preventDefault();
    alert('Preencha os campos corretamente');
  } ;
}

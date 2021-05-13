import Theater from "./Theater";
import SeatLabels from "./SeatLabels";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import apiURL from "../ra_api";
import filterState from "../functions/filterState";
import InputField from "./InputField";
import Footer from "./Footer";
import BackButton from "./BackButton";
import styled from "styled-components";
import MainWrapper from "./MainWrapper";
import Instruction from "./Instruction";
import NextButton from "./NextButton";

export default function SeatSelection({ buyerVars }) {
  const idSessao = useParams().idSessao;

  const [movieSession, setMovieSession] = useState({});
  const [readyToRender, setReadyToRender] = useState(false);

  useEffect(() => {
    axios
      .get(apiURL + `/showtimes/${idSessao}/seats`)
      .then(({ data }) => {
        data.seats.forEach((seat) => {
          seat.status = seat.isAvailable === true ? "free" : "taken";
        });
        setMovieSession(data);
        setReadyToRender(true);
      })
      .catch(() => {
        alert("Erro, tente novamente mais tarde");
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!readyToRender) return <h3>carregando...</h3>;

  function submit(e) {
    const nSeats = seatNumbers.length;
    if (nSeats === 0 || buyerName === "" || buyerCPF === "") {
      e.preventDefault();
      alert("Preencha os campos corretamente e selecione ao menos um assento");
    }
  }

  const { buyerCPF, setBuyerCPF, buyerName, setBuyerName } = buyerVars;
  const [seatNumbers, ids] = filterState(movieSession);
  const { name, day, movie } = movieSession;

  return (
    <>
      <BackButton />
      <MainWrapper style={{ marginBottom: "115px" }}>
        <Instruction>Selecione o(s) assento(s)</Instruction>

        <Theater
          seats={movieSession.seats || []}
          movieSession={movieSession}
          setMovieSession={setMovieSession}
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
        ></InputField>

        <InputField
          labelText="CPF do comprador:"
          placeholder="Digite seu CPF..."
          state={buyerCPF}
          setState={setBuyerCPF}
          id="buyerCPF"
          type="text"
          name="buyerCPF"
        ></InputField>

        <Link
          onClick={(e) => submit(e)}
          style={{ width: "60%", marginTop: "60px" }}
          className="d-block"
          to={{
            pathname: "/sucesso",
            state: { seatNumbers, ids, name, day, movie },
          }}
        >
          <NextButton>Reservar assento(s)</NextButton>
        </Link>
      </MainWrapper>

      <Footer
        posterURL={movieSession.movie.posterURL}
        title={movieSession.movie.title}
        text1={movieSession.movie.title}
        text2={movieSession.day.weekday + " " + movieSession.name}
        isLink={false}
      />
    </>
  );
}

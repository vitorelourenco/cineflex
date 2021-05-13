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
import { useState } from "react";
import InputField from "./InputField";
import Footer from "./Footer";

export default function SeatSelection({buyerVars}) {

  const {buyerCPF, setBuyerCPF, buyerName, setBuyerName} = buyerVars;

  const idSessao = useParams().idSessao;

  const [movieSession, setMovieSession] = useState({});

  useEffect(() => {
    axios
      .get(apiURL + `/showtimes/${idSessao}/seats`)
      .then(({ data }) => {
        data.seats.forEach((seat) => {
          seat.status = seat.isAvailable === true ? "free" : "taken";
        });
        setMovieSession(data);
      })
      .catch((err) => {
        alert("Erro, tente novamente mais tarde");
        window.location.replace("/");
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const isReady = !!Object.keys(movieSession).length;

  if (!isReady) return <h3>carregando...</h3>;

  function submit(e) {
    const nSeats = seatNumbers.length;
    if (nSeats === 0 || buyerName === "" || buyerCPF === "") {
      e.preventDefault();
      alert("Preencha os campos corretamente");
    }
  }

  const [seatNumbers, ids] = filterState(movieSession);
  const { name, day, movie } = movieSession;

  return (
    <>
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
            state: {
              seatNumbers,
              ids,
              name,
              day,
              movie,
            },
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

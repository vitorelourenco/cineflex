import Theater from "./Theater";
import SeatLabels from "./SeatLabels";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import apiURL from "../ra_api";
import InputField from "./InputField";
import Footer from "./Footer";
import styled from "styled-components";
import MainWrapper from "./MainWrapper";
import Instruction from "./Instruction";
import NextButton from "./NextButton";

export default function SeatSelection({ movieSession, setMovieSession }) {
  const idSessao = useParams().idSessao;

  const [readyToRender, setReadyToRender] = useState(false);

  useEffect(() => {
    axios
      .get(apiURL + `/showtimes/${idSessao}/seats`)
      .then(({ data }) => {
        data.seats.forEach((seat) => {
          seat.personName = "";
          seat.personCPF = "";
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

  const getObjOrder = () => {
    const numeros = [];
    const ids = [];
    const compradores = [];

    movieSession.seats.forEach((seat) => {
      if (seat.status === "selected") {
        numeros.push(seat.name);
        ids.push(seat.id);
        compradores.push({
          idAssento: seat.id,
          nome: seat.personName,
          cpf: seat.personCPF,
        });
      }
    });

    const titulo = movieSession.movie.title;
    const hora = movieSession.name;
    const dia = movieSession.day.date;

    return { numeros, ids, compradores, titulo, hora, dia };
  };

  const objOrder = movieSession.hasOwnProperty("seats") ? getObjOrder() : null;

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

        {movieSession.seats
          .filter((seat) => seat.status === "selected")
          .map((seat) => {
            return (
              <div className="w-100" key={seat.id}>
                <OrderHeader>Assento {seat.name}</OrderHeader>
                <InputField
                  value={seat.personName}
                  labelText="Nome do comprador:"
                  placeholder="Digite seu nome..."
                  state={movieSession}
                  setState={setMovieSession}
                  id="personName"
                  type="text"
                  name="personName"
                  seat={seat}
                  targetProp="personName"
                ></InputField>

                <InputField
                  value={seat.personCPF}
                  labelText="CPF do comprador:"
                  placeholder="Digite seu CPF..."
                  state={movieSession}
                  setState={setMovieSession}
                  id="personCPF"
                  type="text"
                  name="personCPF"
                  seat={seat}
                  targetProp="personCPF"
                ></InputField>
              </div>
            );
          })}

        <Link
          style={{ width: "60%" }}
          className="d-block"
          to={{
            pathname: "/sucesso",
            state: objOrder,
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

const OrderHeader = styled.h3`
  margin-top: 20px;
  width: 100%;
`;

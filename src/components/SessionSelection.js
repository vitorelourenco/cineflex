import styled from "styled-components";
import Instruction from "./Instruction";
import MainWrapper from "./MainWrapper";
import Day from "./Day";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import apiURL from "../ra_api";

export default function SessionSelection() {
  const [movie, setMovie] = useState(null);
  const idFilme = useParams().idFilme;

  useEffect(() => {
    axios
      .get(apiURL + "/movies/" + idFilme + "/showtimes/")
      .then(({ data }) => {
        setMovie(data);
      })
      .catch(() => {
        alert("Erro, tente novamente mais tarde");
        window.location.replace("/");
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MainWrapper>
      <Instruction>Selecione o horário</Instruction>
      <SectionWrapper>
        {movie === null
          ? ""
          : movie.days.map((day) => <Day key={day.id} day={day} />)}
      </SectionWrapper>
    </MainWrapper>
  );
}

const SectionWrapper = styled.section`
  width: 100%;
`;

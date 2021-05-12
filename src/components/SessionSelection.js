import styled from "styled-components";
import Instruction from "./Instruction";
import MainWrapper from "./MainWrapper";
import Day from "./Day";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import apiURL from "../ra_api";
import Footer from './Footer';

export default function SessionSelection() {
  const [movie, setMovie] = useState(null);
  const idFilme = useParams().idFilme;

  console.log(movie);

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

  const isReady = 
  movie
  &&movie.posterURL
  &&movie.title


  return (
    <>
    <MainWrapper style={{marginBottom: "115px"}}>
      <Instruction>Selecione o horário</Instruction>
      <SectionWrapper>
        {movie === null
          ? ""
          : movie.days.map((day) => <Day key={day.id} day={day} />)}
      </SectionWrapper>
    </MainWrapper>
    <Footer 
      posterURL={isReady ? movie.posterURL : ""}
      title={isReady ? movie.title : ""}
      text1={isReady ? movie.title : ""}
      text2={""}
      isLink={false}
    />
    </>
  );
}

const SectionWrapper = styled.section`
  width: 100%;
`;

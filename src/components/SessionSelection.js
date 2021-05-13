import apiURL from "../ra_api";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Day from "./Day";
import Footer from "./Footer";
import BackButton from "./BackButton";
import MainWrapper from "./MainWrapper";
import Instruction from "./Instruction";
export default function SessionSelection() {
  const idFilme = useParams().idFilme;

  const [movie, setMovie] = useState({});
  const [readyToRender, setReadyToRender] = useState(false);

  useEffect(() => {
    axios
      .get(apiURL + "/movies/" + idFilme + "/showtimes/")
      .then(({ data }) => {
        setMovie(data);
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
      <MainWrapper style={{ marginBottom: "115px" }}>
        <Instruction>Selecione o horário</Instruction>
        <section className="w-100">
          {movie.days.map((day) => (
            <Day key={day.id} day={day} />
          ))}
        </section>
      </MainWrapper>
      <Footer
        posterURL={movie.posterURL}
        posterAlt={movie.title}
        text1={movie.title}
        text2={""}
        isLink={false}
      />
    </>
  );
}

import apiURL from "../ra_api";
import axios from "axios";
import Poster from "./Poster";
import { useState, useEffect } from "react";
import * as S from './styledcomponents/exporter'

export default function Home() {
  const [posters, setPosters] = useState([]);
  const [readyToRender, setReadyToRender] = useState(false);

  useEffect(() => {
    axios
      .get(apiURL + "/movies")
      .then(({ data }) => {
        setPosters(data);
        setReadyToRender(true);
      })
      .catch(() => {
        alert("Erro, tente novamente mais tarde");
      });
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!readyToRender) return (<h3>carregando...</h3>);

  return (
    <>
      <S.MainWrapper>
        <S.Instruction>Selecione o filme</S.Instruction>
        <S.Catalog>
          {posters.map(({ posterURL, title, id }) => (
            <Poster key={id} id={id} posterURL={posterURL} posterAlt={title} isLink={true} widthCSS={"calc(50% - 15px)"}/>
          ))}
        </S.Catalog>
      </S.MainWrapper>
    </>
  );
}

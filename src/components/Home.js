import Poster from "./Poster";
import MainWrapper from "./MainWrapper";
import Instruction from "./Instruction";
import Catalog from "./Catalog";
import axios from "axios";
import { useState, useEffect } from "react";
import apiURL from "../ra_api";

export default function Home() {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    axios
      .get(apiURL + "/movies")
      .then(({ data }) => {
        setPosters(data);
      })
      .catch((err) => {
        alert("Erro, tente novamente mais tarde");
      });
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  const isReady = !!Object.keys(posters).length;

  if (!isReady) return (<h3>carregando...</h3>);

  return (
    <>
      <MainWrapper>
        <Instruction>Selecione o filme</Instruction>
        <Catalog>
          {posters.map(({ posterURL, title, id }) => (
            <Poster key={id} id={id} posterURL={posterURL} title={title} isLink={true} widthCSS={"calc(50% - 15px)"}/>
          ))}
        </Catalog>
      </MainWrapper>
    </>
  );
}

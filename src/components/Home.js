import apiURL from "../ra_api";
import axios from "axios";
import Poster from "./Poster";
import { useState, useEffect } from "react";
import styled from 'styled-components';
import MainWrapper from './MainWrapper';
import Instruction from './Instruction';

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
      <MainWrapper>
        <Instruction>Selecione o filme</Instruction>
        <Catalog>
          {posters.map(({ posterURL, title, id }) => (
            <Poster key={id} id={id} posterURL={posterURL} posterAlt={title} isLink={true} widthCSS={"calc(50% - 15px)"}/>
          ))}
        </Catalog>
      </MainWrapper>
    </>
  );
}

const Catalog = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 12px;
  column-gap: 30px;
`;
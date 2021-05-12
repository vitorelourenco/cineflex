import styled from 'styled-components';
import Theater from './Theater';
import SeatLabels  from './SeatLabels';
import { Link } from 'react-router-dom';
import MainWrapper from './MainWrapper';
import Instruction from './Instruction';
import NextButton from './NextButton';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import apiURL from '../ra_api';

export default function SeatSelection(){

  const [sessionState, setSessionState] = useState({});
  const idSessao = useParams().idSessao;

  useEffect(()=>{
    axios
    .get(apiURL+`/showtimes/${idSessao}/seats`)
    .then(({data})=>{
      data.seats.forEach((seat) => {
        seat.status = seat.isAvailable === true ? "free" : "taken";
      });
      setSessionState(data)
    })
    .catch((err)=>{
      alert('Erro, tente novamente mais tarde');
      window.location.replace("/");
    });
  },[]);

  return (
    <MainWrapper>
      <Instruction>Selecione o(s) assento(s)</Instruction>
      <Theater 
        seats={sessionState.seats || []} 
        sessionState={sessionState}
        setSessionState={setSessionState} 
      />
      <SeatLabels />
      <Link style={{width: "60%", marginTop: "60px"}} className="d-block" to="/">
        <NextButton>Reservar assento(s)</NextButton>
      </Link>
    </MainWrapper>
  )
}
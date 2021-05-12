import Theater from './Theater';
import SeatLabels  from './SeatLabels';
import { Link } from 'react-router-dom';
import MainWrapper from './MainWrapper';
import Instruction from './Instruction';
import NextButton from './NextButton';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import apiURL from '../ra_api';

export default function SeatSelection({sessionState, setSessionState}){

  const idSessao = useParams().idSessao;

  useEffect(()=>{
    axios
    .get(apiURL+`/showtimes/${idSessao}/seats`)
    .then(({data})=>{
      data.seats.forEach((seat) => {
        seat.status = seat.isAvailable === true ? "free" : "taken";
      });
      data.customerName = "banana";
      data.customerCPF = "12345678900";
      setSessionState(data);
    })
    .catch((err)=>{
      alert('Erro, tente novamente mais tarde');
      console.log(err);
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
      <Link style={{width: "60%", marginTop: "60px"}} className="d-block" to="/sucesso">
        <NextButton>Reservar assento(s)</NextButton>
      </Link>
    </MainWrapper>
  )
}

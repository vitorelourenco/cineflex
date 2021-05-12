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
import filterState from '../functions/filterState';

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

  const [seatNumbers, ids] = filterState(sessionState);
  const nSeats = seatNumbers.length;

  return (
    <MainWrapper>
      <Instruction>Selecione o(s) assento(s)</Instruction>
      <Theater 
        seats={sessionState.seats || []} 
        sessionState={sessionState}
        setSessionState={setSessionState} 
      />
      <SeatLabels />
      <Link 
        onClick={(e)=> nSeats>0 || (e.preventDefault() || alert('selecione um assento'))}
        style={{width: "60%", marginTop: "60px"}} 
        className="d-block" 
        to="/sucesso">
        <NextButton>Reservar assento(s)</NextButton>
      </Link>
    </MainWrapper>
  )
}

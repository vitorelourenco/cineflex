import styled from 'styled-components';
import Theater from './Theater';
import SeatLabels  from './SeatLabels';
import { Link } from 'react-router-dom';
import MainWrapper from './MainWrapper';
import Instruction from './Instruction';
import NextButton from './NextButton';


const seats = [
  {text: "99", status: "taken"},
  {text: "99", status: "taken"},
  {text: "99", status: "taken"},
  {text: "99", status: "taken"},
  {text: "99", status: "taken"},
  {text: "99", status: "taken"},
  {text: "99", status: "taken"},
  {text: "99", status: "taken"},
  {text: "99", status: "taken"},
  {text: "99", status: "taken"},
  {text: "99", status: "taken"},
  {text: "99", status: "taken"},
  {text: "99", status: "taken"},
  {text: "99", status: "taken"},
  {text: "99", status: "taken"},
  {text: "99", status: "taken"},
  {text: "99", status: "taken"}
]

export default function SeatSelection(){
  return (
    <MainWrapper>
      <Instruction>Selecione o(s) assento(s)</Instruction>
      <Theater seats={seats}/>
      <SeatLabels />
      <Link style={{width: "60%", marginTop: "60px"}} className="d-block" to="/">
        <NextButton>Reservar assento(s)</NextButton>
      </Link>
    </MainWrapper>
  )
}

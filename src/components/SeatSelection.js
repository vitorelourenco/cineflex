import styled from 'styled-components';
import Theater from './Theater';
import SeatLabels  from './SeatLabels';
import { Link } from 'react-router-dom';
import MainWrapper from './MainWrapper';

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
      <Link style={{width: "60%", "margin-top": "60px"}} className="d-block" to="/">
        <NextButton>Reservar assento(s)</NextButton>
      </Link>
    </MainWrapper>
  )
}

const Instruction = styled.h2`
  font-size: min(6vw, 38px);
  margin-bottom: 25px;
  margin-top: 35px;
`;

const NextButton = styled.button`
  background-color: #e8833a;
  border-radius: 3px;
  color: white;
  font-size: min(4vw, 18px);
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.04em;
  width: 100%;
  height: min(8vw, 48px);
  border: none;
  cursor: pointer;
`;
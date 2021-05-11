import styled from 'styled-components';
import Theater from '../Theater';
import SeatLabels  from '../SeatLabels';

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

export default function Home(){
  return (
    <MainWrapper>
      <Instruction>Selecione o(s) assento(s)</Instruction>
      <Theater seats={seats}/>
      <SeatLabels />
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  max-width: 500px;
  width: calc(100% - 48px);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Instruction = styled.h2`
  font-size: min(8vw, 46px);
  margin-bottom: 25px;
  margin-top: 35px;
`;

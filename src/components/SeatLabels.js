import Seat from "./Seat";
import styled from "styled-components";

export default function SeatLabels() {
  return (
    <SeatLabelsWrapper>
      <Seat status="selected" text="" afterContent="Selecionado" />
      <Seat status="free" text="" afterContent="Disponível" />
      <Seat status="taken" text="" afterContent="Indisponível" />
    </SeatLabelsWrapper>
  );
}

const SeatLabelsWrapper = styled.section`
  margin-top: 20px;
  margin-bottom: 81px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  & > * {
    width: calc(10% - 6.3px);
    cursor: auto;
  }
`;

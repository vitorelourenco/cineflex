import styled from "styled-components";
import Seat from "./Seat";

export default function SeatLabels() {
  return (
    <SectionWrapper>
      <Seat status="selected" text="" afterContent="Selecionado" />
      <Seat status="free" text="" afterContent="Disponível" />
      <Seat status="taken" text="" afterContent="Indisponível" />
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
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

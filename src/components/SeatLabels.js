import Seat from "./Seat";
import * as S from './styledcomponents/exporter'

export default function SeatLabels() {
  return (
    <S.SeatLabelsWrapper>
      <Seat status="selected" text="" afterContent="Selecionado" />
      <Seat status="free" text="" afterContent="Disponível" />
      <Seat status="taken" text="" afterContent="Indisponível" />
    </S.SeatLabelsWrapper>
  );
}

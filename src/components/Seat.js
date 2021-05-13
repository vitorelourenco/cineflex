import * as S from './styledcomponents/exporter'

export default function Seat(props) {
  const { text, status, afterContent, onClick } = props;

  return (
    <S.SeatWrapper onClick={onClick} afterContent={afterContent ?? ""}>
      <S.SeatCircle className={status}>
        <S.SeatText>{text}</S.SeatText>
      </S.SeatCircle>
    </S.SeatWrapper>
  );
}

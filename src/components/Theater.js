import Seat from "./Seat";
import * as S from './styledcomponents/exporter'

export default function Theater({ seats, setMovieSession, movieSession }) {
  return (
    <S.TheaterWrapper>
      {seats.map((seat) => {
        function updateSeat() {
          if (seat.status === "taken") {
            alert("Esse assento não está disponível");
            return;
          };
          if (seat.status === "free") {
            seat.status = "selected";
          } else {
            seat.status = "free";
          }
          setMovieSession({ ...movieSession });
        }

        return (
          <Seat
            onClick={updateSeat}
            key={seat.id}
            text={seat.name}
            status={seat.status}
          />
        );
      })}
    </S.TheaterWrapper>
  );
}

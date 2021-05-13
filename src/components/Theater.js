import Seat from "./Seat";
import styled from 'styled-components';

export default function Theater({ seats, setMovieSession, movieSession }) {
  return (
    <TheaterWrapper>
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
    </TheaterWrapper>
  );
}

const TheaterWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-row-gap: 18px;
  grid-column-gap: 7px;
  width: 100%;
`;

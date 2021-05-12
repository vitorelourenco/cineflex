import styled from  'styled-components';
import Seat from './Seat';

export default function Theater({seats , setSessionState, sessionState}){
  return(
    <SeatWrapper>
      {seats.map(seat => 
        {
          function updateSeat(){
            if (seat.status === "taken") return;
            if (seat.status === "free"){
              seat.status = "selected";
            } else {
              seat.status = "free";
            }
            setSessionState({...sessionState});
            console.log(seat.status);
            console.log(seat);
          }

          return (
            <Seat onClick={updateSeat}
              key={seat.id} 
              id={seat.id} 
              name={seat.name}
              status={seat.status} 
            />
          )
        }
      )}
    </SeatWrapper>
  );
}

const SeatWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 18px;
  column-gap: 7px;
  & > *{
    width: calc(10% - 6.3px);
  }
`;
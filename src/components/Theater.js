import styled from  'styled-components';
import Seat from './Seat';

export default function Theater({seats}){
  return(
    <SeatWrapper>
      {seats.map(({id, name, isAvailable}) => 
        <Seat 
          key={id} 
          id={id} 
          name={name} 
          status={isAvailable ? "free" : "taken"} 
        />
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
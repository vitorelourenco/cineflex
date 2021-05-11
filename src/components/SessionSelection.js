import styled from 'styled-components';
import Instruction from './Instruction';
import MainWrapper from './MainWrapper';
import Day from './Day';

const days = [1,2,3];

export default function SessionSelection(){
  return (
    <MainWrapper>
      <Instruction>Selecione o horário</Instruction>
      <ShowTimes>
        {days.map( day => <Day key={day.id} data={day}/>)}
      </ShowTimes>
    </MainWrapper>
  );
}

const ShowTimes = styled.ul`
  list-style: none;

`;
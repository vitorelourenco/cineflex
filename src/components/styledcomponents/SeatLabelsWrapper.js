import styled from 'styled-components';

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

export default SeatLabelsWrapper;

import styled from 'styled-components';

const SeatWrapper = styled.div`
  user-select: none;
  flex-shrink: 0;
  flex-grow: 0;
  position: relative;
  font-size: min(4vw, 23px);
  cursor: pointer;
  &::after {
    content: "${(props) => props.afterContent}";
    position: absolute;
    bottom: max(-4vw, -23px);
    left: 50%;
    transform: translate(-50%, 10px);
  }
`;

export default SeatWrapper;

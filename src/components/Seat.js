import styled from 'styled-components';

export default function Seat(props) {
  const { text, status, afterContent, onClick } = props;

  return (
    <SeatWrapper onClick={onClick} afterContent={afterContent ?? ""}>
      <SeatCircle className={status}>
        <SeatText>{text}</SeatText>
      </SeatCircle>
    </SeatWrapper>
  );
}

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

const SeatText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SeatCircle = styled.div`
  padding-bottom: 100%;
  border-radius: 40%;
  transition: background-color 100ms linear, border-color 300ms linear;
`;
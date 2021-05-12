import styled from 'styled-components';

export default function Seat(props){
  const {name, status, afterContent, onClick} = props;
  const [bgColor, borderColor] = getColors(status);

  return (
    <SeatWrapper onClick={onClick} afterContent={afterContent ?? ""}>
      <Circle bgColor={bgColor} borderColor={borderColor}>
        <Text>
          {name}
        </Text>
      </Circle>
    </SeatWrapper>
  );
}

function getColors(status){
  //arr[0] = background color , arr[1] = border color
  switch (status){
    case 'taken': return ["#fbe192", "#f7c52b"];
    case 'free': return ["#c3cfd9", "#808f90"];
    case 'selected': return ["#8ff7cf", "#45bdb0"];
    default : return ["#ffffff", "#000000"];
  }
}

const SeatWrapper = styled.div`
  user-select: none;
  flex-shrink: 0;
  flex-grow: 0;
  position: relative;
  font-size: min(4vw, 23px);
  cursor: pointer;
  &::after{
    content: "${props=>props.afterContent}";
    position: absolute;
    bottom: max(-4vw, -23px);
    left: 50%;
    transform: translate(-50%, 10px);
  }
`

const Circle = styled.div`
  padding-bottom: 100%;
  background-color: ${props=>props.bgColor};
  border: 1px solid ${props=>props.borderColor};
  border-radius: 40%;
  transition: background-color 300ms linear, border-color 300ms linear;
`;

const Text = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

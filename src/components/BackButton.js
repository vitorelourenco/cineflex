import { useHistory } from "react-router-dom";
import NextButton from "./NextButton";
import styled from "styled-components";

export default function BackButton({ className }) {
  const history = useHistory();
  function goBack(e) {
    e.stopPropagation();
    history.goBack();
  }
  return (
    <BackButtonWrapper className={className} onClick={goBack}>
      <NextButton>←</NextButton>
    </BackButtonWrapper>
  );
}

const BackButtonWrapper = styled.aside`
  position: absolute;
  left: 4px;
  top: 34px;
  z-index: 10;
  transform: translate(0, -50%);
`;

import { useHistory } from "react-router-dom";
import NextButton from "./NextButton";
import styled from "styled-components";

export default function BackButton() {
  const history = useHistory();
  function goBack(e) {
    e.stopPropagation();
    history.goBack();
  }
  return (
    <BackButtonWrapper onClick={goBack}>
      <NextButton>←Voltar</NextButton>
    </BackButtonWrapper>
  );
}

const BackButtonWrapper = styled.aside`
  position: absolute;
  width: 80px;
  left: 4px;
  top: 70px;
  z-index: 10;
`;

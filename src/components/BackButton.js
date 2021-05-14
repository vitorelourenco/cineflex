import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ArrowBackCircleOutline } from "react-ionicons";

export default function BackButton({ className }) {
  const history = useHistory();
  function goBack(e) {
    e.stopPropagation();
    history.goBack();
  }
  return (
    <BackButtonWrapper className={className} onClick={goBack}>
      <ArrowBackCircleOutline color="#ffffff" height="30px" width="30px" />
    </BackButtonWrapper>
  );
}

const BackButtonWrapper = styled.aside`
  position: absolute;
  left: 4px;
  top: 19px;
  z-index: 10;
`;

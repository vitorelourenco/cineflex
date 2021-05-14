import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import BackButton from "./BackButton";

export default function Header() {
  function askToGoHome(e) {
    return window.confirm("Deseja voltar para a pagina inicial?")
      ? null
      : e.preventDefault();
  }

  const pathname = useLocation().pathname;
  const pointerEvents = pathname === "/" ? "none" : "auto";
  const touchAction = pathname === "/" ? "none" : "auto";

  return (
    <>
      <BackButton
        className={
          pathname === "/" ? "d-none cursor-pointer" : "cursor-pointer"
        }
      />
      <Link
        style={{
          pointerEvents: pointerEvents,
          touchAction: touchAction,
        }}
        onClick={(e) => askToGoHome(e)}
        to="/"
      >
        <HeaderWrapper>
          <h1>CINEFLEX</h1>
        </HeaderWrapper>
      </Link>
    </>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  max-width: 100%;
  height: 67px;
  background-color: #c3cfd9;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  line-height: 40px;
  color: #e8833a;
  user-select: none;
  z-index: 1;
`;

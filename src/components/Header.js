import styled from "styled-components";
import { Link , useLocation} from 'react-router-dom';

export default function Header() {
  const pathname = useLocation().pathname;
  const pointerEvents = pathname === "/" ? "none" : "auto";
  return (
    <Link style={{pointerEvents: pointerEvents}} onClick={(e)=>askToGoHome(e)} to="/">
      <StyledHeader>
        <h1>CINEFLEX</h1>
      </StyledHeader>
    </Link>
  );
}

function askToGoHome(e){
  return window.confirm("Deseja voltar para a pagina inicial?") 
    ? null 
    : e.preventDefault();
}

const StyledHeader = styled.header`
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
`;

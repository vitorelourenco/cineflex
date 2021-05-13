import { Link , useLocation} from 'react-router-dom';
import askToGoHome from '../functions/askToGoHome';
import * as S from './styledcomponents/exporter'

export default function Header() {
  const pathname = useLocation().pathname;
  const pointerEvents = pathname === "/" ? "none" : "auto";
  return (
    <Link style={{pointerEvents: pointerEvents}} onClick={(e)=>askToGoHome(e)} to="/">
      <S.HeaderWrapper>
        <h1>CINEFLEX</h1>
      </S.HeaderWrapper>
    </Link>
  );
}

import { Link } from "react-router-dom";
import * as S from './styledcomponents/exporter'

export default function Poster(props) {
  const { posterURL, posterAlt, id , widthCSS , isLink} = props;
  const pointerEvents = isLink ? "auto" : "none";
  const cursor = isLink ? "pointer" : "auto";

  return (
    <S.PosterWrapper widthCSS={widthCSS}>
      <S.PosterFigure>
        <Link style={{pointerEvents:pointerEvents , cursor: cursor}} to={`/sessoes/${id}`}>
          <S.PosterImage src={posterURL} alt={posterAlt} />
        </Link>
      </S.PosterFigure>
    </S.PosterWrapper>
  );
}

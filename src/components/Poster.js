import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Poster(props) {
  const { posterURL, posterAlt, id, widthCSS, isLink } = props;
  const pointerEvents = isLink ? "auto" : "none";
  const cursor = isLink ? "pointer" : "auto";

  return (
    <PosterWrapper widthCSS={widthCSS}>
      <PosterFigure>
        <Link
          style={{ pointerEvents: pointerEvents, cursor: cursor }}
          to={`/sessoes/${id}`}
        >
          <PosterImage src={posterURL} alt={posterAlt} />
        </Link>
      </PosterFigure>
    </PosterWrapper>
  );
}

const PosterFigure = styled.figure`
  padding-bottom: 143%;
  position: relative;
`;

const PosterImage = styled.img.attrs((props) => ({
  src: props.src || "",
  alt: props.alt || "",
}))`
  position: absolute;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  object-fit: cover;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-user-drag: none;
`;

const PosterWrapper = styled.article`
  width: ${(props) => props.widthCSS};
  max-width: 200px;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  user-select: none;
`;

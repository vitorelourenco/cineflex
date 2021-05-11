import styled from 'styled-components';

export default function Poster(props){
  const { posterURL, title} = props;
  return (
      <PosterWrapper>
        <PosterFigure>
          <PosterImage src={posterURL} alt={title} />
        </PosterFigure>
      </PosterWrapper>
  );
}

const PosterWrapper = styled.article`
  width: calc(50% - 15px);
  max-width: 200px;
  box-shadow: 0 2px 4px 2px rgba(0,0,0,0.1);
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
`;

const PosterFigure = styled.figure`
  padding-bottom: 143%;
  position: relative;
`;

const PosterImage = styled.img.attrs(props=>({
  src:props.src || "",
  alt:props.alt || "",
}))`
  position: absolute;
  width: 94%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-user-drag: none;
`;

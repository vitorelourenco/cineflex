import styled from 'styled-components';

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

export default PosterImage;

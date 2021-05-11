import styled from 'styled-components';
import Poster from './Poster';

export default function Home(){
  return (
    <Catalog>
      <Poster key={1} imgSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362" imgAlt={"banana"}></Poster>
      <Poster key={1} imgSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362" imgAlt={"banana"}></Poster>
      <Poster key={1} imgSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362" imgAlt={"banana"}></Poster>
      <Poster key={1} imgSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362" imgAlt={"banana"}></Poster>
      <Poster key={1} imgSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362" imgAlt={"banana"}></Poster>

    </Catalog>
  );
}

const Catalog = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 12px;
  column-gap: 30px;
`;

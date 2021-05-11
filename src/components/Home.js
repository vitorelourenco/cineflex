import styled from 'styled-components';
import Poster from './Poster';
import MainWrapper from './MainWrapper';
import SeatSelection from './SeatSelection';

export default function Home(){
  return (
    <>
    <MainWrapper>
      <Instruction>Selecione o filme</Instruction>
      <Catalog>
        <Poster key={1} imgSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362" imgAlt={"banana"}></Poster>
        <Poster key={1} imgSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362" imgAlt={"banana"}></Poster>
        <Poster key={1} imgSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362" imgAlt={"banana"}></Poster>
        <Poster key={1} imgSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362" imgAlt={"banana"}></Poster>
        <Poster key={1} imgSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362" imgAlt={"banana"}></Poster>

      </Catalog>
    </MainWrapper>
    <SeatSelection />
    </>
  );
}

const Instruction = styled.h2`
  font-size: min(8vw, 38px);
  margin-bottom: 35px;
  margin-top: 35px;
`;

const Catalog = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 12px;
  column-gap: 30px;
`;

import styled from 'styled-components';
import Poster from './Poster';
import MainWrapper from './MainWrapper';
import SeatSelection from './SeatSelection';
import Instruction from './Instruction';

const posters = [
  {
    key:1,
    imgSrc:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362",
    imgAlt:"banana",
  },
  {
    key:2,
    imgSrc:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362",
    imgAlt:"banana",
  },
  {
    key:3,
    imgSrc:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362",
    imgAlt:"banana",
  },
  {
    key:4,
    imgSrc:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362",
    imgAlt:"banana",
  },
  {
    key:5,
    imgSrc:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362",
    imgAlt:"banana",
  },
]

export default function Home(){
  return (
    <>
    <MainWrapper>
      <Instruction>Selecione o filme</Instruction>
      <Catalog>
        {posters.map(({imgSrc, imgAlt, key}) => <Poster key={key} imgSrc={imgSrc} imgAlt={imgAlt} />)}
      </Catalog>
    </MainWrapper>
    <SeatSelection />
    </>
  );
}

const Catalog = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 12px;
  column-gap: 30px;
`;

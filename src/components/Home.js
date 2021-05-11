import Poster from './Poster';
import MainWrapper from './MainWrapper';
import Instruction from './Instruction';
import Catalog from './Catalog';
import axios from 'axios';
import { useState, useEffect } from 'react';
import apiURL from '../ra_api';

export default function Home(){

  const [posters,setPosters] = useState([]);

  useEffect(()=>{
    axios
    .get(apiURL)
    .then(({data})=>{
      setPosters(data);
    })
    .catch(err =>{
      console.log(err);
    });
  })

  return (
    <>
    <MainWrapper>
      <Instruction>Selecione o filme</Instruction>
      <Catalog>
        {posters.map(({posterURL, title, id}) => <Poster key={id} id={id} posterURL={posterURL} title={title} />)}
      </Catalog>
    </MainWrapper>
    </>
  );
}

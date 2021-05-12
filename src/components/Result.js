import axios from 'axios';
import { useState , useEffect} from 'react';
import apiURL from '../ra_api';

export default function Result({sessionState}){
  const [state, setState] =  useState(null);

  const [ids, names] = filterState(sessionState);
  const {customerCPF, customerName} = sessionState;
  
  const letter = customerCPF&&customerName&&ids 
    ? { ids, cpf:customerCPF , name:customerName }
    : {};
  
  console.log(letter);
  useEffect(()=>{
    axios
    .post(apiURL+"/seats/book-many", letter)
    .then(()=>{
      setState(true);
    })
    .catch(()=>{
      setState(false);
    })
  },[]);

  if (state === null) return (<h3>processing order</h3>);

  if (state === false) return (<h3>processing error</h3>);

  return (
    <>
    </>
  );
}

function getLetter(name,cpf,ids){
  
}

function filterState(state){
  if (!state.hasOwnProperty("seats")) {
    return [[],[]];
  }

  const names = [];
  const ids = [];
  state.seats.forEach(seat => {
    if(seat.status === "selected") {
      names.push(seat.name);
      ids.push(seat.id);
    }
  });
  return [names, ids];
}


import styled from 'styled-components';

export default function InputField({labelText, placeholder, state, setState, id, type, name}){
  return (
    <InputWrapper>
      <label htmlFor={id}>{labelText}</label>
      <input 
        id={id}
        type={type} 
        placeholder={placeholder} 
        value={state}
        name={name}
        onChange={(e)=>setState(e.target.value)}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  input{
    border-radius: 3px;
    border: 1px solid #d5d5d5;
    background: white;
    height: 50px;
    display: block;
    width: 100%;
    padding-left: 10px;
    margin-top: 5px;
  }
`
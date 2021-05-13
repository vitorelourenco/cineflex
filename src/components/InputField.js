import * as S from './styledcomponents/exporter'

export default function InputField({labelText, placeholder, state, setState, id, type, name}){
  return (
    <S.InputWrapper>
      <label htmlFor={id}>{labelText}</label>
      <input 
        id={id}
        type={type} 
        placeholder={placeholder} 
        value={state}
        name={name}
        onChange={(e)=>setState(e.target.value)}
      />
    </S.InputWrapper>
  );
}

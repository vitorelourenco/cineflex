import styled from 'styled-components';

export default function Header(){
  return (
    <StyledHeader>
      <h1>CINEFLEX</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  max-width: 100%;
  height: 67px;
  background-color: #c3cfd9;
  justify-content: center;
  align-items:center;
  font-size: 34px;
  line-height: 40px;
  color: #e8833a;
`;

import styled from 'styled-components';
import Poster from './Poster';

export default function Footer({id, posterURL, title, text1, text2, isLink}){
  return (
    <FooterWrapper>
      <Poster id={id} posterURL={posterURL} title={title} isLink={isLink} widthCSS={"65px;"}/>
      <PGroup>
        {!!text1 ? (<p>{text1}</p>) : ""}
        {!!text2 ? (<p>{text2}</p>) : ""}
      </PGroup>
    </FooterWrapper>
  );
}

const PGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-left: 10px;
`;

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #dfe6ed;
  font-size: 26px;
  color: #293845;
  border: 1px solid #9eadba;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  box-sizing: content-box;
`
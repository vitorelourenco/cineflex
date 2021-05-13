import Poster from './Poster';
import * as S from './styledcomponents/exporter'

export default function Footer({id, posterURL, title, text1, text2, isLink}){
  return (
    <S.FooterWrapper>
      <Poster id={id} posterURL={posterURL} posterAlt={title} isLink={isLink} widthCSS={"65px;"}/>
      <S.PGroup>
        {!!text1 ? (<p>{text1}</p>) : ""}
        {!!text2 ? (<p>{text2}</p>) : ""}
      </S.PGroup>
    </S.FooterWrapper>
  );
}

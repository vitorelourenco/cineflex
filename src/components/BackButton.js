import * as S from './styledcomponents/exporter';
import {useHistory} from 'react-router-dom';

export default function BackButton(){
  const history = useHistory();
  function goBack(e){
    e.stopPropagation();
    history.goBack();
  }
  return (
    <S.BackButtonWrapper onClick={goBack}>
      <S.NextButton>
        ←Voltar
      </S.NextButton>
    </S.BackButtonWrapper>
  );
}

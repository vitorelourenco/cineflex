import styled from 'styled-components';

const PosterWrapper = styled.article`
width: ${props => props.widthCSS};
max-width: 200px;
box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
user-select: none;
`;

export default PosterWrapper;

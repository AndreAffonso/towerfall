import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);

  /* font-family: 'Amarante', cursive; */
  /* font-family: 'Nova Cut', cursive; */
  /* font-family: 'Germania One', cursive; */
  font-family: ${props => props.theme.font};
`;

export default Title;

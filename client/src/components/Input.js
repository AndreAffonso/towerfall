import styled from 'styled-components';

const Input = styled.input`
  font-family: ${props => props.theme.font};
  background: black;
  color: #aaa;
  border: none;
  border-bottom: 0.2rem solid #aaa;
  font-size: 2rem;
  caret-color: #aaa;

  &:focus {
    outline: none;
  }
`;

export default Input;

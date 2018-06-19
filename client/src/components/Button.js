import styled from 'styled-components';

const Button = styled.div`
  padding: 1rem;
  margin: 1rem;
  font-size: 1.5rem;
  border: 0.2rem solid #aaa;
  background: none;
  color: #aaa;
  font-family: ${props => props.theme.font};
  text-align: center;
  transition: all 0.8s;
  &:hover {
    background: #aaa;
    color: black;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;

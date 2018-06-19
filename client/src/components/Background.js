import styled from 'styled-components';
import img from '../img/scenary.gif';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Background;

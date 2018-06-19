import styled from 'styled-components';
import { SCREEN } from '../utils/constants';

const Game = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${SCREEN.WIDTH};
  height: ${SCREEN.HEIGHT};
  transform: translate(-50%, -50%);
  background: black;
`;

export default Game;

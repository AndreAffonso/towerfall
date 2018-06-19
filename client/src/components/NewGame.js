import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { STAGE } from '../utils/constants';

const NewGameContainer = styled.div`
  margin: 20% 10%;
`;

const NewGame = props => (
  <NewGameContainer>
    <Button onClick={() => props.setStage(STAGE.USER_NAME)}>Novo Jogo</Button>
    <Button onClick={() => props.setStage(STAGE.INSTRUCTIONS)}>Instruções</Button>
  </NewGameContainer>
);

export default NewGame;

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { STAGE } from '../utils/constants';

const Wrapper = styled.div`
  margin: 0% 10%;
`;

const InstructionsText = styled.p`
  padding: 1rem;
  font-size: 18px;
  font-family: ${props => props.theme.font};
  text-align: justify;
  color: #aaa;
  max-height: 300px;
  overflow: auto;
`;

const Instructions = props => (
  <Wrapper>
    <InstructionsText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, harum recusandae tempore omnis suscipit
      officiis ut voluptatum ipsa, consequatur labore, delectus quidem dolore nostrum fuga nisi rem reiciendis vel
      reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quam cumque eos iure tempora
      atque, suscipit nobis rem provident, perspiciatis officiis labore. Magnam, praesentium impedit repudiandae
      voluptate assumenda quo molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iusto,
      debitis quidem quia, quisquam, quos hic necessitatibus laudantium eius velit esse at soluta. Quos, ipsum
      laboriosam illum repellat quas minus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
      sequi, facilis dolorem laborum, ad quisquam numquam nam minima natus nostrum architecto alias nisi voluptas
      tempora sint. Cumque quibusdam quasi odit!
    </InstructionsText>
    <Button onClick={() => props.setStage(STAGE.NEW_GAME)}>Voltar</Button>
  </Wrapper>
);

export default Instructions;

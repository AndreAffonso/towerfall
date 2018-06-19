import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import STAGE from '../utils/stages';
import Input from '../components/Input';

const UserNameContainer = styled.div`
  text-align: center;
  margin: 20% 10%;
`;

// onPlay = e => {
//   props.setStage(STAGE.FIGHT);
//   props.setName(e.target.value);
// };

class UserName extends Component {
  state = {
    typedName: '',
  };

  handleChange = e => this.setState({ typedName: e.target.value });

  render() {
    return (
      <UserNameContainer>
        <Input onChange={this.handleChange} placeholder="Digite seu nome" type="text" />
        <Button
          onClick={e => {
            this.props.setStage(STAGE.FIGHT);
            this.props.setName(this.state.typedName);
          }}
        >
          Começar
        </Button>
      </UserNameContainer>
    );
  }
}

export default UserName;

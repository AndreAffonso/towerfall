import React, { Component } from 'react';
import styled from 'styled-components';
import Game from './Game';
import { STAGE, SCREEN } from '../utils/constants';
import NewGame from './NewGame';
import UserName from './UserName';
import Instructions from './Instructions';
import arena from '../img/s.jpg';

const Relative = styled.div`
  position: relative;
`;

const Fight = styled.div`
  position: absolute;
  color: white;
  top: 0;
  left: 0;
  width: ${SCREEN.WIDTH};
  height: ${SCREEN.HEIGHT};
  background: url(${arena});
  background-size: cover;
  background-repeat: no-repeat;
`;

class GameContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: STAGE.NEW_GAME,
    };
  }

  onSetStage = stage => {
    this.setState({ stage });
  };

  onRenderStage = () => {
    switch (this.state.stage) {
      case STAGE.NEW_GAME:
        return <NewGame setStage={this.onSetStage} />;
      case STAGE.USER_NAME:
        return <UserName setName={this.props.setName} setStage={this.onSetStage} />;
      case STAGE.FIGHT:
        return (
          <Fight>
            <h3>{this.props.name}</h3>
          </Fight>
        );
      case STAGE.INSTRUCTIONS:
        return <Instructions setStage={this.onSetStage} />;
      default:
        return <div>TowerFall</div>;
    }
  };

  render() {
    return (
      <Game>
        <Relative>{this.onRenderStage()}</Relative>
      </Game>
    );
  }
}

export default GameContainer;

import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
// Utils
import STAGE from '../utils/stages';
// Components
import Title from '../components/Title';
import Background from '../components/Background';
import GameContainer from '../components/GameContainer';
import AudioPlayer from '../components/AudioPlayer';
import Chat from '../components/Chat/Chat';

const theme = {
  font: 'New Rocker',
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
    };
  }

  handleName = name => this.setState({ name });

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Background>
          <Title>TowerFall Ascension</Title>
          <GameContainer setName={this.handleName} name={this.state.name} />
          <AudioPlayer />
          {this.state.name !== null && <Chat username={this.state.name} />}
        </Background>
      </ThemeProvider>
    );
  }
}

export default App;

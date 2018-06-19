import React, { Component } from 'react';
import styled from 'styled-components';

import openSocket from 'socket.io-client';
import moment from 'moment';

const socket = openSocket('200.235.86.42:3001');

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  height: 100%;
  width: 400px;
  left: 0%;
  transform: translate(0%, -50%);
  background: rgba(0, 0, 0, 0.7);
`;

const TextInput = styled.input`
  position: absolute;
  bottom: 0;
  width: 350px;
  background: none;
  box-sizing: border-box;
  padding: 1rem;
  display: block;
  color: #eee;
  font-weight: bold;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const P = styled.p`
  color: #eee;
  text-align: center;
  display: block;
  font-weight: bold;
`;

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [''],
    };
  }

  componentDidMount() {
    console.log('vrau');
    socket.emit('add user', this.props.username);

    socket.on('user joined', data => {
      this.setState({ messages: [...this.state.messages, `${data.username} entrou na sala`] });
    });
  }

  onSendMessage = e => {
    // alert(e.target.value);

    if (e.key === 'Enter') {
      this.setState({
        messages: [...this.state.messages, `Eu: ${e.target.value} - ${moment(Date.now()).format('HH:mm')}`],
      });
      socket.emit('new message', e.target.value);

      socket.on('new message', ({ username, message, createdAt }) =>
        this.setState({
          messages: [...this.state.messages, `${username}: ${message} - ${moment(createdAt).format('HH:mm')}`],
        })
      );

      e.target.value = '';
      console.log(this.state.messages);
    }
  };

  render() {
    const { messages } = this.state;
    return (
      <Wrapper>
        {messages.map((message, i) => <P key={message}>{message}</P>)}
        <TextInput onKeyPress={this.onSendMessage} type="text" />
      </Wrapper>
    );
  }
}

export default Chat;

import React, { Component } from 'react';
import LoginWrapContainer from './containers/LoginWrapContainer';
import ChatWrapContainer from './containers/ChatWrapContainer';
import io from 'socket.io-client';
dotenv.config();
const socket = io(process.env.REACT_APP_SOCKET_HOST);
// const socket = io();

class App extends Component {
  render() {
    return (
      <ul className="pages">
        <ChatWrapContainer socket={ socket } />
        <LoginWrapContainer socket={ socket } />
      </ul>
    );
  }
}

export default App;

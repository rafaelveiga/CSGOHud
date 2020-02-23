import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import openSocket from 'socket.io-client';
import Scoreboard from './components/Scoreboard';
import PlayerList from './components/PlayerList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    }

    this.socket = openSocket("http://127.0.0.1:3000");
  }

  componentDidMount() {
    console.log(this.socket);
    this.socket.on('update', (data) => {
      console.log(data);

      this.setState({
        data,
      })
    })
  }

  render() {
    const {
      data,
    } = this.state;

    return (
      <AppContainer>
        {
          data &&
          <Fragment>
            <StyledScoreboard map={data.map} phase={data.phase_countdowns} />
            <PlayerList ct players={data.allplayers} />
          </Fragment>
        }
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  width: 1920px;
  height: 1080px;
  box-sizing: border-box;
`

const StyledScoreboard = styled(Scoreboard)`
  padding-top: 24px;
`

export default App;

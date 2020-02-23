import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import openSocket from 'socket.io-client';
import Scoreboard from './components/Scoreboard';
import PlayerList from './components/PlayerList';
import CurrentPlayer from './components/CurrentPlayer';

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

  getTeamPlayers = (players, side) => (
    Object.keys(players)
      .map(playerKey => {
        return players[playerKey];
      })
      .filter(player => player.team === side)
  )

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
            <CTPlayerList side="CT" players={this.getTeamPlayers(data.allplayers, "CT")} />
            <TPlayerList side="T" players={this.getTeamPlayers(data.allplayers, "T")} />
            
            <StyledCurrentPlayer data={data.player} />
          </Fragment>
        }
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  width: 1920px;
  height: 1080px;
  position: relative;
  box-sizing: border-box;
`

const StyledScoreboard = styled(Scoreboard)`
  padding-top: 24px;
`

const CTPlayerList = styled(PlayerList)`
  position: absolute;
  left: 20px;
  bottom: 100px;
`

const TPlayerList = styled(PlayerList)`
  position: absolute;
  right: 20px;
  bottom: 100px;
`

const StyledCurrentPlayer = styled(CurrentPlayer)`
  position: absolute;
  bottom: 60px;
  width: 100%;
`

export default App;

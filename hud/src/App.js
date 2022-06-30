import React, { Component, Fragment } from "react";
import styled from "styled-components";
import openSocket from "socket.io-client";
import Scoreboard from "./components/Scoreboard";
import PlayerList from "./components/PlayerList";
import CurrentPlayer from "./components/CurrentPlayer";
import Radar from "./components/Radar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };

    this.socket = openSocket("http://localhost:3000", {
      transports: ["websocket"],
    });
  }

  componentDidMount() {
    console.log(this.socket);
    this.socket.on("update", (data) => {
      console.log(data);

      this.setState({
        data,
      });
    });
  }

  getTeamPlayers = (players, side) =>
    Object.keys(players)
      .map((playerKey) => {
        return players[playerKey];
      })
      .filter((player) => player.team === side);

  render() {
    const { data } = this.state;

    return (
      <AppContainer>
        {data && (
          <Fragment>
            <StyledScoreboard map={data.map} phase={data.phase_countdowns} />
            <CTPlayerList
              side="CT"
              players={this.getTeamPlayers(data.allplayers, "CT")}
            />
            <TPlayerList
              reverse
              side="T"
              players={this.getTeamPlayers(data.allplayers, "T")}
            />
            <StyledRadar
              ctPlayers={this.getTeamPlayers(data.allplayers, "CT")}
              tPlayers={this.getTeamPlayers(data.allplayers, "T")}
            />

            <StyledCurrentPlayer data={data.player} />
          </Fragment>
        )}
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  width: 1920px;
  height: 1080px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  background-image: url("https://i.ytimg.com/vi/_w3EfnVc6CI/maxresdefault.jpg");
  background-size: cover;
`;

const StyledScoreboard = styled(Scoreboard)`
  padding-top: 24px;
`;

const CTPlayerList = styled(PlayerList)`
  position: absolute;
  left: 20px;
  bottom: 100px;
`;

const TPlayerList = styled(PlayerList)`
  position: absolute;
  right: 20px;
  bottom: 100px;
`;

const StyledCurrentPlayer = styled(CurrentPlayer)`
  position: absolute;
  bottom: 60px;
  width: 100%;
`;

const StyledRadar = styled(Radar)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export default App;

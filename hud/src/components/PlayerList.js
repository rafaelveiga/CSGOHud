import React from 'react';
import styled from 'styled-components';

const PlayerList = (props) => (
  <PlayerListContainer>
    {
      Object.keys(props.players).map(playerId => (
        <Player>
          {props.players[playerId].name}
        </Player>
      ))
    }
  </PlayerListContainer>
)

const PlayerListContainer = styled.div`

`

const Player = styled.div``

export default PlayerList;


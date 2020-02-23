import React from 'react';
import styled from 'styled-components';
import Player from './Player';

const PlayerList = (props) => (
  <PlayerListContainer>
    {
      Object.keys(props.players).map(playerId => (
        <Player data={props.players[playerId]} />
      ))
    }
  </PlayerListContainer>
)

const PlayerListContainer = styled.div`

`

export default PlayerList;


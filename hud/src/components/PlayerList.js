import React from 'react';
import styled from 'styled-components';
import Player from './Player';

const PlayerList = (props) => (
  <PlayerListContainer className={props.className || ''}>
    {
      Object.keys(props.players).map(playerId => (
        <Player side={props.side} data={props.players[playerId]} />
      ))
    }
  </PlayerListContainer>
)

const PlayerListContainer = styled.div`

`

export default PlayerList;


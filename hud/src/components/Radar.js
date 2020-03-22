import React from 'react';
import styled from "styled-components";
import colors from '../config/styles';

const Radar = ({ className, ctPlayers, tPlayers }) => {
  // Coordinates
  // =========================
  // Mirage
  // setpos 0,0 = top 94px; left: 197px;
  // map bound coordinates:
  // max y = -2627.345947
  // max x = 1099.107666
  // min y = 910.639160 
  // min x = -2697.906494
  // radar bound coordinates:
  // max y = 262
  // max x = 285
  // min y = 29
  // min x = 11
  
  const HUD_MIN_X = 11;
  const HUD_MIN_Y = 30;
  const HUD_MAX_X = 285;
  const HUD_MAX_Y = 262;

  const MAP_MIN_X = -2697.906494;
  const MAP_MIN_Y = 910.639160;
  const MAP_MAX_X = 1099.107666;
  const MAP_MAX_Y = -2627.345947;

  const getPlayerX = (playerObj) => {
    const x = playerObj.position.split(',')[0];  

    return getHudCoordinates(
      x,
      MAP_MIN_X,
      MAP_MAX_X,
      HUD_MIN_X,
      HUD_MAX_X,
    );
  }

  const getPlayerY = (playerObj) => {
    const y = playerObj.position.split(',')[1];  

    return getHudCoordinates(
      y,
      MAP_MIN_Y,
      MAP_MAX_Y,
      HUD_MIN_Y,
      HUD_MAX_Y,
    );
  }

  const getHudCoordinates = (mapValue, mapMin, mapMax, hudMin, hudMax) => {
    return hudMin + (hudMax - hudMin) * (mapValue - mapMin) / (mapMax - mapMin);
  }

  return (
    <RadarContainer className={className}>
      {
        ctPlayers.map(player => (
          <Player ct x={getPlayerX(player)} y={getPlayerY(player)} />
        ))
      }
      {
        tPlayers.map(player => (
          <Player x={getPlayerX(player)} y={getPlayerY(player)} />
        ))
      }
    </RadarContainer>
  );
}

const RadarContainer = styled.div`
  height: 300px;
  width: 300px;
  background: url(/radar/de_mirage.png);
  background-size: cover;
  background-position: center;
  background-size: 115%;
  position: relative;
`

const Player = styled.div`
  background: ${props => props.ct ? colors.CT_GRADIENT : colors.TR_GRADIENT};
  width: 10px;
  height: 10px;
  border-radius: 10px;
  position: absolute;
  transition: all 1s;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
`

export default Radar;


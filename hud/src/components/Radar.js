import React from 'react';
import styled from "styled-components";

const Radar = (props) => {
  // Coordinates
  // =========================
  // Mirage
  // setpos 0,0 = top 94px; left: 197px;
  // map bound coordinates:
  // max y = ?
  // max x = ?
  // min y = ?
  // min x = ?:
  // radar bound coordinates:
  // max y = ?
  // min y = ?
  // max x = ?
  // min x = ?
  //
  // N = x / y
  // Z = CSGO X or Y player pos
  // radarMinN + (radarMaxN - radarMinN) * (Z - mapMinN) / (mapMaxN - mapMinN)

  return (
    <RadarContainer className={props.className}>
      <Player />
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
  background: red;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  position: absolute;
  top: 150px;
  left: 150px;
`

export default Radar;


import React from 'react';
import styled from 'styled-components';
import colors from '../config/styles';

const Player = (props) => (
  <PlayerContainer>
    <PlayerPhoto />
    <PlayerData>
      <DamageHealthbar style={{ width: `${props.data.state.health}%` }} />
      <Healthbar style={{ width: `${props.data.state.health}%` }} />
      <PlayerMeta>
        <span>{props.data.state.health}</span>
        {props.data.name}
      </PlayerMeta>
    </PlayerData>
  </PlayerContainer>
)

const PlayerContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
`

const PlayerPhoto = styled.div`
  width: 50px;
  height: 50px;
  background: red;
`

const PlayerData = styled.div`
  width: 250px;
  height: 50px;
  margin-left: 8px;
  background: ${colors.DARKER_GRAY_90};
`

const Healthbar = styled.div`
  background: ${colors.CT};
  height: 25px;
  transition: all 0.2s;
  margin-bottom: -25px;
`

const DamageHealthbar = styled.div`
  background: red;
  height: 25px;
  transition: all 1s;
  margin-bottom: -25px;
`
const PlayerMeta = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 14px;

  & span {
    width: 35px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    background: rgba(0,0,0,0.2);
    margin-right: 8px;
  }
`

export default Player;


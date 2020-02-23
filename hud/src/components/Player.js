import React from 'react';
import styled from 'styled-components';
import colors from '../config/styles';

const Player = (props) => (
  <PlayerContainer>
    <PlayerPhoto />
    <PlayerData>
      <HealthbarContainer>
        <DamageHealthbar style={{ width: `${props.data.state.health}%` }} />
        <Healthbar side={props.side} style={{ width: `${props.data.state.health}%` }} />
      </HealthbarContainer>
      <PlayerMeta>
        <span>{props.data.state.health}</span>
        {props.data.name}
      </PlayerMeta>
      <PlayerStats>
        ${props.data.state.money}
      </PlayerStats>
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
  background: ${colors.DARKER_GRAY_90};
`

const PlayerData = styled.div`
  width: 250px;
  height: 50px;
  margin-left: 4px;
  background: ${colors.DARKER_GRAY_90};
`

const HealthbarContainer = styled.div`
  margin-bottom: -25px;
  background: ${colors.DARKER_GRAY_90};
`

const Healthbar = styled.div`
  background: ${props => props.side === 'CT' ? colors.CT : colors.TR};
  height: 25px;
  transition: all 0.2s;
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
  text-shadow: 0px 0px 3px rgba(0,0,0,0.5);

  & span {
    width: 35px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    background: rgba(0,0,0,0.2);
    margin-right: 8px;
  }
`

const PlayerStats = styled.div`
  font-weight: bold;
  color: green;
  font-size: 14px;
  line-height: 25px;
  padding: 0 10px;
`;

export default Player;


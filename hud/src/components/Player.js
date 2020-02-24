import React from 'react';
import styled from 'styled-components';
import colors from '../config/styles';

const Player = (props) => (
  <PlayerContainer reverse={props.reverse} health={props.data.state.health}>
    <PlayerPhoto />
    <PlayerData reverse={props.reverse}>
      <HealthbarContainer reverse={props.reverse}>
        <DamageHealthbar style={{ width: `${props.data.state.health}%` }} />
        <Healthbar side={props.side} style={{ width: `${props.data.state.health}%` }} />
      </HealthbarContainer>
      <PlayerMeta reverse={props.reverse}>
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
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  margin-bottom: 12px;
  opacity: ${props => props.health === 0 ? '0.5' : '1'};
  transition: all 0.2s;
`

const PlayerPhoto = styled.div`
  width: 50px;
  height: 50px;
  background: url('https://static.hltv.org//images/playerprofile/bodyshot/compressed/4954.png') ${colors.DARKER_GRAY_90};
  background-size: 150%;
  background-position: top;
`

const PlayerData = styled.div`
  width: 250px;
  height: 50px;
  margin-left: ${props => props.reverse ? '0px' : '4px'};
  margin-right: ${props => props.reverse ? '4px' : '0px'};
  background: ${colors.DARKER_GRAY_90};
`

const HealthbarContainer = styled.div`
  margin-bottom: -25px;
  background: ${colors.DARKER_GRAY_90};
  transform: ${props => props.reverse ? 'scaleX(-1)' : 'none'}
`

const Healthbar = styled.div`
  background: ${props => props.side === 'CT' ? colors.CT_GRADIENT : colors.TR_GRADIENT };
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
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  position: relative;

  & span {
    width: 35px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    background: rgba(0,0,0,0.2);
    margin-right: ${props => props.reverse ? '0px' : '8px'};
    margin-left: ${props => props.reverse ? '8px' : '0px'};
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


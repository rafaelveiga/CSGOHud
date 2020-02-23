import React from 'react';
import styled from 'styled-components';
import colors from '../config/styles';
import moment from 'moment';

const Scoreboard = (props) => (
  <ScoreboardContainer className={props.className || ''}>
    <ScoreboardItems>
      <Team ct>{props.map.team_ct.name}</Team>
      <Score ct>{props.map.team_ct.score}</Score>
      <Time>
        <span>{moment.utc((parseFloat(props.phase.phase_ends_in) + 1)*1000).format('mm:ss')}</span>
        <small>{props.map.round}/30</small>
      </Time>
      <Score>{props.map.team_t.score}</Score>
      <Team>{props.map.team_t.name}</Team>
    </ScoreboardItems>
  </ScoreboardContainer>
)

const ScoreboardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`

const ScoreboardItems = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`

const Team = styled.div`
  font-weight: bold;
  background: ${colors.DARKER_GRAY_90};

  width: 200px;
  font-size: 20px;
  color: white;
  line-height: 38px;
  padding: 0 20px;
  height: 40px;
  box-sizing: border-box;

  &:first-child {
    text-align: right;
  }
`

const Score = styled.div`
  color: white;
  margin: 0;
  background: ${colors.DARK_GRAY_90};
  line-height: 54px;
  padding: 0 20px;
  font-weight: bold;
  font-size: 32px;
  border-bottom: 5px solid ${props => props.ct ? colors.CT : colors.TR};
  height: 60px;
  box-sizing: border-box;
`

const Time = styled.div`
  background: ${colors.DARKER_GRAY_90};
  color: white;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60px;
  box-sizing: border-box;

  & span {
    font-weight: bold;
    font-size: 20px;
    margin-top: 0px;
  }

  & small {
    font-size: 10px;
    font-weight: bold;
    color: ${colors.GRAY}
  }
`

export default Scoreboard;


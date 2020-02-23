import React from 'react';
import styled from 'styled-components';
import colors from '../config/styles';

const CurrentPlayer = (props) => (
  <CurrentPlayerContainer className={props.className || ''}>
    <PlayerData>
      <Bodyshot src="https://static.hltv.org//images/playerprofile/bodyshot/compressed/429.png" />
      {props.data.name}
    </PlayerData>
    <PlayerStats />
  </CurrentPlayerContainer>
);

const CurrentPlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const PlayerStats = styled.div`
  height: 50px;
  width: 500px;
  background: ${colors.DARKER_GRAY};
`;

const PlayerData = styled.div`
  height: 50px;
  width: 500px;
  background: ${colors.DARKER_GRAY_90};
`;

const Bodyshot = styled.img`
  width: 159px;
  position: relative;
  top: -117px;
  margin-bottom: -117px;
  left: -10px;
`;

export default CurrentPlayer;


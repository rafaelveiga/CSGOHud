import React from "react";
import styled from "styled-components";
import colors from "../config/styles";

const Player = props => {
  const weapons = Object.keys(props.data.weapons).map(
    weaponKey => props.data.weapons[weaponKey]
  );

  const pistol = weapons.filter(weapon => weapon.type === "Pistol")[0];
  const main = weapons.filter(
    weapon =>
      weapon.type !== "Pistol" &&
      weapon.type !== "Knife" &&
      weapon.type !== "Grenade"
  )[0];

  const renderWeaponImage = weaponObj => (
    <WeaponImg
      reverse={props.reverse}
      active={weaponObj.state === "active"}
      src={`/weapons/${weaponObj.name.replace("weapon_", "")}.png`}
      height="15"
      alt=""
    />
  );

  return (
    <PlayerContainer reverse={props.reverse} health={props.data.state.health}>
      <PlayerPhoto />
      <PlayerData reverse={props.reverse}>
        <HealthbarContainer reverse={props.reverse}>
          <DamageHealthbar style={{ width: `${props.data.state.health}%` }} />
          <Healthbar
            side={props.side}
            style={{ width: `${props.data.state.health}%` }}
          />
        </HealthbarContainer>
        <PlayerMeta reverse={props.reverse}>
          <span>{props.data.state.health}</span>
          <PlayerName reverse={props.reverse}>{props.data.name}</PlayerName>

          {main && renderWeaponImage(main)}
          {!main && pistol && renderWeaponImage(pistol)}
        </PlayerMeta>
        <PlayerStats reverse={props.reverse}>
          ${props.data.state.money}
          {main && pistol && renderWeaponImage(pistol)}
        </PlayerStats>
      </PlayerData>
    </PlayerContainer>
  );
};

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  margin-bottom: 12px;
  opacity: ${props => (props.health === 0 ? "0.5" : "1")};
  transition: all 0.2s;
`;

const PlayerPhoto = styled.div`
  width: 50px;
  height: 50px;
  background: url("https://static.hltv.org//images/playerprofile/bodyshot/compressed/4954.png")
    ${colors.DARKER_GRAY_90};
  background-size: 150%;
  background-position: top;
`;

const PlayerData = styled.div`
  width: 250px;
  height: 50px;
  margin-left: ${props => (props.reverse ? "0px" : "4px")};
  margin-right: ${props => (props.reverse ? "4px" : "0px")};
  background: ${colors.DARKER_GRAY_90};
`;

const HealthbarContainer = styled.div`
  margin-bottom: -25px;
  background: ${colors.DARKER_GRAY_90};
  transform: ${props => (props.reverse ? "scaleX(-1)" : "none")};
`;

const Healthbar = styled.div`
  background: ${props =>
    props.side === "CT" ? colors.CT_GRADIENT : colors.TR_GRADIENT};
  height: 25px;
  transition: all 0.2s;
`;

const DamageHealthbar = styled.div`
  background: red;
  height: 25px;
  transition: all 1s;
  margin-bottom: -25px;
`;
const PlayerMeta = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  position: relative;

  & span {
    width: 35px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    background: rgba(0, 0, 0, 0.2);
    margin-right: ${props => (props.reverse ? "0px" : "8px")};
    margin-left: ${props => (props.reverse ? "8px" : "0px")};
  }
`;

const PlayerStats = styled.div`
  font-weight: bold;
  color: #74c37c;
  font-size: 14px;
  line-height: 25px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
`;

const PlayerName = styled.div`
  flex: 1;
  text-align: ${props => (props.reverse ? "right" : "left")};
`;

const WeaponImg = styled.img`
  filter: invert(1);
  ${props => props.reverse && "transform: scaleX(-1);"}
  margin: 0 8px;
  opacity: ${props => (props.active ? 1 : 0.5)};
`;

export default Player;

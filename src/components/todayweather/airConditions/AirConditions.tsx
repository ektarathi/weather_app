import * as React from "react";
import {
  HeadingText,
  AirConditionsSection,
} from "./air-conditions.styled";

// components
import AirConditionsItems from "./AirConditionsItem";

interface AirConditionsProps {
  data: any;
}

const AirConditions: React.FC<AirConditionsProps> = ({ data }) => {
  return (
    <>
      <HeadingText>AIR CONDITIONS</HeadingText>
      <AirConditionsSection>
        <AirConditionsItems title={"Real Feel"} value={`${Math.round(data.main.feels_like)} °C`} type="temperature"/>
        <AirConditionsItems title={"Wind"} value={`${data.wind.speed} m/s`} type="wind"/>
        <AirConditionsItems title={"Clouds"} value={`${data.clouds.all} %`} type="clouds"/>
        <AirConditionsItems title={"Humidity"} value={`${data.main.humidity} %`} type="humidity"/>
      </AirConditionsSection>
    </>
  );
};

export default AirConditions;

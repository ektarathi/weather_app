import * as React from "react";

import {
  WeatherDetails,
  InfoTextHeading,
  InfoText,
  InfoTitleText
} from "./air-conditions-items.styled";
import { CloudIcon, HumidityIcon, TemperatureIcon, WindIcon } from "../../icons/icon";

interface AirConditionsItemsProps {
  title: string;
  value: string;
  type: string;
}
const AirConditionsItems: React.FC<AirConditionsItemsProps> = ({
  title,
  value,
  type,
}) => {
  let iconContent;

  if (type === "temperature") iconContent = TemperatureIcon;
  else if (type === "wind") iconContent = WindIcon;
  else if (type ==="clouds") iconContent = CloudIcon;
  else if ( type === "humidity") iconContent = HumidityIcon;

  return (
    <WeatherDetails>
      <InfoTextHeading>
        {iconContent}
        <InfoTitleText>{title}</InfoTitleText>
      </InfoTextHeading>
      <InfoText>{value}</InfoText>
    </WeatherDetails>
  );
};

export default AirConditionsItems;

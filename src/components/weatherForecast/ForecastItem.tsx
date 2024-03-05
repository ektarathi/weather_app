import * as React from "react";
import {
  CloudIcon,
  HumidityIcon,
  TemperatureIcon,
  WindIcon,
} from "../icons/icon";
import { ForecastDetails, Icon } from "./forecast-item.styled";

interface ForecastItemProps {
  value: string;
  type: string;
}

const ForecastItem: React.FC<ForecastItemProps> = ({ value, type }) => {
  let iconContent;

  if (type === "temperature") iconContent = TemperatureIcon;
  else if (type === "wind") iconContent = WindIcon;
  else if (type === "clouds") iconContent = CloudIcon;
  else if (type === "humidity") iconContent = HumidityIcon;

  return (
    <ForecastDetails>
      <Icon>{iconContent}</Icon>
      {value}
    </ForecastDetails>
  );
};

export default ForecastItem;

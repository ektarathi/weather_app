import * as React from "react";
import {
  WeatherInfo,
  WeatherDetails,
  HeadingText,
  WeatherDetailsSection,
  InfoText,
  InfoTextTitle
} from "./weather.styled";
import { useSelector } from "react-redux";
import AirConditions from "./airConditions/AirConditions";

import { format } from 'date-fns'

type RootState = {
  name: {
    cityName: string;
  };
};

interface TodayWeatherProps {
  todayWeather: any;
}

const TodayWeather: React.FC<TodayWeatherProps> = ({ todayWeather }) => {
  // redux state
  const cityName = useSelector((state: RootState) => state.name.cityName);

  return (
    <>
      <WeatherInfo>
        <HeadingText>CURRENT WEATHER</HeadingText>
        <WeatherDetailsSection>
          <WeatherDetails>
            <InfoTextTitle>{cityName}</InfoTextTitle>
            <InfoText>{`Today ${format(Date.now(), "MMM d")}`}</InfoText>
          </WeatherDetails>
          <WeatherDetails>
            <InfoTextTitle>{Math.round(todayWeather.main.temp)} °C</InfoTextTitle>
            <InfoText>{todayWeather.weather[0].description}</InfoText>
          </WeatherDetails>
          <WeatherDetails>
            <img
              src={`http://openweathermap.org/img/wn/${todayWeather.weather[0].icon}@4x.png`}
              alt="weather icon"
              style={{ width: 60 }}
            />
          </WeatherDetails>
        </WeatherDetailsSection>
        <AirConditions data={todayWeather}/>
      </WeatherInfo>
    </>
  );
};

export default TodayWeather;

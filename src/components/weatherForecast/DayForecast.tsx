import * as React from "react";
import { useEffect, useState } from "react";
import { format } from "date-fns";

// services
import { FiveDaysWeatherForecast } from "../../services/weatherForecast";
import {
  HeadingText,
  WeatherInfo,
  WeatherDetailsSection,
  DailyForecastInfo,
  ForecastDay,
  ForecastDescription,
} from "./day-forecast.styled";

import ForecastItem from "./ForecastItem";

interface DayForecastProps {
  lat: number;
  lon: number;
}

type resultProps = {
  id: number;
  merchant: string;
  description: string;
  status: string;
  category: string;
  date: Date;
  amount: number;
};

const DayForecast: React.FC<DayForecastProps> = ({ lat, lon }) => {
  const [weatherForecast, setWeatherForecast] = useState(undefined as any);
  useEffect(() => {
    FiveDaysWeatherForecast(lat, lon)
      .then((data) => {
        if (data) {
          setWeatherForecast(data);
        } else {
          console.log("no data found");
        }
      })
      .catch(function (error) {
        console.log("error : ", error);
      });
  }, []);

  return (
    <>
      {weatherForecast !== undefined ? (
        <WeatherInfo aria-label="day-weather-forecast">
          <HeadingText>DAILY FORECAST</HeadingText>
          {weatherForecast.daily.map((item: any, index: number) => {
            return (
              <WeatherDetailsSection>
                <DailyForecastInfo>
                  <ForecastDay>
                    {format(new Date(item.dt), "EEEE, dd HH:mm:ss")}
                  </ForecastDay>
                  <ForecastDescription>
                    {item.weather[0].description}
                  </ForecastDescription>
                </DailyForecastInfo>
                <DailyForecastInfo>
                  <ForecastItem
                    type="temperature"
                    value={`${Math.round(item.feels_like.day)} °C`}
                  />
                  <ForecastItem type="clouds" value={`${item.clouds} %`} />
                </DailyForecastInfo>
                <DailyForecastInfo>
                  <ForecastItem type="wind" value={`${item.wind_speed} m/s`} />
                  <ForecastItem type="humidity" value={`${item.humidity} %`} />
                </DailyForecastInfo>
              </WeatherDetailsSection>
            );
          })}
        </WeatherInfo>
      ) : null}
    </>
  );
};

export default DayForecast;

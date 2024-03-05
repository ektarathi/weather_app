import { useState } from "react";
import { weatherData } from "../services/weatherData";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledHeading,
  StyledWrapper,
} from "./search.styled";
import { useDispatch } from "react-redux";

//reducers
import { setCityName } from "../reducers/city.reducers";

// components
import DayForecast from "./weatherForecast/DayForecast";
import TodayWeather from "./todayweather/TodayWeather";

const SearchEngine = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const [todayWeather, setTodayWeather] = useState(undefined as any);

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    weatherData(city)
      .then((data) => {
        if (data) {
          dispatch(setCityName(`${data.name}, ${data.sys.country}`));
          setTodayWeather(data);
        } else {
          console.log("no data found");
        }
      })
      .catch(function (error) {
        console.log("error : ", error);
      });
  }

  function cityUpdate(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  return (
    <>
      <StyledHeading> Enter location: </StyledHeading>
      <StyledForm aria-label="search-form">
        <StyledInput
          onChange={cityUpdate}
          type="search"
          placeholder="Type a city"
          name="city"
          aria-label="search-input"
        />
        <StyledButton role="button" onClick={handleSubmit}>
          Search
        </StyledButton>
      </StyledForm>
      {todayWeather !== undefined ? (
        <StyledWrapper>
          <TodayWeather todayWeather={todayWeather} />
          <DayForecast
            lat={todayWeather.coord.lat}
            lon={todayWeather.coord.lon}
          />
        </StyledWrapper>
      ) : null}
    </>
  );
};

export default SearchEngine;

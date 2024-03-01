import { useState } from "react";
import { weatherData } from "../services/weatherData";
import { StyledButton, StyledForm, StyledInput, ListInput } from "./search.styled";
import { useDispatch, useSelector } from "react-redux";

//reducers
import { setCityName } from "../reducers/city.reducers";

type RootState = {
  name: {
    cityName: string
  }
}

const SearchEngine = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(undefined as any);

   // redux state
   const cityName = useSelector((state: RootState) => state.name.cityName);

  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    weatherData(city)
      .then((data) => {
        if (data) {
          dispatch(setCityName(`${data.name}, ${data.sys.country}`));
          setWeather(data);
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
      {weather !== undefined ? (
        <>
        <h3>{cityName}</h3>
          <ListInput>
            <li>Temperature: {Math.round(weather.main.temp)}°C</li>
            <li>Humidity: {weather.main.humidity}%</li>
            <li>Description: {weather.weather[0].description}</li>
            <li>Wind speed: {weather.wind.speed} km/h</li>
            <li>
              <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
          </li>
          </ListInput>
        </>
      ) : null}
    </>
  );
};

export default SearchEngine;

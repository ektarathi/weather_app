import axios from "axios";
import * as WeatherData from "./weatherData";
import { vi } from "vitest";

describe("Weather Information Details", () => {
  it("fetch weather details", async () => {
    axios.get = vi.fn().mockResolvedValue({
      data: {
        coord: {
          lon: -86.8025,
          lat: 33.5207,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        base: "stations",
        main: {
          temp: 9.1,
          feels_like: 7.73,
          temp_min: 8.39,
          temp_max: 9.86,
          pressure: 1019,
          humidity: 31,
        },
        visibility: 10000,
        wind: {
          speed: 2.54,
          deg: 340,
          gust: 4.07,
        },
        clouds: {
          all: 71,
        },
        dt: 1708297718,
        sys: {
          type: 2,
          id: 2046509,
          country: "US",
          sunrise: 1708259333,
          sunset: 1708299226,
        },
        timezone: -21600,
        id: 4049979,
        name: "Birmingham",
        cod: 200,
      },
    });

    const result = await WeatherData.weatherData("London");

    expect(result).toEqual({
      coord: {
        lon: -86.8025,
        lat: 33.5207,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      base: "stations",
      main: {
        temp: 9.1,
        feels_like: 7.73,
        temp_min: 8.39,
        temp_max: 9.86,
        pressure: 1019,
        humidity: 31,
      },
      visibility: 10000,
      wind: {
        speed: 2.54,
        deg: 340,
        gust: 4.07,
      },
      clouds: {
        all: 71,
      },
      dt: 1708297718,
      sys: {
        type: 2,
        id: 2046509,
        country: "US",
        sunrise: 1708259333,
        sunset: 1708299226,
      },
      timezone: -21600,
      id: 4049979,
      name: "Birmingham",
      cod: 200,
    });
  });
});

import axios from "../utils/axiosHandler";

export const FiveDaysWeatherForecast = (lat: number, lon: number) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`)
      .then((res) => {
        if (res != undefined) {
          return res.data;
        }
      })
      .catch((error) => {
        if (typeof error === "string") {
          throw new Error(error);
        } else console.error(error);
      });
  };
  
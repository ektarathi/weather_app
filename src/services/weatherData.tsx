import axios from "../utils/axiosHandler";

export const weatherData = (city: string) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`)
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
  
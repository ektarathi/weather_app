export type DataProps = {
  dt: number;
  main: {
    feels_like: number;
    humidity: number;
    temp: number
  };
  wind: {
    speed: string;
  };
  clouds: {
    all: number
  };
  coord: {
    lat: number;
    lon: number;
  };
  weather: WeatherDetails []
}

export type WeatherDetails = {
  description: string;
  icon: string
}
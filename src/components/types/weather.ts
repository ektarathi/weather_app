export type DataProps = {
  main: {
    feels_like: number;
    humidity: number
  };
  wind: {
    speed: string;
  };
  clouds: {
    all: number
  };
}

export type weatherProps = {
  coord: {
    lat: number;
    lon: number;
  };
}
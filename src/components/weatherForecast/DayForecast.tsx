import * as React from 'react';
import { useEffect , useState} from 'react';

// services
import { FiveDaysWeatherForecast } from "../../services/weatherForecast";

interface DayForecastProps {
    lat: number,
    lon: number
}

const DayForecast: React.FC<DayForecastProps> = ({ lat, lon }) => {

    const [weatherForecast, setWeatherForecast] = useState();
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
    }, [])

    console.log(weatherForecast);

    return (  <h1>This is forecast</h1>);
}
 
export default DayForecast;
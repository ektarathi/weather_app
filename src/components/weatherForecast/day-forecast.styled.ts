import styled from "styled-components";

export const WeatherInfo = styled.div`
  width: 50%;
  color: white;
  padding: 5px;
  height: 500px;
  overflow: scroll;
`;

export const HeadingText = styled.h4`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
  font-size: 20px;
  margin-bottom: 1rem;
`;

export const WeatherDetailsSection = styled.div`
  padding: 2px 0px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(171, 203, 222, 0.05) 100%
    )
    0% 0%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 8px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-around;
  margin-bottom: 1.5rem;
`;

export const DailyForecastInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 5px;
`;

export const ForecastDay = styled.div`
  font-weight: bold;
  font-size: 15px;
`;

export const ForecastDescription = styled.div`
  color: rgba(255, 255, 255, 0.7);
  margin-top: 10px;
`;

export const ForecastDetails = styled.p`
    margin-top: 0;
    margin-bottom: .5rem;
`;

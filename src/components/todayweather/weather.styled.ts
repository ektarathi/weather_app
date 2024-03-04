import styled from "styled-components";

export const WeatherInfo = styled.div`
  width: 50%;
  color: white;
  padding: 5px;
`;

export const WeatherForecast = styled.div`
  width: 50%;
`;

export const WeatherDetails = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const InfoText = styled.p`
  margin-bottom: 0;
  margin-top: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
`;

export const InfoTextTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 0;
  margin-top: 0.2rem;
`;

export const WeatherDetailsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const HeadingText = styled.div`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
  font-size: 20px;
`;

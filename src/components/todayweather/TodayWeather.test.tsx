import { render, screen } from "@testing-library/react";
import TodayWeather from "./TodayWeather";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../store";

import { format } from 'date-fns';

// mocked data
import { data } from "./mockData/data";

describe("Today weather component", () => {
  test("render component", () => {
    render(
      <Provider store={store}>
        <TodayWeather todayWeather={data} />
      </Provider>
    );
    expect(screen.getByLabelText("current-weather")).toBeInTheDocument();
  });

  test("render headings", () => {
    render(
      <Provider store={store}>
        <TodayWeather todayWeather={data} />
      </Provider>
    );

    expect(screen.getAllByRole("heading", { level: 4 })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 4 })[0]).toHaveTextContent(
      "CURRENT WEATHER"
    );

    expect(screen.getAllByRole("heading", { level: 4 })[1]).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 4 })[1]).toHaveTextContent(
      "AIR CONDITIONS"
    );
  });

  test("render text content", () => {
    let date = format(Date.now(), "MMM d");

    render(
      <Provider store={store}>
        <TodayWeather todayWeather={data} />
      </Provider>
    );

    expect(screen.getAllByLabelText("current-weather-name")[1]).toBeInTheDocument();
    expect(screen.getAllByLabelText("current-weather-name")[1]).toHaveTextContent("23 °C")

    expect(screen.getAllByLabelText("current-weather-value")[1]).toBeInTheDocument();
    expect(screen.getAllByLabelText("current-weather-value")[1]).toHaveTextContent("clear sky")

    expect(screen.getAllByLabelText("current-weather-value")[0]).toBeInTheDocument();
    expect(screen.getAllByLabelText("current-weather-value")[0]).toHaveTextContent(`Today ${date}`)
  });

  test(" render image", () => {
    render(
        <Provider store={store}>
          <TodayWeather todayWeather={data} />
        </Provider>
      );

    expect(screen.getByAltText("weather icon")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();

  })
});

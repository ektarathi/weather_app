import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import store from "../store";

describe("App component", () => {
  test("render component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByLabelText("landing-page")).toBeInTheDocument();
  });

  test("render heading", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Weather App"
    );
  });
});

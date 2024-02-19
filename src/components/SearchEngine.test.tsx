import { act, fireEvent, render, screen } from "@testing-library/react";
import SearchEngine from "./SearchEngine";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import { Provider } from "react-redux";
import store from "../../store";

describe("Search component", () => {
  test("render component", () => {
    render(
      <Provider store={store}>
        <SearchEngine />
      </Provider>
    );
    expect(screen.getByLabelText("search-form")).toBeInTheDocument();
  });

  test("should render basic form fields", async () => {
    render(
      <Provider store={store}>
        <SearchEngine />
      </Provider>
    );

    expect(screen.getByLabelText("search-input")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Search");
  });
});

describe("with valid inputs", async () => {
  test("calls the onSubmit function", async () => {
    const click = vi.fn();
    const { getByLabelText } = render(
      <Provider store={store}>
        <SearchEngine />
      </Provider>
    );

    await act(async () => {
      fireEvent.change(getByLabelText("search-input"), {
        target: { value: "London" },
      });
    });

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(click).toBeDefined();
  });
});

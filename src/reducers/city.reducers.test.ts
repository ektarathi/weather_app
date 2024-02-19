import * as CityNameReducerAction from "./city.reducers";
import store from "../../store.ts";

describe("Name Reducer", () => {
  it("sets selected name", async () => {
    const result = await store.dispatch(
      CityNameReducerAction.setCityName("London")
    );
    expect(result.payload).toEqual("London");
    const state = store.getState().name.cityName;
    expect(state).toEqual("London");
  });
});

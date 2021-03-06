import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
  it("renders correct structure", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});

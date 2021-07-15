import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Ordes from "./Ordes";
Enzyme.configure({ adapter: new Adapter() });

describe("Ordes component", () => {
  it("renders correct structure", () => {
    expect(shallow(<Ordes />)).toMatchSnapshot();
  });
});

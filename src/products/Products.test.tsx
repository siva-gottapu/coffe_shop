import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Product from "./Product";
Enzyme.configure({ adapter: new Adapter() });

describe("Product component", () => {
  it("renders correct structure", () => {
    expect(shallow(<Product data={{}} />)).toMatchSnapshot();
  });
});

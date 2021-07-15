import { Discount } from "../model";
import OrdeerUtil from "../util/OrderUtil";
import TestData from "./TestData";

let discounts: Discount[];
let orderUtil: OrdeerUtil;

beforeEach(() => {
  discounts = TestData().discount as [];
  orderUtil = new OrdeerUtil();
});

describe("Compute Order Bill With out Discount", () => {
  test("should return the total amount of order", () => {
    let items = [
      {
        order_id: 1,
        product_id: 1,
        product_name: "coffe",
        quantity: 1,
        list_price: 10,
        tax: 10,
      },
    ];
    orderUtil.calculateOrderBill(discounts, items as []);
    expect(orderUtil.getBillAmount().total).toBe(11);
  });
});

describe("Compute Order Bill Discount as Free Item", () => {
  test("should return the total amount of order", () => {
    let items = [
      {
        order_id: 1,
        product_id: 1,
        product_name: "coffe",
        quantity: 1,
        list_price: 10,
        tax: 10,
      },
      {
        order_id: 2,
        product_id: 13,
        product_name: "coffe",
        quantity: 1,
        list_price: 10,
        tax: 10,
      },
      {
        order_id: 1,
        product_id: 16,
        product_name: "coffe",
        quantity: 1,
        list_price: 10,
        tax: 10,
      },
    ];

    orderUtil.calculateOrderBill(discounts, items as []);
    expect(orderUtil.getBillAmount().total).toBe(22);
  });
});

describe("Compute Order Bill Discount on all Items", () => {
  test("should return the total amount of order with 10 dis for 3 and 5 items", () => {
    let items = [
      {
        order_id: 2,
        product_id: 3,
        product_name: "coffe",
        quantity: 1,
        list_price: 100,
        tax: 10,
      },
      {
        order_id: 1,
        product_id: 5,
        product_name: "coffe",
        quantity: 1,
        list_price: 100,
        tax: 10,
      },
    ];

    orderUtil.calculateOrderBill(discounts, items as []);
    expect(orderUtil.getBillAmount().total).toBe(198);
  });
});

describe("Compute Order Bill For Inactive Discount", () => {
  beforeEach(() => {
    discounts = TestData().discount as [];
    discounts.forEach((dis: Discount) => {
      dis.is_active = false;
    });
  });
  test("should return the total amount of order", () => {
    let items = [
      {
        order_id: 2,
        product_id: 3,
        product_name: "coffe",
        quantity: 1,
        list_price: 100,
        tax: 10,
      },
      {
        order_id: 1,
        product_id: 5,
        product_name: "coffe",
        quantity: 1,
        list_price: 100,
        tax: 10,
      },
    ];

    orderUtil.calculateOrderBill(discounts, items as []);
    expect(orderUtil.getBillAmount().total).toBe(220);
  });
});

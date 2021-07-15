export type Data = {
  categories: CategoryModel[];
  discount: Discount[];
};

export type CategoryModel = {
  id: number;
  name: string;
  products: [ProductModel];
};

export type ProductModel = {
  id: number;
  cat_id: number;
  name: string;
  list_price: number;
  tax: number;
  discount: number;
  discount_unit: string;
};

export type Discount = {
  id: number;
  disco_rule: [number];
  discount_on: [number];
  is_active: boolean;
  discount_value: number;
};

export type Amount = {
  subtotal: number;
  tax: number;
  total: number;
  saved: number;
};

export enum OrderStatus {
  ORDER,
  PROCESSING,
  COMPLETED,
  CANCELLED,
}

export type OrdersModel = {
  id: number;
  customer_id: number;
  order_status: OrderStatus;
  store_id: number;
  staff_id: number;
};

export type OrdersItem = {
  id: number;
  order_id: number;
  product_id: number;
  product_name: string;
  quantity: number;
  list_price: number;
  final_price: number;
  discount: number;
  tax: number;
  total_price: number;
};

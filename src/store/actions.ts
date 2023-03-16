import { createAction } from "@reduxjs/toolkit";
import { ActionType } from "../types/action";
import { ProductType } from "../types/product-type";

export const loadProducts = createAction(
  ActionType.LoadProducts,
  (products: ProductType[]) => ({
    payload: products,
  }),
);

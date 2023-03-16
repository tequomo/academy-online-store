import { createReducer } from "@reduxjs/toolkit";
import { ProductsData } from "../../../types/state";
import { loadProducts } from "../../actions";

const initialState: ProductsData = {
  products: [],
};

const productsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProducts, (state, action) => {
      state.products = action.payload;
    })
});

export { productsData };

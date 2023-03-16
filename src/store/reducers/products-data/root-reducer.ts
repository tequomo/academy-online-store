import { combineReducers } from "@reduxjs/toolkit";
import { productsData } from "./products-data";

export enum NameSpace {
  products = 'PRODUCTS_DATA',
  currentProduct = 'CURRENT_PRODUCT_DATA',
  favoriteProducts = 'FAVORITES_DATA',
  state = 'STATE',
}

export const rootReducer = combineReducers({
  [NameSpace.products]: productsData,
  // [NameSpace.favoriteProducts]: favoritesData,
  // [NameSpace.currentProduct]: currentProductData,
  // [NameSpace.state]: appState,
});

export type RootState = ReturnType<typeof rootReducer>;

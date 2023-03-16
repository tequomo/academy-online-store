import { RootState } from "../store/reducers/products-data/root-reducer";
import { ProductType } from "./product-type";

export type ProductsData = {
  products: ProductType[],
};

export type State = RootState;

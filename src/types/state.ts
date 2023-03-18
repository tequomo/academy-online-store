import { RootState } from "../store/reducers/root-reducer";
import { ProductType } from "./product-type";

export type ProductsData = {
  products: ProductType[],
};

export type State = RootState;

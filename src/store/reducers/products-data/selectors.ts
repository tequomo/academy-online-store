import { ProductType } from "../../../types/product-type";
import { State } from "../../../types/state";
import { NameSpace } from "../root-reducer";

export const getProducts = (state: State): ProductType[] => state[NameSpace.products].products;

import { AdaptedProductType } from "../../../types/product-type";
import { State } from "../../../types/state";
import { NameSpace } from "../root-reducer";

export const getProducts = (state: State): AdaptedProductType[] => state[NameSpace.products].products;

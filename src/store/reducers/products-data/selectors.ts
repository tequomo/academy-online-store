import { ProductType } from "../../../types/product-type";

export const getProducts = (state: { productsData: { products: ProductType[]; }; }): ProductType[] => state.productsData.products;

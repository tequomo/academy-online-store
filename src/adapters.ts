import { AdaptedProductType, ProductType } from "./types/product-type";

export const adaptProductToClient = (product: ProductType): AdaptedProductType => {
  const adaptedProduct = Object.assign(
    {},
    product,
    {
      publishDate: product['publish-date'],
    },
  );
  delete adaptedProduct['publish-date'];
  return adaptedProduct;
};

export const adaptProductsToClient = (products: ProductType[]): AdaptedProductType[] => products.map((product: ProductType) => adaptProductToClient(product));

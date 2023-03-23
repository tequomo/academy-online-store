import { ProductType } from "./types/product-type";

export const adaptProductToClient = (product: ProductType) => {
  const adaptedProduct = Object.assign(
    {},
    product,
    {
      publishDate: product['publish_date'],
    },
  );
  delete adaptedProduct['publish_date'];
  // delete adaptedPoint['offers'];
  // delete adaptedPoint['is_favorite'];
  // delete adaptedPoint['date_from'];
  // delete adaptedPoint['date_to'];
  // delete adaptedPoint['base_price'];

  return adaptedProduct;
}

export const adaptProductsToClient = (products: ProductType[]) => {
  products.map((product: ProductType) => adaptProductToClient(product))
}

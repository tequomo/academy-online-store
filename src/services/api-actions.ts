import { loadProducts } from "../store/actions";
import { ThunkActionResult } from "../types/action";
import { ProductType } from "../types/product-type";

export const fetchProductsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get<ProductType[]>("/db");
      dispatch(loadProducts(data));
    } catch {
      console.error('error');
    }
  };

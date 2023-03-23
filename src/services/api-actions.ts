import { loadProducts } from "../store/actions";
import { ThunkActionResult } from "../types/action";
import { BackendResultsType } from "../types/product-type";

export const fetchProductsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get<BackendResultsType>("/db");
      // console.log(data.products);
      dispatch(loadProducts(data.products));
    } catch {
      console.error('error');
    }
  };

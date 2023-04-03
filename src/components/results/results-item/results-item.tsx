import { AdaptedProductType } from "../../../types/product-type";
import { exportDate, formatPrice } from "../../../utils";

type ResultsItemPropsType = {
  product: AdaptedProductType,
};

function ResultsItem({ product }: ResultsItemPropsType): JSX.Element {

  const {name, price, address:{city, street}, publishDate} = product;

  return (
    <li className="results__item product">
      <button className="product__favourite fav-add" type="button" aria-label="Добавить в избранное">
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule={"evenodd"} clipRule={"evenodd"} d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" strokeWidth={"2"} strokeLinejoin={"round"} />
        </svg>
      </button>
      <div className="product__image">
        <div className="product__image-more-photo hidden">+2 фото</div>
        <img src="img/item1.jpg" srcSet="img/item1-2x.jpg 2x" width="318" height="220" alt="Загородный дом с видом на озеро"></img>
        <div className="product__image-navigation">
          <span className="product__navigation-item product__navigation-item--active"></span>
          <span className="product__navigation-item"></span>
          <span className="product__navigation-item"></span>
          <span className="product__navigation-item"></span>
          <span className="product__navigation-item"></span>
        </div>
      </div>
      <div className="product__content">
        <h3 className="product__title">
          <a href="/#">{name}</a>
        </h3>
        <div className="product__price">{formatPrice(price)}</div>
        <div className="product__address">{city}, {street}</div>
        <div className="product__date">{exportDate('80000000000')} 2 часа назад</div>
      </div>
    </li>
  );
};

export default ResultsItem;

import FilterCamera from "./filter-camera";
import FilterCar from "./filter-car";
import FilterEstate from "./filter-estate";
import FilterLaptop from "./filter-laptop";
import FilterRange from "./filter-range";

function Filters(): JSX.Element {
  return (
    <section className="onlineshop-app__filter filter">
      <h2 className="title filter__title">Фильтр</h2>
      <form className="filter__form" action="#" method="post">
        <div className="filter__select-wrapper">
          <label htmlFor="categories">Категория товаров</label>
          <select id="categories" name="categories" defaultValue={"all"}>
            <option value="all">Все</option>
            <option value="estate">Недвижимость</option>
            <option value="laptops">Ноутбуки</option>
            <option value="camera">Фотоаппараты</option>
            <option value="cars">Автомобили</option>
          </select>
          <svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
            <path fillRule={"evenodd"} clipRule={"evenodd"} d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" />
          </svg>
        </div>
        <FilterRange />
        <FilterEstate />
        <FilterCamera />
        <FilterLaptop />
        <FilterCar />
        <button className="button filter__button" type="submit">Показать</button>
      </form>
    </section>
  );
};

export default Filters;

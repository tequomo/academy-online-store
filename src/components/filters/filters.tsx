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
        <div className="filter__range">
          <label htmlFor="range">Цена, ₽</label>
          <input type="text" id="sampleSlider" />
        </div>
        <div className="filter__estate">
          <fieldset className="filter__type filter__type--estate">
            <legend>Тип недвижимости</legend>
            <ul className="filter__checkboxes-list filter__checkboxes-list--estate">
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="estate-type" value="house" id="house"></input>
                <label htmlFor="house">Дом</label>
              </li>
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="estate-type" value="flat" id="flat"></input>
                <label htmlFor="flat">Квартира</label>
              </li>
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="estate-type" value="apartments" id="apartments"></input>
                <label htmlFor="apartments">Апартаменты</label>
              </li>
            </ul>
          </fieldset>
          <div className="filter__min-square">
            <label htmlFor="square">Минимальная площадь, м<sup>2</sup></label>
            <input type="number" id="square" name="min-square" min="1" value="" placeholder="0"></input>
          </div>
          <fieldset className="filter__radiobuttons filter__radiobuttons--ram">
            <legend>Количество комнат</legend>
            <ul className="filter__ram-list">
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="rooms" value="any" id="any_room"></input>
                <label htmlFor="any_room">Любое</label>
              </li>
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="rooms" value="one" id="one"></input>
                <label htmlFor="one">1</label>
              </li>
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="rooms" value="two" id="two"></input>
                <label htmlFor="two">2</label>
              </li>
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="rooms" value="three" id="three"></input>
                <label htmlFor="three">3</label>
              </li>
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="rooms" value="four" id="four"></input>
                <label htmlFor="four">4</label>
              </li>
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="rooms" value="fivemore" id="fivemore"></input>
                <label htmlFor="fivemore">5+</label>
              </li>
            </ul>
          </fieldset>
        </div>
        <div className="filter__camera">
          <fieldset className="filter__type filter__type--camera">
            <legend>Тип фотоаппарата</legend>
            <ul className="filter__checkboxes-list filter__checkboxes-list--camera">
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="camera-type" value="mirror" id="mirror"></input>
                <label htmlFor="mirror">Зеркальный</label>
              </li>
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="camera-type" value="digital" id="digital"></input>
                <label htmlFor="digital">Цифровой</label>
              </li>
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="camera-type" value="mirrorless" id="mirrorless"></input>
                <label htmlFor="mirrorless">Беззеркальный</label>
              </li>
            </ul>
          </fieldset>
          <div className="filter__select-wrapper filter__select-wrapper--min-resolution">
            <label htmlFor="resolution-matrix">Минимальное разрешение матрицы</label>
            <select id="resolution-matrix" name="resolution-matrix">
              <option value="1mp" selected>1 МП</option>
              <option value="3mp">3 МП</option>
              <option value="5mp">5 МП</option>
              <option value="7mp">7 МП</option>
              <option value="10mp">10 МП</option>
            </select>
            <svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
              <path fillRule={"evenodd"} clipRule={"evenodd"} d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" />
            </svg>
          </div>
          <div className="filter__select-wrapper">
            <label htmlFor="resolution-video">Минимальное разрешение видео</label>
            <select id="resolution-video" name="resolution-video">
              <option value="any" selected>Любое</option>
              <option value="HD">HD</option>
              <option value="Full_HD">Full HD</option>
              <option value="4K">4K</option>
              <option value="5K">5K</option>
            </select>
            <svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
              <path fillRule={"evenodd"} clipRule={"evenodd"} d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" />
            </svg>
          </div>
        </div>
        <div className="filter__laptop">
          <fieldset className="filter__type filter__type--laptop">
            <legend>Тип ноутбука</legend>
            <ul className="filter__checkboxes-list filter__checkboxes-list--laptop-ram">
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="laptop-type" value="ultra" id="ultra"></input>
                <label htmlFor="ultra">Ультрабук</label>
              </li>
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="laptop-type" value="home" id="home"></input>
                <label htmlFor="home">Домашний ноутбук</label>
              </li>
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="laptop-type" value="gaming" id="gaming"></input>
                <label htmlFor="gaming">Игровой ноутбук</label>
              </li>
            </ul>
          </fieldset>
          <fieldset className="filter__radiobuttons filter__radiobuttons--ram">
            <legend>Минимальный объем оперативной памяти</legend>
            <ul className="filter__radiobuttons-list">
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="ram" value="any" id="any_ram"></input>
                <label htmlFor="any_ram">Любой</label>
              </li>
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="ram" value="4gb" id="4gb"></input>
                <label htmlFor="4gb">4 Гб</label>
              </li>
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="ram" value="8gb" id="8gb"></input>
                <label htmlFor="8gb">8 Гб</label>
              </li>
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="ram" value="16gb" id="16gb"></input>
                <label htmlFor="16gb">16 Гб</label>
              </li>
            </ul>
          </fieldset>
          <fieldset className="filter__radiobuttons filter__radiobuttons--diagonal">
            <legend>Минимальная диагональ экрана</legend>
            <ul className="filter__radiobuttons-list">
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="diagonal" value="any" id="any_diagonal" checked></input>
                <label htmlFor="any_diagonal">Любая</label>
              </li>
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="diagonal" value="13in" id="13in"></input>
                <label htmlFor="13in">13<sup>″</sup></label>
              </li>
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="diagonal" value="14in" id="14in"></input>
                <label htmlFor="14in">14<sup>″</sup></label>
              </li>
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="diagonal" value="15in" id="15in"></input>
                <label htmlFor="15in">15<sup>″</sup></label>
              </li>
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="diagonal" value="17in" id="17in"></input>
                <label htmlFor="17in">17<sup>″</sup></label>
              </li>
            </ul>
          </fieldset>
          <fieldset className="filter__type filter__type--laptop-processor">
            <legend>Тип процессора</legend>
            <ul className="filter__checkboxes-list filter__checkboxes-list--laptop-processor">
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="laptop-processor" value="i3" id="i3"></input>
                <label htmlFor="i3">Intel Core i3</label>
              </li>
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="laptop-processor" value="i5" id="i5"></input>
                <label htmlFor="i5">Intel Core i5</label>
              </li>
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="laptop-processor" value="i7" id="i7"></input>
                <label htmlFor="i7">Intel Core i7</label>
              </li>
            </ul>
          </fieldset>
        </div>
        <div className="filter__car">
          <div className="filter__select-wrapper">
            <label htmlFor="resolution-video">Минимальный год выпуска</label>
            <select id="car_year" name="car_year">
              <option value="1900" selected>1900</option>
              <option value="1940">1940</option>
              <option value="1960">1960</option>
              <option value="1980">1980</option>
              <option value="2000">2000</option>
            </select>
            <svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
              <path fillRule={"evenodd"} clipRule={"evenodd"} d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" />
            </svg>
          </div>
          <fieldset className="filter__radiobuttons filter__radiobuttons--transmission">
            <legend>Коробка передач</legend>
            <ul className="filter__radiobuttons-list">
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="transmission" value="any" id="any_transmission" checked></input>
                <label htmlFor="any_transmission">Любая</label>
              </li>
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="transmission" value="mechanic" id="mechanic_transmission"></input>
                <label htmlFor="mechanic_transmission">Механика</label>
              </li>
              <li className="filter__radiobuttons-item">
                <input className="visually-hidden" type="radio" name="transmission" value="auto" id="auto_transmission"></input>
                <label htmlFor="auto_transmission">Автомат</label>
              </li>
            </ul>
          </fieldset>
          <fieldset className="filter__type filter__type--car-body">
            <legend>Тип кузова</legend>
            <ul className="filter__checkboxes-list filter__checkboxes-list--car-body">
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="car-body" value="sedan" id="sedan"></input>
                <label htmlFor="sedan">Седан</label>
              </li>
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="car-body" value="universal" id="universal"></input>
                <label htmlFor="universal">Универсал</label>
              </li>
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="car-body" value="hatchback" id="hatchback"></input>
                <label htmlFor="hatchback">Хэтчбэк</label>
              </li>
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="car-body" value="jeep" id="jeep"></input>
                <label htmlFor="jeep">Внедорожник</label>
              </li>
              <li className="filter__checkboxes-item">
                <input className="visually-hidden" type="checkbox" name="car-body" value="cupe" id="cupe"></input>
                <label htmlFor="cupe">Купэ</label>
              </li>
            </ul>
          </fieldset>
        </div>
        <button className="button filter__button" type="submit">Показать</button>
      </form>
    </section>
  );
};

export default Filters;

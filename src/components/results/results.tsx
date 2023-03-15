function Results(): JSX.Element {
  return (
    <section className="onlineshop-app__results results">
      <div className="results__head">
        <h2 className="title results__title">Результаты</h2>
        <div className="results__sorting sorting">
          <form className="sorting__form">
            <fieldset className="sorting__order">
              <legend>Показать сначала:</legend>
              <ul className="sorting__order-list">
                <li className="sorting__order-tab">
                  <input className="visually-hidden" type="radio" name="sorting-order" value="popular" id="sort-popular" checked></input>
                  <label htmlFor="sort-popular">Популярные</label>
                </li>
                <li className="sorting__order-tab">
                  <input className="visually-hidden" type="radio" name="sorting-order" value="cheap" id="sort-cheap"></input>
                  <label htmlFor="sort-cheap">Дешёвые</label>
                </li>
                <li className="sorting__order-tab">
                  <input className="visually-hidden" type="radio" name="sorting-order" value="cheap" id="sort-new"></input>
                  <label htmlFor="sort-new">Новые</label>
                </li>
              </ul>
            </fieldset>
            <div className="sorting__favourites">
              <input className="visually-hidden" type="checkbox" name="favourites" id="favourites"></input>
              <label htmlFor="favourites">
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule={"evenodd"} clipRule={"evenodd"} d="M5 2C3.34314 2 2 3.34314 2 5C2 7.5886 3.51088 9.71443 5.29396 11.3192C6.7106 12.5942 8.20987 13.4581 9 13.8762C9.79013 13.4581 11.2894 12.5942 12.706 11.3192C14.4891 9.71443 16 7.5886 16 5C16 3.34314 14.6569 2 13 2C11.7429 2 10.9602 2.41249 10.4997 2.78087C10.2631 2.97013 10.1016 3.15624 10.0031 3.2875C9.95407 3.35291 9.92141 3.40373 9.90362 3.43304C9.89532 3.4467 9.89034 3.45554 9.88852 3.45885C9.71707 3.79089 9.37442 4 9 4C8.62558 4 8.28293 3.79089 8.11148 3.45885C8.10949 3.45499 8.10752 3.45111 8.10557 3.44721L9 3C8.10557 3.44721 8.10583 3.44773 8.10609 3.44824L8.10658 3.44922L8.10751 3.45106L8.10912 3.45422L8.11135 3.45854C8.1124 3.46053 8.11256 3.4608 8.11182 3.45946C8.11172 3.45928 8.11161 3.45908 8.11148 3.45885C8.10966 3.45554 8.10468 3.4467 8.09638 3.43304C8.07859 3.40373 8.04593 3.35291 7.99687 3.2875C7.89843 3.15624 7.73688 2.97013 7.50031 2.78087C7.03983 2.41249 6.25708 2 5 2ZM9 1.43307C8.92235 1.36218 8.839 1.29057 8.74969 1.21913C7.96017 0.587507 6.74292 0 5 0C2.23857 0 0 2.23857 0 5C0 8.4114 1.98912 11.0356 3.95604 12.8058C5.93171 14.5839 8.02784 15.632 8.54996 15.893L8.55279 15.8944C8.83431 16.0352 9.16569 16.0352 9.44721 15.8944L9.45004 15.893C9.97216 15.632 12.0683 14.5839 14.044 12.8058C16.0109 11.0356 18 8.4114 18 5C18 2.23857 15.7614 0 13 0C11.2571 0 10.0398 0.587507 9.25031 1.21913C9.161 1.29057 9.07765 1.36218 9 1.43307ZM9.89391 3.44824C9.89408 3.4479 9.89426 3.44756 9.89443 3.44721L9 3C9.89443 3.44721 9.89417 3.44773 9.89391 3.44824Z" />
                </svg>
                Показать избранные
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="results__info favourites hidden">
        <p className="favourites__empty-message">У вас пока нет избранных товаров. Чтобы отметить товар, кликните на сердечко в карточке объявления.</p>
        <p className="favourites__notion">Вы можете вернуться к списку всех товаров, кликнув ещё раз на&nbsp;«Показать избранные»</p>
      </div>
      <ul className="results__list">
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
              <a href="/#">Загородный дом с видом на озеро</a>
            </h3>
            <div className="product__price">3 000 000 ₽</div>
            <div className="product__address">Приозёрск, улица Прибрежная</div>
            <div className="product__date">2 часа назад</div>
          </div>
        </li>
        <li className="results__item product">
          <button className="product__favourite fav-add" type="button" aria-label="Добавить в избранное">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule={"evenodd"} clipRule={"evenodd"} d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" strokeWidth={"2"} strokeLinejoin={"round"} />
            </svg>
          </button>
          <div className="product__image">
            <div className="product__image-more-photo hidden">+2 фото</div>
            <img src="img/item2.jpg" srcSet="img/item2-2x.jpg 2x" width="318" height="220" alt="Ford Mustang 2020"></img>
            <div className="product__image-navigation hidden">
              <span className="product__navigation-item product__navigation-item--active"></span>
              <span className="product__navigation-item"></span>
              <span className="product__navigation-item"></span>
              <span className="product__navigation-item"></span>
              <span className="product__navigation-item"></span>
            </div>
          </div>
          <div className="product__content">
            <h3 className="product__title">
              <a href="/#">Ford Mustang 2020</a>
            </h3>
            <div className="product__price">2 950 000 ₽</div>
            <div className="product__address">Москва, Нахимовский проспект</div>
            <div className="product__date">3 дня назад</div>
          </div>
        </li>
        <li className="results__item product">
          <button className="product__favourite fav-add" type="button" aria-label="Добавить в избранное">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule={"evenodd"} clipRule={"evenodd"} d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" strokeWidth={"2"} strokeLinejoin={"round"} />
            </svg>
          </button>
          <div className="product__image">
            <div className="product__image-more-photo hidden">+2 фото</div>
            <img src="img/item3.jpg" srcSet="img/item3-2x.jpg 2x" width="318" height="220" alt="Фотокамера Canon EOS 5D + объектив"></img>
            <div className="product__image-navigation hidden">
              <span className="product__navigation-item product__navigation-item--active"></span>
              <span className="product__navigation-item"></span>
              <span className="product__navigation-item"></span>
              <span className="product__navigation-item"></span>
              <span className="product__navigation-item"></span>
            </div>
          </div>
          <div className="product__content">
            <h3 className="product__title">
              <a href="/#">Фотокамера Canon EOS 5D + объектив</a>
            </h3>
            <div className="product__price">19 000 ₽</div>
            <div className="product__address">Киров, улица Ленина</div>
            <div className="product__date">1 день назад</div>
          </div>
        </li>
        <li className="results__item product">
          <button className="product__favourite fav-add" type="button" aria-label="Добавить в избранное">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule={"evenodd"} clipRule={"evenodd"} d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" strokeWidth={"2"} strokeLinejoin={"round"} />
            </svg>
          </button>
          <div className="product__image">
            <div className="product__image-more-photo hidden">+2 фото</div>
            <img src="img/item4.jpg" srcSet="img/item4-2x.jpg 2x" width="318" height="220" alt="1-комнатная квартира в центре Питера"></img>
            <div className="product__image-navigation hidden">
              <span className="product__navigation-item product__navigation-item--active"></span>
              <span className="product__navigation-item"></span>
              <span className="product__navigation-item"></span>
              <span className="product__navigation-item"></span>
              <span className="product__navigation-item"></span>
            </div>
          </div>
          <div className="product__content">
            <h3 className="product__title">
              <a href="/#">1-комнатная квартира в центре Питера</a>
            </h3>
            <div className="product__price">5 750 000 ₽</div>
            <div className="product__address">Санкт-Петербург, Невский проспект</div>
            <div className="product__date">5 часов назад</div>
          </div>
        </li>
        <li className="results__item product">
          <button className="product__favourite fav-add fav-add--checked" type="button" aria-label="Добавить в избранное">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule={"evenodd"} clipRule={"evenodd"} d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" strokeWidth={"2"} strokeLinejoin={"round"} />
            </svg>
          </button>
          <div className="product__image">
            <div className="product__image-more-photo hidden">+2 фото</div>
            <img src="img/item5.jpg" srcSet="img/item5-2x.jpg 2x" width="318" height="220" alt="Ультрабук HP Spectre X360 2019"></img>
            <div className="product__image-navigation hidden">
              <span className="product__navigation-item product__navigation-item--active"></span>
              <span className="product__navigation-item"></span>
              <span className="product__navigation-item"></span>
              <span className="product__navigation-item"></span>
              <span className="product__navigation-item"></span>
            </div>
          </div>
          <div className="product__content">
            <h3 className="product__title">
              <a href="/#">Ультрабук HP Spectre X360 2019</a>
            </h3>
            <div className="product__price">41 000 ₽</div>
            <div className="product__address">Пермь, проспект Просвещения</div>
            <div className="product__date">7 января</div>
          </div>
        </li>
        <li className="results__item product">
          <button className="product__favourite fav-add" type="button" aria-label="Добавить в избранное">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule={"evenodd"} clipRule={"evenodd"} d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" strokeWidth={"2"} strokeLinejoin={"round"} />
            </svg>
          </button>
          <div className="product__image">
            <div className="product__image-more-photo">+2 фото</div>
            <img src="img/item6.jpg" srcSet="img/item6-2x.jpg 2x" width="318" height="220" alt="ВАЗ 2101 на ходу, без документов"></img>
            <div className="product__image-navigation hidden">
              <span className="product__navigation-item product__navigation-item--active"></span>
              <span className="product__navigation-item"></span>
              <span className="product__navigation-item"></span>
              <span className="product__navigation-item"></span>
              <span className="product__navigation-item"></span>
            </div>
          </div>
          <div className="product__content">
            <h3 className="product__title">
              <a href="/#">ВАЗ 2101 на ходу, без документов</a>
            </h3>
            <div className="product__price">5 000 ₽</div>
            <div className="product__address">Омск, улица Уездная</div>
            <div className="product__date">30 декабря 2019 года</div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Results;

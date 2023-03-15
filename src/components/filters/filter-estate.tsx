function FilterEstate(): JSX.Element {
  return (
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
        <input type="number" id="square" name="min-square" min="1" defaultValue={""} placeholder="0"></input>
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
  );
};

export default FilterEstate;

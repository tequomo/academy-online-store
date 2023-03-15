function FilterLaptop(): JSX.Element {
  return (
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
            <input className="visually-hidden" type="radio" name="diagonal" value="any" id="any_diagonal" defaultChecked></input>
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
  );
};

export default FilterLaptop;

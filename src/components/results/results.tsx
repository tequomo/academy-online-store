import ResultsList from "./results-list/results-list";
import Sorting from "../sorting/sorting";

function Results(): JSX.Element {
  return (
    <section className="onlineshop-app__results results">
      <div className="results__head">
        <h2 className="title results__title">Результаты</h2>
        <Sorting />
      </div>
      <div className="results__info favourites hidden">
        <p className="favourites__empty-message">У вас пока нет избранных товаров. Чтобы отметить товар, кликните на сердечко в карточке объявления.</p>
        <p className="favourites__notion">Вы можете вернуться к списку всех товаров, кликнув ещё раз на&nbsp;«Показать избранные»</p>
      </div>
        <ResultsList />
    </section>
  );
};

export default Results;

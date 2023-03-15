import React from 'react';
import Filters from '../filters/filters';
import Results from '../results/results';

function App(): JSX.Element {
  return (
    <main>
      <section className="onlineshop-app">
        <h1 className="visually-hidden">Главная</h1>
        <div className="onlineshop-app__blueline"></div>
        <div className="onlineshop-app__wrapper">
          <Filters />
          <Results />
        </div>
      </section>
    </main>
  );
}

export default App;

// const options = {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(console.table);
/**
 * Используется цепочка then() потому что
 * в 1 then мы получаем распарсеный json
 * после этого эти полученные данные выводим в консоль
 */

// fetch('http://hn.algolia.com/api/v1/search?query=html');

/**
 * ?query=... - queryString - туда передаем параметры поиска
 * Существуют другие виды параметров
 * Записываются в виде параметр - значение
 */

//  В этом примере мы передали несколько параметров
// fetch('http://hn.algolia.com/api/v1/search?query=react&tags=story')
//   .then(res => res.json())
//   .then(data => console.log(data));

// Выносим отдельный куски кода(функции), в отдельный файл
import fetchArticles from './fetch-articles';
import updateArticlesMarkup from './update-articles-markup';

const refs = {
  articlesContainer: document.querySelector('.js-articles'),
  searchForm: document.querySelector('.js-search-form'),
  images: document.querySelectorAll('.img'),
};

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const inputVal = form.elements.query.value;

  refs.articlesContainer.innerHTML = '';
  form.reset();
  fetchArticles(inputVal).then(updateArticlesMarkup);
});

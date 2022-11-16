const refs = {
  articlesContainer: document.querySelector('.js-articles'),
};

function updateArticlesMarkup(articles) {
  console.log(articles);
  // ({articles}) - Деструктуризация обьекта
  const makeListMarkup = ({ url, title, urlToImage }) => {
    return `
  <li class="galery-item">
    <h2>${title}</h2>
    <img src="${urlToImage} width="200px" height="300px"></img>
      <a href="${url}"/></a>
    </li>
  `;
  };
  const makeEachItemMarkup = articles.map(makeListMarkup).join('');
  refs.articlesContainer.insertAdjacentHTML('beforeend', makeEachItemMarkup);
}

export default updateArticlesMarkup;

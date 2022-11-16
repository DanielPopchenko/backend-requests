// Выносим сюда функцию

const apiKey = 'b1a504b7e2f64b11a7d5f6f7e58b2bf8';
function fetchArticles(searchQuery) {
  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en`;

  // Обьект настроек
  const options = {
    headers: {
      /**
       * Авторизируемся с помощью заголовка X-Api-Key вместо apiKey
       */
      'X-Api-Key': apiKey,
    },
  };

  return (
    fetch(url, options)
      .then(res => res.json())
      // В результирующий промис пойдет только этот массив артиклов
      .then(data => data.articles)
      .catch(error => console.log(error))
  );
}

export default fetchArticles;

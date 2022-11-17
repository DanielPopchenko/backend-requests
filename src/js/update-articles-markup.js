const refs = {
  articlesContainer: document.querySelector('.js-articles'),
  img: document.querySelectorAll('.img'),
};

function updateArticlesMarkup(articles) {
  // console.log(articles);
  // ({articles}) - Деструктуризация обьекта
  const makeListMarkup = ({
    url,
    title,
    urlToImage = 'https://se.hum.academy.edu.ly/default-images/program.jpg',
  }) => {
    return `
  <li class="galery-item">
    <h2>${title}</h2>
    <img class="img" width=450px height="250px" src="${urlToImage}"></img>
    <a href="${url}"/>Link</a >
    </li>
  `;
  };
  const makeEachItemMarkup = articles.map(makeListMarkup).join('');
  refs.articlesContainer.insertAdjacentHTML('beforeend', makeEachItemMarkup);
}

export default updateArticlesMarkup;

/**
 * 1 вариант - для коллекции
 */
// const images = document.querySelectorAll('.list img');

// const io = new IntersectionObserver(onEntry, options);

// images.forEach(image => io.observe(image));

// const options = {
//   rootMargin: '100px',
// };

// const onEntry = (entries, observer) => {
//   console.log('🦷');

//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       const image = entry.target;
//       const src = image.dataset.lazy;

//       image.src = src;
//       image.classList.add('appear');

//       observer.unobserve(image);
//     }
//   });
// };

/**
 * 2 вариант - для каждого отдельно
 */
// const images = document.querySelectorAll('.list img');

// const lazyLoad = target => {
//   const options = {
//     rootMargin: '100px',
//   };

//   const io = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         console.log('👽');
//         const image = entry.target;
//         const src = image.dataset.lazy;

//         image.src = src;
//         image.classList.add('appear');
//         observer.disconnect();
//       }
//     });
//   }, options);

//   io.observe(target);
// };

// images.forEach(image => lazyLoad(image));

import {
  searchCocktailsByLetter,
  searchCocktailByName,
} from './CocktailsApiService';

import { renderPage } from './cocktailByLetter';

// import { renderPage, clearPagination } from './pagination';
//import { clearPagination } from './pagination';
//const headerSearchMain = document.querySelector('.search__form-main');
// const cardsList = document.querySelector('.markup-cards');
//const paginationEl = document.querySelector('.cards__pagination');
//const cardsSectionEl = document.querySelector('.section-cards');
//const voidMarkup = document.querySelector('.void');

let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];

const headerSearch = document.querySelector('.search__form-main');

headerSearch.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();

  let selectedLetter = event.currentTarget.elements.search.value.trim();
  console.log(selectedLetter);
  if (selectedLetter.length === 1) {
    searchCocktailsByLetter(selectedLetter).then(value => {
      renderPage(value.drinks);
      window.location.href = '#cards';
    });
  } else {
    searchCocktailByName(selectedLetter).then(value => {
      renderPage(value.drinks);
      window.location.href = '#cards';
    });
  }
  modal.classList.add('bounceOutDown');
  modal.classList.remove('modal_vis');
  body.classList.remove('body_block');

  //function onLetterClick(event) {
  //  event.preventDefault();
  //  let selectedLetter = event.target.value;
  //  if (selectedLetter.length === 1) {
  //    searchCocktailsByLetter(selectedLetter).then(
  //     value => {
  //        clearPagination();
  //        renderMarkup(value.drinks);
  //      }
  //      // renderCards(value.drinks)
  //    );
  //  } else {
  //    searchCocktailByName(selectedLetter).then(value =>
  //      // renderCards(value.drinks)
  //      {
  //        clearPagination();
  //        renderMarkup(value.drinks);
  //      }
  //    );
  //  }
}
// import {
//   searchCocktailsByLetter,
//   searchCocktailByName,
// } from './CocktailsApiService';
// import { renderPage, clearPagination } from './pagination';
// const headerSearchMain = document.querySelector('.search__form-main');
// // const cardsList = document.querySelector('.markup-cards');
// const paginationEl = document.querySelector('.cards__pagination');
// const cardsSectionEl = document.querySelector('.section-cards');
// const voidMarkup = document.querySelector('.void');

// headerSearchMain.addEventListener('input', onLetterClick);

// function onLetterClick(event) {
//   event.preventDefault();
//   let selectedLetter = event.target.value;
//   if (selectedLetter.length === 1) {
//     searchCocktailsByLetter(selectedLetter).then(
//       value => {
//         clearPagination();
//         renderMarkup(value.drinks);
//       }
//       // renderCards(value.drinks)
//     );
//   } else {
//     searchCocktailByName(selectedLetter).then(value =>
//       // renderCards(value.drinks)
//       {
//         clearPagination();
//         renderMarkup(value.drinks);
//       }
//     );
//   }
// }

// function renderCards(cardsArray) {
//   let cardMarkup = [];
//   for (let i = 0; i < cardsArray.length; i += 1) {
//     if (i < 9) {
//       console.log(cardsArray[i].strDrink);
//       cardMarkup.push(`<li class="card">
//       <img src="${cardsArray[i].strDrinkThumb}" alt="${cardsArray[i].strDrink}" />
//       <div class="card__info">
//         <p class="card__title">${cardsArray[i].strDrink}</p>
//         <div class="card__btns">
//           <button type="button" class="card__btn">
//             Learn more
//           </button>
//           <button type="button" class="card__btn-add">
//             Add to
//             <svg class="card__icon" width="18" height="18">
//               <use href="./images/icons.svg#icon-Heart"></use>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </li>`);
//     }
//   }
//   cardsList.innerHTML = cardMarkup.join('');
// }
// function renderMarkup(cardsArray) {
//   if (cardsArray === null) {
//     if (!cardsSectionEl.classList.contains('is-hidden')) {
//       markupToggle();
//     }
//   } else {
//     if (cardsSectionEl.classList.contains('is-hidden')) {
//       markupToggle();
//       renderPage(cardsArray);
//     }
//     renderPage(cardsArray);
//   }
// }

// function markupToggle() {
//   voidMarkup.classList.toggle('is-hidden');
//   cardsSectionEl.classList.toggle('is-hidden');
//   paginationEl.classList.toggle('is-hidden');
// }

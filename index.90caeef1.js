!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){o[e]=r},r.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"EVgbq":"index.90caeef1.js","410VS":"icons.6aab55b6.svg"}')),a("j7H1p"),a("3NnAA");var n,c,l=a("j7H1p"),s=a("8nrFW"),i=a("3NnAA"),d={gallery:document.querySelector(".markup-cards"),paginationControls:document.querySelector(".pagination__controls"),paginationNumbers:document.querySelector(".pagination__numbers"),pageNumbers:document.getElementsByClassName("page__number"),prevPageBtn:document.querySelector(".page-prev"),nextPageBtn:document.querySelector(".page-next")},u=(0,i.onMediaScreen)();function v(e){d.paginationNumbers.innerHTML="",d.prevPageBtn.classList.add("visually-hidden"),d.nextPageBtn.classList.add("visually-hidden"),d.paginationControls.removeEventListener("click",c),c=function(r){return function(e,r,t){var o=e.target,a=o.parentElement,c=o,l=a.classList.contains("disabled");a.classList.contains("page-prev")&&!l&&m(r,n-1);a.classList.contains("page-next")&&!l&&m(r,n+1);if(c.classList.contains("page__number")){m(r,+o.textContent)}}(r,e)},d.paginationControls.addEventListener("click",c),m(e,1),function(e){if(e.length<=u)return;for(var r=1;r<=Math.ceil(e.length/u);r++)y(r);g(),b(d.pageNumbers),d.prevPageBtn.classList.remove("visually-hidden"),d.nextPageBtn.classList.remove("visually-hidden")}(e)}function m(e,r){n=r;var t=(r-1)*u,o=r*u;d.gallery.innerHTML="",function(e){1===n?p(d.prevPageBtn):_(d.prevPageBtn);n===Math.ceil(e.length/u)?p(d.nextPageBtn):_(d.nextPageBtn)}(e),g();var a=e.slice(t,o);return(0,i.markupCard)(a,d.gallery)}function y(e){var r=document.createElement("a");r.textContent=e,r.classList.add("page__number"),d.paginationNumbers.append(r)}function g(){e(s)(d.pageNumbers).forEach((function(e){e.classList.remove("page-active"),+e.textContent===n&&e.classList.add("page-active")})),b(d.pageNumbers)}function p(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function _(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}function b(e){if(!(e.length<=6)){var r=+document.querySelector(".page-active").textContent,t=document.querySelectorAll(".page__number");if(t.forEach((function(e){return e.classList.remove("visually-hidden","page__dots-before","page__dots-after")})),r<=2){for(var o=3;o<e.length-3;o++)t[o].classList.add("visually-hidden");t[2].classList.add("page__dots-after")}else if(r>=e.length-1){for(var a=3;a<e.length-3;a++)t[a].classList.add("visually-hidden");t[e.length-3].classList.add("page__dots-before")}else{for(var n=1;n<e.length-1;n++)t[n].classList.add("visually-hidden");t[r-2].classList.remove("visually-hidden"),t[r-1].classList.remove("visually-hidden"),t[r].classList.remove("visually-hidden"),r-2>1&&t[r-2].classList.add("page__dots-before"),r+2<e.length&&t[r].classList.add("page__dots-after")}}}var f=document.querySelector(".hero__search-list"),h=document.querySelector(".cards__pagination"),k=document.querySelector(".section-cards"),L=document.querySelector(".void");function S(e){null!==e?(k.classList.contains("is-hidden")&&(q(),v(e)),v(e)):k.classList.contains("is-hidden")||q()}function q(){L.classList.toggle("is-hidden"),k.classList.toggle("is-hidden"),h.classList.toggle("is-hidden")}f.addEventListener("click",(function(e){var r=e.target.name;(0,l.searchCocktailsByLetter)(r).then((function(e){S(e.drinks)}))}));var x=document.querySelector(".theme__light"),C=document.querySelector(".slider.round"),E=document.querySelector(".theme__dark"),B=document.querySelector(".navigation__home"),N=document.querySelector(".dropbtn-Favorite"),w=(document.querySelector(".navigation__favorite"),document.querySelector(".dark-tema")),H=document.querySelector(".slider-main.round-main"),T=document.querySelector(".modal"),A=document.querySelector(".theme__light-main"),M=document.querySelector(".theme__dark-main"),D=document.querySelector(".dropdown-content"),I=document.querySelector(".btn-login"),P=document.querySelector(".search__form button"),j=document.querySelector(".search__form input");C.addEventListener("click",(function(){document.body.classList.toggle("dark")?(E.style.color="var(--var-accent-color)",x.style.color="var(--var-primary-bg-color)",B.style.color="var(--var-primary-bg-color)",D.style.color="var(--var-primary-bg-color)",D.style.background="var(--var-primary-text-color)",N.style.color="var(--var-primary-bg-color)",I.style.background="var(--var-accent-color)",I.style.color="var(--var-primary-bg-color)",P.style.background="var(--var-primary-text-color)",j.style.background="var(--var-primary-text-color)",w.style.color="var(--var-primary-bg-color)"):(D.style.color="var(--var-primary-text-color)",D.style.background="var(--var-primary-bg-color)",x.style.color="var(--var-accent-color)",E.style.color="var(--var-primary-text-color)",B.style.color="var(--var-primary-text-color)",N.style.color="var(--var-primary-text-color)",I.style.background="var(--var-primary-bg-color)",I.style.color="var(--var-accent-color)",P.style.background="var(--var-primary-bg-color)",j.style.background="var(--var-primary-bg-color)",w.style.color="var(--var-primary-text-color)")})),H.addEventListener("click",(function(){document.body.classList.toggle("dark")?(T.style.background="var(--var-primary-text-color)",E.style.color="var(--var-accent-color)",x.style.color="var(--var-primary-bg-color)",B.style.color="var(--var-primary-bg-color)",w.style.color="var(--var-primary-bg-color)",N.style.color="var(--var-accent-color)",A.style.color="var(--var-primary-bg-color)",M.style.color="var(--var-accent-color)",O.style.color="var(--var-primary-bg-color)",F.style.color="var(--var-primary-bg-color)",R.style.fill="var(--var-primary-bg-color)",V.style.color="var(--var-primary-bg-color)",U.style.background="var(--var-primary-text-color)",G.style.color="var(--var-primary-bg-color)",J.style.background="var(--var-primary-text-color)",W.style.background="var(--var-primary-text-color)",P.style.background="var(--var-primary-text-color)",j.style.background="var(--var-primary-text-color)",z.style.background="var(--var-accent-color)",z.style.color="var(--var-primary-bg-color)",K.style.fill="var(--var-primary-bg-color)",Q.style.fill="var(--var-primary-bg-color)"):(x.style.color="var(--var-accent-color)",E.style.color="var(--var-primary-text-color)",B.style.color="var(--var-primary-text-color)",w.style.color="var(--var-primary-text-color)",N.style.color="var(--var-primary-text-color)",T.style.backgroundColor="var(--var-primary-bg-color)",A.style.color="var(--var-accent-color)",M.style.color="var(--var-primary-text-color)",O.style.color="var(--var-primary-text-color)",F.style.color="var(--var-primary-text-color)",R.style.fill="var(--var-primary-text-color)",V.style.color="var(--var-primary-text-color)",U.style.background="var(--var-primary-bg-color)",G.style.color="var(--var-primary-text-color)",J.style.background="var(--var-primary-bg-color)",W.style.background="var(--var-primary-bg-color)",P.style.background="var(--var-primary-bg-color)",j.style.background="var(--var-primary-bg-color)",z.style.background="var(--var-primary-bg-color)",z.style.color="var(--var-accent-color)",K.style.fill="var(--var-primary-text-color)",Q.style.fill="var(--var-primary-text-color)")}));var O=document.querySelector(".faivorite-main"),F=document.querySelector(".navigation__home-main"),R=document.querySelector(".favorite__icon"),U=document.querySelector(".dropdown-content-main"),V=document.querySelector(".drownFavor"),G=document.querySelector(".drownFav"),J=document.querySelector(".search__form-main button"),W=document.querySelector(".search__form-main input"),z=document.querySelector(".btn-login-main"),K=document.querySelector(".mobile__icon"),Q=document.querySelector(".close_modal");var X=document.querySelector(".open_modal"),Y=document.getElementById("close_modal"),Z=document.getElementById("modal"),$=document.getElementsByTagName("body")[0];X.onclick=function(){Z.classList.add("modal_vis"),Z.classList.remove("bounceOutDown"),$.classList.add("body_block")},Y.onclick=function(){Z.classList.add("bounceOutDown"),Z.classList.remove("modal_vis"),$.classList.remove("body_block")};l=a("j7H1p");document.querySelector(".search__form").addEventListener("submit",(function(e){e.preventDefault();var r=e.currentTarget.elements.search.value;console.log(r),1===r.length?(0,l.searchCocktailsByLetter)(r).then((function(e){S(e.drinks)})):(0,l.searchCocktailByName)(r).then((function(e){S(e.drinks)}))})),a("iNWLi");var ee=document.querySelector(".hero__search-list"),re=document.querySelector(".hero__btn");ee.addEventListener("click",(function(e){var r=e.target.name.toUpperCase();re.textContent=r}));var te;l=a("j7H1p");te=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("410VS");var oe={modal:document.querySelector("[data-cocktails-modal]"),cocktailsCard:document.querySelector(".cocktails-modal"),ulListCocktails:document.querySelector(".markup-cards")},ae="";function ne(){oe.modal.classList.toggle("is-hidden")}oe.ulListCocktails.addEventListener("click",(function(e){if("card__btn"!==e.target.classList.value)return;ae=e.target.id,(0,l.getCocktailById)(ae).then((function(e){!function(e){ne(),oe.cocktailsCard.innerHTML="",function(e){oe.cocktailsCard.insertAdjacentHTML("beforeend",function(e){for(var r=e.strDrink,t=e.strInstructions,o=e.strDrinkThumb,a=e.strGlass,n=e.strCategory,c=[],l=[],s=1;s<20;s++)e["strMeasure".concat(s)]&&c.push(e["strMeasure".concat(s)]),e["strIngredient".concat(s)]&&l.push(e["strIngredient".concat(s)]);for(var i={},d=1;d<l.length;d++){void 0===c[d]&&(c[d]=""),i+='<li class="cocktails-modal__it"> <span> ✶ '.concat(c[d],' </span> <a class="cocktails-modal__link" href = "').concat(l[d],'" > ').concat(l[d]," </a></li>")}return'\n    <div class="cocktails-modal__container">\n    <button type="button" class="cocktails-modal__close" data-cocktails-modal-close>\n        <svg width="18px" height="18px">\n            <use href="'.concat(te,'#icon-vector-off"></use>\n        </svg>\n    </button>\n    <div class="cocktails-modal__card">\n        <h4 class="cocktails-modal__title"> ').concat(r,' </h4>\n        <div class="cocktails-modal__inner">\n            <div class="cocktails-modal__wraper">\n                <p class="cocktails-modal__pretitle">Instractions:</p>\n                <p class="cocktails-modal__text">').concat(t,'</p>\n            </div>\n            <a class = "cocktails-modal__item" href = "').concat(o,'">\n                <img class = "cocktails-modal__image"  src = "').concat(o,'" alt = "').concat(a,'" loading="lazy" width="280px" height="280px" />\n            </a>\n            <div class="cocktails-modal__wrap">\n                <p class="cocktails-modal__ingredients">INGREDIENTS</p>\n                <p class="cocktails-modal__name">').concat(n,'</p>\n                <ul class="cocktails-modal__list"> ').concat(i.slice(15),' </ul>\n            </div>\n        </div>\n        <button type="button" class="cocktails-modal__btn">Add to favorite</button>\n    </div>\n    </div> ')}(e))}(e),document.querySelector(".cocktails-modal__close").addEventListener("click",ne)}(e.drinks[0])}))}));l=a("j7H1p");var ce={modal:document.querySelector("[data-ingredients-modal]"),cocktailsCard:document.querySelector(".cocktails-modal"),ingredientsCard:document.querySelector(".ingredients-modal")};function le(){ce.modal.classList.toggle("show-modal")}ce.cocktailsCard.addEventListener("click",(function(e){if(e.preventDefault(),"cocktails-modal__link"!==e.target.classList.value)return;var r=e.target.textContent;(0,l.searchIngredientsByName)(r.trim()).then((function(e){!function(e){le(),ce.ingredientsCard.innerHTML="",function(e){ce.ingredientsCard.insertAdjacentHTML("beforeend",(r=e,t=r.strIngredient,o=r.strType,a=r.strDescription,n=r.strAlcohol,'\n    <button type="button" class="ingredients-modal__close" data-ingredients-modal-close>\n        <svg width="18px" height="18px">\n            <use href="'.concat(te,'#icon-vector-off"></use>\n        </svg>\n    </button>\n    <div class="ingredients-modal__card">\n        <h4 class="ingredients-modal__title"> ').concat(t,' </h4>\n        <div class="ingredients-modal__line"></div>\n        <p class="ingredients-modal__text"> ').concat(a?"".concat(a):"This information will be added soon",'</p>\n        <button type="button" class=\'load-more\'>Show more</button>\n        <ul class="ingredients-modal__list">\n            <li><p class="ingredients-modal__pretitle"> ').concat(o?"✶ Type : ".concat(o):"",' </p></li>\n            <li><p class="ingredients-modal__pretitle"> ✶ Alcohol : ').concat(n,' </p></li>\n        </ul>\n        <button type="button" class="ingredients-modal__btn" data-ingredients-modal-btn>Add to favorite</button>\n    </div>  ')));var r,t,o,a,n}(e);var r=document.querySelector(".ingredients-modal__text"),t=document.querySelector(".load-more"),o=r.textContent,a=n(o,300);function n(e,r){return e.length<=r?e:e.slice(0,r)+"..."}function c(){r.innerHTML=o,t.classList.add("visually-hidden")}r.innerHTML=a,t.addEventListener("click",c),document.querySelector(".ingredients-modal__close").addEventListener("click",le)}(e.ingredients[0])}))}));l=a("j7H1p");var se=document.getElementById("modal"),ie=document.getElementsByTagName("body")[0];document.querySelector(".search__form-main").addEventListener("submit",(function(e){e.preventDefault();var r=e.currentTarget.elements.search.value;console.log(r),1===r.length?(0,l.searchCocktailsByLetter)(r).then((function(e){S(e.drinks)})):(0,l.searchCocktailByName)(r).then((function(e){S(e.drinks)}));se.classList.add("bounceOutDown"),se.classList.remove("modal_vis"),ie.classList.remove("body_block")}))}();
//# sourceMappingURL=index.90caeef1.js.map

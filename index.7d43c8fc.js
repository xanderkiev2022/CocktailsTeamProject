var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o),o("kyEFX").register(JSON.parse('{"5ZPII":"index.7d43c8fc.js","8OQ7p":"icons.6aab55b6.svg"}')),o("kGl8X"),o("epwpP");var a=o("kGl8X"),l=o("epwpP");const n={gallery:document.querySelector(".markup-cards"),paginationControls:document.querySelector(".pagination__controls"),paginationNumbers:document.querySelector(".pagination__numbers"),pageNumbers:document.getElementsByClassName("page__number"),prevPageBtn:document.querySelector(".page-prev"),nextPageBtn:document.querySelector(".page-next")};let c,s,i=(0,l.onMediaScreen)();function d(e){n.paginationNumbers.innerHTML="",n.prevPageBtn.classList.add("visually-hidden"),n.nextPageBtn.classList.add("visually-hidden"),n.paginationControls.removeEventListener("click",s),s=t=>function({target:e},t,r){const o=e.parentElement,a=e,l=o.classList.contains("disabled");o.classList.contains("page-prev")&&!l&&u(t,c-1);o.classList.contains("page-next")&&!l&&u(t,c+1);if(a.classList.contains("page__number")){u(t,+e.textContent)}}(t,e),n.paginationControls.addEventListener("click",s),u(e,1),function(e){if(e.length<=i)return;for(let t=1;t<=Math.ceil(e.length/i);t++)m(t);v(),p(n.pageNumbers),n.prevPageBtn.classList.remove("visually-hidden"),n.nextPageBtn.classList.remove("visually-hidden")}(e)}function u(e,t){c=t;const r=(t-1)*i,o=t*i;n.gallery.innerHTML="",function(e){1===c?y(n.prevPageBtn):g(n.prevPageBtn);c===Math.ceil(e.length/i)?y(n.nextPageBtn):g(n.nextPageBtn)}(e),v();const a=e.slice(r,o);return(0,l.markupCard)(a,n.gallery)}function m(e){const t=document.createElement("a");t.textContent=e,t.classList.add("page__number"),n.paginationNumbers.append(t)}function v(){[...n.pageNumbers].forEach((e=>{e.classList.remove("page-active");+e.textContent===c&&e.classList.add("page-active")})),p(n.pageNumbers)}function y(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function g(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}function p(e){if(!(e.length<=6)){const t=+document.querySelector(".page-active").textContent,r=document.querySelectorAll(".page__number");if(r.forEach((e=>e.classList.remove("visually-hidden","page__dots-before","page__dots-after"))),t<=2){for(let t=3;t<e.length-3;t++)r[t].classList.add("visually-hidden");r[2].classList.add("page__dots-after")}else if(t>=e.length-1){for(let t=3;t<e.length-3;t++)r[t].classList.add("visually-hidden");r[e.length-3].classList.add("page__dots-before")}else{for(let t=1;t<e.length-1;t++)r[t].classList.add("visually-hidden");r[t-2].classList.remove("visually-hidden"),r[t-1].classList.remove("visually-hidden"),r[t].classList.remove("visually-hidden"),t-2>1&&r[t-2].classList.add("page__dots-before"),t+2<e.length&&r[t].classList.add("page__dots-after")}}}const b=document.querySelector(".hero__search-list"),_=document.querySelector(".cards__pagination"),k=document.querySelector(".section-cards"),f=document.querySelector(".void");function h(e){null!==e?(k.classList.contains("is-hidden")&&(L(),d(e)),d(e)):k.classList.contains("is-hidden")||L()}function L(){f.classList.toggle("is-hidden"),k.classList.toggle("is-hidden"),_.classList.toggle("is-hidden")}b.addEventListener("click",(function(e){let t=e.target.name;(0,a.searchCocktailsByLetter)(t).then((e=>{h(e.drinks)}))}));const S=document.querySelector(".theme__light"),x=document.querySelector(".slider.round"),q=document.querySelector(".theme__dark"),C=document.querySelector(".navigation__home"),E=document.querySelector(".dropbtn-Favorite"),w=(document.querySelector(".navigation__favorite"),document.querySelector(".dark-tema")),B=document.querySelector(".slider-main.round-main"),T=document.querySelector(".modal"),$=document.querySelector(".theme__light-main"),N=document.querySelector(".theme__dark-main"),P=document.querySelector(".dropdown-content"),M=document.querySelector(".btn-login"),I=document.querySelector(".search__form button"),D=document.querySelector(".search__form input"),H=document.querySelector(".cocktails-modal");x.addEventListener("click",(function(){document.body.classList.toggle("dark")?(q.style.color="var(--var-accent-color)",S.style.color="var(--var-primary-bg-color)",C.style.color="var(--var-primary-bg-color)",P.style.color="var(--var-primary-bg-color)",P.style.background="var(--var-primary-text-color)",E.style.color="var(--var-primary-bg-color)",M.style.background="var(--var-accent-color)",M.style.color="var(--var-primary-bg-color)",I.style.background="var(--var-primary-text-color)",D.style.background="var(--var-primary-text-color)",w.style.color="var(--var-primary-bg-color)",H.style.background="var(--var-primary-text-color)"):(P.style.color="var(--var-primary-text-color)",P.style.background="var(--var-primary-bg-color)",S.style.color="var(--var-accent-color)",q.style.color="var(--var-primary-text-color)",C.style.color="var(--var-primary-text-color)",E.style.color="var(--var-primary-text-color)",M.style.background="var(--var-primary-bg-color)",M.style.color="var(--var-accent-color)",I.style.background="var(--var-primary-bg-color)",D.style.background="var(--var-primary-bg-color)",w.style.color="var(--var-primary-text-color)",H.style.background="var(--var-primary-bg-color)")})),B.addEventListener("click",(function(){document.body.classList.toggle("dark")?(T.style.background="var(--var-primary-text-color)",q.style.color="var(--var-accent-color)",S.style.color="var(--var-primary-bg-color)",C.style.color="var(--var-primary-bg-color)",w.style.color="var(--var-primary-bg-color)",E.style.color="var(--var-accent-color)",$.style.color="var(--var-primary-bg-color)",N.style.color="var(--var-accent-color)",A.style.color="var(--var-primary-bg-color)",O.style.color="var(--var-primary-bg-color)",F.style.fill="var(--var-primary-bg-color)",X.style.color="var(--var-primary-bg-color)",G.style.background="var(--var-primary-text-color)",R.style.color="var(--var-primary-bg-color)",U.style.background="var(--var-primary-text-color)",j.style.background="var(--var-primary-text-color)",I.style.background="var(--var-primary-text-color)",D.style.background="var(--var-primary-text-color)",z.style.background="var(--var-accent-color)",z.style.color="var(--var-primary-bg-color)",Y.style.fill="var(--var-primary-bg-color)",Q.style.fill="var(--var-primary-bg-color)",H.style.background="var(--var-primary-text-color)"):(S.style.color="var(--var-accent-color)",q.style.color="var(--var-primary-text-color)",C.style.color="var(--var-primary-text-color)",w.style.color="var(--var-primary-text-color)",E.style.color="var(--var-primary-text-color)",T.style.backgroundColor="var(--var-primary-bg-color)",$.style.color="var(--var-accent-color)",N.style.color="var(--var-primary-text-color)",A.style.color="var(--var-primary-text-color)",O.style.color="var(--var-primary-text-color)",F.style.fill="var(--var-primary-text-color)",X.style.color="var(--var-primary-text-color)",G.style.background="var(--var-primary-bg-color)",R.style.color="var(--var-primary-text-color)",U.style.background="var(--var-primary-bg-color)",j.style.background="var(--var-primary-bg-color)",I.style.background="var(--var-primary-bg-color)",D.style.background="var(--var-primary-bg-color)",z.style.background="var(--var-primary-bg-color)",z.style.color="var(--var-accent-color)",Y.style.fill="var(--var-primary-text-color)",Q.style.fill="var(--var-primary-text-color)",H.style.background="var(--var-primary-bg-color)")}));const A=document.querySelector(".faivorite-main"),O=document.querySelector(".navigation__home-main"),F=document.querySelector(".favorite__icon"),G=document.querySelector(".dropdown-content-main"),X=document.querySelector(".drownFavor"),R=document.querySelector(".drownFav"),U=document.querySelector(".search__form-main button"),j=document.querySelector(".search__form-main input"),z=document.querySelector(".btn-login-main"),Y=document.querySelector(".mobile__icon"),Q=document.querySelector(".close_modal");let J=document.querySelector(".open_modal"),Z=document.getElementById("close_modal"),K=document.getElementById("modal"),V=document.getElementsByTagName("body")[0];J.onclick=function(){K.classList.add("modal_vis"),K.classList.remove("bounceOutDown"),V.classList.add("body_block")},Z.onclick=function(){K.classList.add("bounceOutDown"),K.classList.remove("modal_vis"),V.classList.remove("body_block")};a=o("kGl8X");document.querySelector(".search__form").addEventListener("submit",(function(e){e.preventDefault();let t=e.currentTarget.elements.search.value.trim();console.log(t),1===t.length?(0,a.searchCocktailsByLetter)(t).then((e=>{h(e.drinks)})):(0,a.searchCocktailByName)(t).then((e=>{h(e.drinks)}))})),o("2ix2C");const W=document.querySelector(".hero__search-list"),ee=document.querySelector(".hero__btn");W.addEventListener("click",(function(e){const t=e.target.name.toUpperCase();ee.textContent=t;r=window.matchMedia("(min-width: 768px)"),r.matches||(W.style.transform="translateY(-50%)",W.style.opacity="0",W.style.transition="opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",W.style.pointerEvents="none",setTimeout((()=>{W.style.removeProperty("transform"),W.style.removeProperty("opacity"),W.style.removeProperty("transition"),W.style.removeProperty("pointer-events")}),250));var r}));var te;a=o("kGl8X");te=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const re={backdrop:document.querySelector("[data-cocktails-modal]"),cocktailsCard:document.querySelector(".cocktails-modal"),ulListCocktails:document.querySelector(".markup-cards")};let oe="";function ae(){re.backdrop.classList.toggle("is-hidden")}function le(e){e.target===e.currentTarget&&ae()}re.ulListCocktails.addEventListener("click",(function(e){if("card__btn"!==e.target.classList.value)return;oe=e.target.id,(0,a.getCocktailById)(oe).then((e=>{!function(e){ae(),re.cocktailsCard.innerHTML="",function(e){re.cocktailsCard.insertAdjacentHTML("beforeend",function(e){const{strDrink:t,strInstructions:r,strDrinkThumb:o,strGlass:a,strCategory:l}=e,n=[],c=[];for(let t=1;t<20;t++)e[`strMeasure${t}`]&&n.push(e[`strMeasure${t}`]),e[`strIngredient${t}`]&&c.push(e[`strIngredient${t}`]);let s={};for(let e=1;e<c.length;e++){void 0===n[e]&&(n[e]=""),s+=`<li class="cocktails-modal__it"> <span> ✶ ${n[e]} </span> <a class="cocktails-modal__link" href = "${c[e]}" > ${c[e]} </a></li>`}return`\n    <div class="cocktails-modal__container">\n    <button type="button" class="cocktails-modal__close" data-cocktails-modal-close>\n        <svg width="18px" height="18px">\n            <use href="${te}#icon-vector-off"></use>\n        </svg>\n    </button>\n    <div class="cocktails-modal__card">\n        <h4 class="cocktails-modal__title"> ${t} </h4>\n        <div class="cocktails-modal__inner">\n            <div class="cocktails-modal__wraper">\n                <p class="cocktails-modal__pretitle">Instractions:</p>\n                <p class="cocktails-modal__text">${r}</p>\n            </div>\n            <a class = "cocktails-modal__item" href = "${o}">\n                <img class = "cocktails-modal__image"  src = "${o}" alt = "${a}" loading="lazy" width="280px" height="280px" />\n            </a>\n            <div class="cocktails-modal__wrap">\n                <p class="cocktails-modal__ingredients">INGREDIENTS</p>\n                <p class="cocktails-modal__name">${l}</p>\n                <ul class="cocktails-modal__list"> ${s.slice(15)} </ul>\n            </div>\n        </div>\n        <button type="button" class="cocktails-modal__btn">Add to favorite</button>\n    </div>\n    </div> `}(e))}(e),document.querySelector(".cocktails-modal__close").addEventListener("click",ae),re.backdrop.addEventListener("click",le)}(e.drinks[0])}))}));a=o("kGl8X");const ne={backdrop:document.querySelector("[data-ingredients-modal]"),cocktailsCard:document.querySelector(".cocktails-modal"),ingredientsCard:document.querySelector(".ingredients-modal")};function ce(e){e.target===e.currentTarget&&se()}function se(){ne.backdrop.classList.toggle("show-modal"),ne.ingredientsCard.style.overflowY="hidden"}ne.cocktailsCard.addEventListener("click",(function(e){if(e.preventDefault(),"cocktails-modal__link"!==e.target.classList.value)return;let t=e.target.textContent;(0,a.searchIngredientsByName)(t.trim()).then((e=>{!function(e){se(),ne.ingredientsCard.innerHTML="",function(e){ne.ingredientsCard.insertAdjacentHTML("beforeend",function({strIngredient:e,strType:t,strDescription:r,strAlcohol:o}){return`\n    <button type="button" class="ingredients-modal__close" data-ingredients-modal-close>\n        <svg width="18px" height="18px">\n            <use href="${te}#icon-vector-off"></use>\n        </svg>\n    </button>\n    <div class="ingredients-modal__card">\n        <h4 class="ingredients-modal__title"> ${e} </h4>\n        <div class="ingredients-modal__line"></div>\n        <p class="ingredients-modal__text"> ${r?`${r}`:"This information will be added soon"}</p>\n        <button type="button" class='ingredients-modal__show-btn'>Show more</button>\n        <ul class="ingredients-modal__list">\n            <li><p class="ingredients-modal__pretitle"> ${t?`✶ Type : ${t}`:""} </p></li>\n            <li><p class="ingredients-modal__pretitle"> ✶ Alcohol : ${o} </p></li>\n        </ul>\n        <button type="button" class="ingredients-modal__btn" data-ingredients-modal-btn>Add to favorite</button>\n    </div>  `}(e))}(e),function(){const e=document.querySelector(".ingredients-modal__text"),t=document.querySelector(".ingredients-modal__show-btn"),r=e.textContent,o=(a=r,l=300,a.length<=l?a:a.slice(0,l)+"...");var a,l;e.innerHTML=o,t.addEventListener("click",(()=>{e.innerHTML=r,ne.ingredientsCard.style.overflowY="auto"}))}(),document.querySelector(".ingredients-modal__close").addEventListener("click",se),ne.backdrop.addEventListener("click",ce)}(e.ingredients[0])}))}));a=o("kGl8X");let ie=document.getElementById("modal"),de=document.getElementsByTagName("body")[0];document.querySelector(".search__form-main").addEventListener("submit",(function(e){e.preventDefault();let t=e.currentTarget.elements.search.value;console.log(t),1===t.length?(0,a.searchCocktailsByLetter)(t).then((e=>{h(e.drinks)})):(0,a.searchCocktailByName)(t).then((e=>{h(e.drinks)}));ie.classList.add("bounceOutDown"),ie.classList.remove("modal_vis"),de.classList.remove("body_block")}));
//# sourceMappingURL=index.7d43c8fc.js.map

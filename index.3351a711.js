var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o),o("kyEFX").register(JSON.parse('{"5ZPII":"index.3351a711.js","8OQ7p":"icons.6aab55b6.svg"}')),o("kGl8X"),o("epwpP");var n=o("kGl8X"),a=o("epwpP");const l={gallery:document.querySelector(".markup-cards"),paginationNumbers:document.querySelector(".pagination__numbers"),pageNumbers:document.getElementsByClassName("page__number"),prevPageBtn:document.querySelector(".page-prev"),nextPageBtn:document.querySelector(".page-next")};let c,s=(0,a.onMediaScreen)();function i(e){d(e,1),function(e){if(e.length<=s)return;for(let t=1;t<=Math.ceil(e.length/s);t++)u(t);v(),l.prevPageBtn.classList.remove("visually-hidden"),l.nextPageBtn.classList.remove("visually-hidden")}(e),l.prevPageBtn.addEventListener("click",(()=>{d(e,c-1)})),l.nextPageBtn.addEventListener("click",(()=>{d(e,c+1)})),[...l.pageNumbers].forEach((t=>{const r=+t.textContent;t.addEventListener("click",(()=>{d(e,r)}))}))}function d(e,t){c=t;const r=(t-1)*s,o=t*s;l.gallery.innerHTML="",function(e){1===c?p(l.prevPageBtn):y(l.prevPageBtn);c===Math.ceil(e.length/s)?p(l.nextPageBtn):y(l.nextPageBtn)}(e),v();const n=e.slice(r,o);return(0,a.markupCard)(n,l.gallery)}function u(e){const t=document.createElement("a");t.textContent=e,t.classList.add("page__number"),l.paginationNumbers.append(t)}function m(){l.paginationNumbers.innerHTML="",l.prevPageBtn.classList.add("visually-hidden"),l.nextPageBtn.classList.add("visually-hidden")}function v(){[...l.pageNumbers].forEach((e=>{e.classList.remove("page-active");+e.textContent===c&&e.classList.add("page-active")}))}function p(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function y(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}const g=document.querySelector(".hero__search-list"),_=document.querySelector(".cards__pagination"),k=document.querySelector(".section-cards"),h=document.querySelector(".void");function f(){h.classList.toggle("is-hidden"),k.classList.toggle("is-hidden"),_.classList.toggle("is-hidden")}g.addEventListener("click",(function(e){let t=e.target.name;(0,n.searchCocktailsByLetter)(t).then((e=>{var t;m(),null===(t=e.drinks)?k.classList.contains("is-hidden")||f():(k.classList.contains("is-hidden")&&(f(),i(t)),i(t))}))}));const b=document.querySelector(".theme__light"),L=document.querySelector(".slider.round"),S=document.querySelector(".theme__dark"),q=document.querySelector(".navigation__home"),x=document.querySelector(".dropbtn-Favorite"),$=document.querySelector(".navigation__favorite"),E=document.querySelector(".dark-tema"),C=document.querySelector(".slider-main.round-main"),B=document.querySelector(".modal"),I=document.querySelector(".theme__light-main"),w=document.querySelector(".theme__dark-main"),M=document.querySelector(".dropdown-content");L.addEventListener("click",(function(){document.body.classList.toggle("dark")?(S.style.color="var(--var-accent-color)",b.style.color="var(--var-primary-bg-color)",q.style.color="var(--var-primary-bg-color)",$.style.color="var(--var-primary-bg-color)",E.style.color="var(--var-primary-bg-color)",M.style.color="var(--var-primary-bg-color)",x.style.color="var(--var-primary-bg-color)"):(M.style.color="var(--var-primary-text-color)",b.style.color="var(--var-accent-color)",S.style.color="var(--var-primary-text-color)",q.style.color="var(--var-primary-text-color)",E.style.color="var(--var-primary-text-color)",x.style.color="var(--var-primary-text-color)")})),C.addEventListener("click",(function(){document.body.classList.toggle("dark")?(B.style.background="var(--var-primary-text-color)",S.style.color="var(--var-accent-color)",b.style.color="var(--var-primary-bg-color)",q.style.color="var(--var-primary-bg-color)",E.style.color="var(--var-primary-bg-color)",x.style.color="var(--var-accent-color)",I.style.color="var(--var-primary-bg-color)",w.style.color="var(--var-accent-color)",N.style.color="var(--var-primary-bg-color)",P.style.color="var(--var-primary-bg-color)",T.style.fill="var(--var-primary-bg-color)",H.style.color="var(--var-primary-bg-color)",D.style.background="var(--var-primary-text-color)",A.style.color="var(--var-primary-bg-color)"):(b.style.color="var(--var-accent-color)",S.style.color="var(--var-primary-text-color)",q.style.color="var(--var-primary-text-color)",E.style.color="var(--var-primary-text-color)",x.style.color="var(--var-primary-text-color)",B.style.backgroundColor="var(--var-primary-bg-color)",I.style.color="var(--var-accent-color)",w.style.color="var(--var-primary-text-color)",N.style.color="var(--var-primary-text-color)",P.style.color="var(--var-primary-text-color)",T.style.fill="var(--var-primary-text-color)",H.style.color="var(--var-primary-text-color)",D.style.background="var(--var-primary-bg-color)",A.style.color="var(--var-primary-text-color)")}));const N=document.querySelector(".faivorite-main"),P=document.querySelector(".navigation__home-main"),T=document.querySelector(".favorite__icon"),D=document.querySelector(".dropdown-content-main"),H=document.querySelector(".drownFavor"),A=document.querySelector(".drownFav");let F=document.querySelector(".open_modal"),G=document.getElementById("close_modal"),O=document.getElementById("modal"),X=document.getElementsByTagName("body")[0];F.onclick=function(){O.classList.add("modal_vis"),O.classList.remove("bounceOutDown"),X.classList.add("body_block")},G.onclick=function(){O.classList.add("bounceOutDown"),O.classList.remove("modal_vis"),X.classList.remove("body_block")};n=o("kGl8X");const R=document.querySelector(".search__form"),U=document.querySelector(".cards__pagination"),j=document.querySelector(".section-cards"),Q=document.querySelector(".void");function z(e){null===e?j.classList.contains("is-hidden")||J():(j.classList.contains("is-hidden")&&(J(),i(e)),i(e))}function J(){Q.classList.toggle("is-hidden"),j.classList.toggle("is-hidden"),U.classList.toggle("is-hidden")}R.addEventListener("input",(function(e){e.preventDefault();let t=e.target.value;1===t.length?(0,n.searchCocktailsByLetter)(t).then((e=>{m(),z(e.drinks)})):(0,n.searchCocktailByName)(t).then((e=>{m(),z(e.drinks)}))})),o("2ix2C");const Z=document.querySelector(".hero__search-list"),K=document.querySelector(".hero__btn");Z.addEventListener("click",(function(e){const t=e.target.name.toUpperCase();K.textContent=t}));var V;n=o("kGl8X");V=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const W={modal:document.querySelector("[data-cocktails-modal]"),cocktailsCard:document.querySelector(".cocktails-modal"),ulListCocktails:document.querySelector(".markup-cards")};let Y="";function ee(e){e.target.textContent="Remove from favorite",e.target.style.width="248px"}function te(){W.modal.classList.toggle("is-hidden")}W.ulListCocktails.addEventListener("click",(function(e){if("card__btn"!==e.target.classList.value)return;Y=e.target.id,(0,n.getCocktailById)(Y).then((e=>{!function(e){te(),W.cocktailsCard.innerHTML="",function(e){W.cocktailsCard.insertAdjacentHTML("beforeend",function(e){const{strDrink:t,strInstructions:r,strDrinkThumb:o,strGlass:n,strCategory:a,strIngredient1:l,strIngredient2:c,strIngredient3:s,strIngredient4:i,strIngredient5:d,strIngredient6:u,strIngredient7:m,strIngredient8:v,strIngredient9:p,strIngredient10:y,strMeasure1:g,strMeasure2:_,strMeasure3:k,strMeasure4:h,strMeasure5:f,strMeasure6:b,strMeasure7:L,strMeasure8:S,strMeasure9:q,strMeasure10:x}=e;return`\n    <button type="button" class="cocktails-modal__close" data-cocktails-modal-close>\n        <svg width="18px" height="18px">\n            <use href="${V}#icon-vector-off"></use>\n        </svg>\n    </button>\n<div class="cocktails-modal__card">\n    <h4 class="cocktails-modal__title"> ${t} </h4>\n    <p class="cocktails-modal__pretitle">Instractions:</p>\n    <p class="cocktails-modal__text">${r}</p>\n    <a class = "cocktails-modal__item" href = "${o}">\n        <img \n        class = "cocktails-modal__image"\n        src = "${o}" \n        data-source = "${o}" \n        alt = "${n}" loading="lazy" width="280px" height="280px" />\n        </a>\n    <div>\n        <p class="cocktails-modal__ingredients">INGREDIENTS</p>\n        <p class="cocktails-modal__name"> ${a}</p>\n        <ul class="cocktails-modal__list">\n        <li class="cocktails-modal__it"> <span> ✶ ${g} </span> <p> ${l} </p> </li>\n        <li class="cocktails-modal__it">  <span> ✶ ${_} </span> <p> ${c} </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ${_} </span> <p> ${c} </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ${k} </span> <p> ${s} </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ${h} </span> <p> ${i} </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ${f} </span> <p> ${d}  </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ${b} </span> <p> ${u} </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ${L} </span> <p> ${m} </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ${S} </span> <p> ${v}  </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ${q} </span> <p> ${p}  </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ${x} </span> <p> ${y}  </p></li>\n        </ul>\n    </div>\n    <button type="button" class="cocktails-modal__btn">Add to favorite</button>\n</div>\n        </div> `}(e))}(e);document.querySelector(".cocktails-modal__btn").addEventListener("click",ee),document.querySelector(".cocktails-modal__close").addEventListener("click",te)}(e.drinks[0])}))}));n=o("kGl8X");const re=document.querySelector(".cocktails-modal"),oe=document.querySelector(".ingredients-modal"),ne=document.querySelector("[data-ingredients-modal]");function ae(){ne.classList.toggle("show-modal")}re.addEventListener("click",(function(e){let t=e.target.textContent;(0,n.searchIngredientsByName)(t.trim()).then((e=>{!function(e){ae(),oe.innerHTML="",function(e){oe.insertAdjacentHTML("beforeend",function({strIngredient:e,strType:t,strDescription:r}){return`\n    <button type="button" class="ingredients-modal__close" data-ingredients-modal-close>\n    <svg width="18px" height="18px">\n        <use href="${V}#icon-vector-off"></use>\n    </svg>\n</button>\n<div class="ingredients-modal__card">\n<h4 class="ingredients-modal__title"> ${e} </h4>\n<p class="ingredients-modal__pretitle"> ${t} </p>\n<div class="footer__line"></div>\n<p class="ingredients-modal__text"> ${r} </p>\n    <ul class="cocktails-modal__list">\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n    </ul>\n<button type="button" class="ingredients-modal__btn" data-ingredients-modal-btn>Add to favorite</button>\n</div>  `}(e))}(e),document.querySelector(".ingredients-modal__close").addEventListener("click",ae)}(e.ingredients[0])}))}));n=o("kGl8X");const le=document.querySelector(".search__form-main"),ce=document.querySelector(".cards__pagination"),se=document.querySelector(".section-cards"),ie=document.querySelector(".void");function de(e){null===e?se.classList.contains("is-hidden")||ue():(se.classList.contains("is-hidden")&&(ue(),i(e)),i(e))}function ue(){ie.classList.toggle("is-hidden"),se.classList.toggle("is-hidden"),ce.classList.toggle("is-hidden")}le.addEventListener("input",(function(e){e.preventDefault();let t=e.target.value;1===t.length?(0,n.searchCocktailsByLetter)(t).then((e=>{m(),de(e.drinks)})):(0,n.searchCocktailByName)(t).then((e=>{m(),de(e.drinks)}))}));
//# sourceMappingURL=index.3351a711.js.map
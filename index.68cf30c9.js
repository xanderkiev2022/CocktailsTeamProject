!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},c=e.parcelRequired7c6;null==c&&((c=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var c={id:t,exports:{}};return n[t]=c,e.call(c.exports,c,c.exports),c.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){a[t]=e},e.parcelRequired7c6=c),c("iE7OH").register(JSON.parse('{"EVgbq":"index.68cf30c9.js","410VS":"icons.6aab55b6.svg"}')),c("j7H1p"),c("3NnAA");var o,r=c("j7H1p"),s=c("8nrFW"),i=c("3NnAA"),l={gallery:document.querySelector(".markup-cards"),paginationNumbers:document.querySelector(".pagination__numbers"),pageNumbers:document.getElementsByClassName("page__number"),prevPageBtn:document.querySelector(".page-prev"),nextPageBtn:document.querySelector(".page-next")},d=(0,i.onMediaScreen)();function u(e){m(e,1),function(t){if(t.length<=d)return;for(var e=1;e<=Math.ceil(t.length/d);e++)p(e);v(),l.prevPageBtn.classList.remove("visually-hidden"),l.nextPageBtn.classList.remove("visually-hidden")}(e),l.prevPageBtn.addEventListener("click",(function(){m(e,o-1)})),l.nextPageBtn.addEventListener("click",(function(){m(e,o+1)})),t(s)(l.pageNumbers).forEach((function(t){var n=+t.textContent;t.addEventListener("click",(function(){m(e,n)}))}))}function m(t,e){o=e;var n=(e-1)*d,a=e*d;l.gallery.innerHTML="",function(t){1===o?g(l.prevPageBtn):_(l.prevPageBtn);o===Math.ceil(t.length/d)?g(l.nextPageBtn):_(l.nextPageBtn)}(t),v();var c=t.slice(n,a);return(0,i.markupCard)(c,l.gallery)}function p(t){var e=document.createElement("a");e.textContent=t,e.classList.add("page__number"),l.paginationNumbers.append(e)}function v(){t(s)(l.pageNumbers).forEach((function(t){t.classList.remove("page-active"),+t.textContent===o&&t.classList.add("page-active")}))}function g(t){t.classList.add("disabled"),t.setAttribute("disabled",!0)}function _(t){t.classList.remove("disabled"),t.removeAttribute("disabled")}var y=document.querySelector(".hero__search-list"),f=document.querySelector(".cards__pagination"),h=document.querySelector(".section-cards"),k=document.querySelector(".void");function b(){k.classList.toggle("is-hidden"),h.classList.toggle("is-hidden"),f.classList.toggle("is-hidden")}y.addEventListener("click",(function(t){var e=t.target.name;(0,r.searchCocktailsByLetter)(e).then((function(t){var e;l.paginationNumbers.innerHTML="",l.prevPageBtn.classList.add("visually-hidden"),l.nextPageBtn.classList.add("visually-hidden"),null===(e=t.drinks)?h.classList.contains("is-hidden")||b():(h.classList.contains("is-hidden")&&(b(),u(e)),u(e))}))}));var L=document.querySelector(".theme__light"),S=document.querySelector(".slider.round"),q=document.querySelector(".theme__dark"),x=document.querySelector(".navigation__home"),E=document.querySelector(".dropbtn"),B=document.querySelector(".navigation__favorite"),C=document.querySelector(".dark-tema"),M=document.querySelector(".slider-main.round-main"),H=(document.querySelector(".modal"),document.querySelector(".dropdown-content"));S.addEventListener("click",(function(){document.body.classList.toggle("dark")?(q.style.color="var(--var-accent-color)",L.style.color="var(--var-primary-bg-color)",x.style.color="var(--var-primary-bg-color)",B.style.color="var(--var-primary-bg-color)",C.style.color="var(--var-primary-bg-color)",E.style.color="var(--var-accent-color)",H.style.backgroundColor="var(--var-accent-color)"):(L.style.color="var(--var-accent-color)",q.style.color="var(--var-primary-text-color)",x.style.color="var(--var-primary-text-color)",B.style.color="var(--var-primary-text-color)",C.style.color="var(--var-primary-bg-color))",E.style.color="var(--var-primary-text-color)")})),M.addEventListener("click",changeThemeMain);var N=document.querySelector(".open_modal"),I=document.getElementById("close_modal"),D=document.getElementById("modal"),T=document.getElementsByTagName("body")[0];N.onclick=function(){D.classList.add("modal_vis"),D.classList.remove("bounceOutDown"),T.classList.add("body_block")},I.onclick=function(){D.classList.add("bounceOutDown"),D.classList.remove("modal_vis"),T.classList.remove("body_block")};r=c("j7H1p");var w=document.querySelector(".search__form"),A=document.querySelector(".markup-cards");function P(t){for(var e=[],n=0;n<t.length;n+=1)n<9&&(console.log(t[n].strDrink),e.push('<li class="card">\n      <img src="'.concat(t[n].strDrinkThumb,'" alt="').concat(t[n].strDrink,'" />\n      <div class="card__info">\n        <p class="card__title">').concat(t[n].strDrink,'</p>\n        <div class="card__btns">\n          <button type="button" class="card__btn">\n            Learn more\n          </button>\n          <button type="button" class="card__btn-add">\n            Add to\n            <svg class="card__icon" width="18" height="18">\n              <use href="./images/icons.svg#icon-Heart"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </li>')));A.innerHTML=e.join("")}w.addEventListener("input",(function(t){t.preventDefault();var e=t.target.value;1===e.length?(0,r.searchCocktailsByLetter)(e).then((function(t){return P(t.drinks)})):(0,r.searchCocktailByName)(e).then((function(t){return P(t.drinks)}))})),c("iNWLi");var j=document.querySelector(".hero__search-list"),O=document.querySelector(".hero__btn");j.addEventListener("click",(function(t){var e=t.target.name.toUpperCase();O.textContent=e}));var R;r=c("j7H1p");R=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("410VS");var F={modal:document.querySelector("[data-cocktails-modal]"),cocktailsCard:document.querySelector(".cocktails-modal"),ulListCocktails:document.querySelector(".markup-cards")},U="";function V(t){t.target.textContent="Remove from favorite",t.target.style.width="248px"}function G(){F.modal.classList.toggle("is-hidden")}F.ulListCocktails.addEventListener("click",(function(t){if("card__btn"!==t.target.classList.value)return;U=t.target.id,(0,r.getCocktailById)(U).then((function(t){!function(t){G(),F.cocktailsCard.innerHTML="",function(t){F.cocktailsCard.insertAdjacentHTML("beforeend",(e=t,n=e.strDrink,a=e.strInstructions,c=e.strDrinkThumb,o=e.strGlass,r=e.strCategory,s=e.strIngredient1,i=e.strIngredient2,l=e.strIngredient3,d=e.strIngredient4,u=e.strIngredient5,m=e.strIngredient6,p=e.strIngredient7,v=e.strIngredient8,g=e.strIngredient9,_=e.strIngredient10,y=e.strMeasure1,f=e.strMeasure2,h=e.strMeasure3,k=e.strMeasure4,b=e.strMeasure5,L=e.strMeasure6,S=e.strMeasure7,q=e.strMeasure8,x=e.strMeasure9,E=e.strMeasure10,'\n    <button type="button" class="cocktails-modal__close" data-cocktails-modal-close>\n        <svg width="18px" height="18px">\n            <use href="'.concat(R,'#icon-vector-off"></use>\n        </svg>\n    </button>\n<div class="cocktails-modal__card">\n    <h4 class="cocktails-modal__title"> ').concat(n,' </h4>\n    <p class="cocktails-modal__pretitle">Instractions:</p>\n    <p class="cocktails-modal__text">').concat(a,'</p>\n    <a class = "cocktails-modal__item" href = "').concat(c,'">\n        <img \n        class = "cocktails-modal__image"\n        src = "').concat(c,'" \n        data-source = "').concat(c,'" \n        alt = "').concat(o,'" loading="lazy" width="280px" height="280px" />\n        </a>\n    <div>\n        <p class="cocktails-modal__ingredients">INGREDIENTS</p>\n        <p class="cocktails-modal__name"> ').concat(r,'</p>\n        <ul class="cocktails-modal__list">\n        <li class="cocktails-modal__it"> <span> ✶ ').concat(y," </span> <p> ").concat(s,' </p> </li>\n        <li class="cocktails-modal__it">  <span> ✶ ').concat(f," </span> <p> ").concat(i,' </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ').concat(f," </span> <p> ").concat(i,' </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ').concat(h," </span> <p> ").concat(l,' </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ').concat(k," </span> <p> ").concat(d,' </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ').concat(b," </span> <p> ").concat(u,'  </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ').concat(L," </span> <p> ").concat(m,' </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ').concat(S," </span> <p> ").concat(p,' </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ').concat(q," </span> <p> ").concat(v,'  </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ').concat(x," </span> <p> ").concat(g,'  </p></li>\n        <li class="cocktails-modal__it">  <span> ✶ ').concat(E," </span> <p> ").concat(_,'  </p></li>\n        </ul>\n    </div>\n    <button type="button" class="cocktails-modal__btn">Add to favorite</button>\n</div>\n        </div> ')));var e,n,a,c,o,r,s,i,l,d,u,m,p,v,g,_,y,f,h,k,b,L,S,q,x,E}(t),document.querySelector(".cocktails-modal__btn").addEventListener("click",V),document.querySelector(".cocktails-modal__close").addEventListener("click",G)}(t.drinks[0])}))}));r=c("j7H1p");var J=document.querySelector(".cocktails-modal"),W=document.querySelector(".ingredients-modal"),z=document.querySelector("[data-ingredients-modal]");function K(){z.classList.toggle("show-modal")}J.addEventListener("click",(function(t){var e=t.target.textContent;(0,r.searchIngredientsByName)(e.trim()).then((function(t){!function(t){K(),W.innerHTML="",function(t){W.insertAdjacentHTML("beforeend",(e=t,n=e.strIngredient,a=e.strType,c=e.strDescription,'\n    <button type="button" class="ingredients-modal__close" data-ingredients-modal-close>\n    <svg width="18px" height="18px">\n        <use href="'.concat(R,'#icon-vector-off"></use>\n    </svg>\n</button>\n<div class="ingredients-modal__card">\n<h4 class="ingredients-modal__title"> ').concat(n,' </h4>\n<p class="ingredients-modal__pretitle"> ').concat(a,' </p>\n<div class="footer__line"></div>\n<p class="ingredients-modal__text"> ').concat(c,' </p>\n    <ul class="cocktails-modal__list">\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n    </ul>\n<button type="button" class="ingredients-modal__btn" data-ingredients-modal-btn>Add to favorite</button>\n</div>  ')));var e,n,a,c}(t),document.querySelector(".ingredients-modal__close").addEventListener("click",K)}(t.ingredients[0])}))}));r=c("j7H1p");var Q=document.querySelector(".search__form-main"),X=document.querySelector(".markup-cards");function Y(t){for(var e=[],n=0;n<t.length;n+=1)n<9&&(console.log(t[n].strDrink),e.push('<li class="card">\n      <img src="'.concat(t[n].strDrinkThumb,'" alt="').concat(t[n].strDrink,'" />\n      <div class="card__info">\n        <p class="card__title">').concat(t[n].strDrink,'</p>\n        <div class="card__btns">\n          <button type="button" class="card__btn">\n            Learn more\n          </button>\n          <button type="button" class="card__btn-add">\n            Add to\n            <svg class="card__icon" width="18" height="18">\n              <use href="./images/icons.svg#icon-Heart"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </li>')));X.innerHTML=e.join("")}Q.addEventListener("input",(function(t){t.preventDefault();var e=t.target.value;1===e.length?(0,r.searchCocktailsByLetter)(e).then((function(t){return Y(t.drinks)})):(0,r.searchCocktailByName)(e).then((function(t){return Y(t.drinks)}))}))}();
//# sourceMappingURL=index.68cf30c9.js.map

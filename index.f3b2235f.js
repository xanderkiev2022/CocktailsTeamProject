function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,e){n[t]=e},e.parcelRequired7c6=o),o.register("kyEFX",(function(e,r){var n,o;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var c={};n=function(t){for(var e=Object.keys(t),r=0;r<e.length;r++)c[e[r]]=t[e[r]]},o=function(t){var e=c[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("kyEFX").register(JSON.parse('{"5ZPII":"index.f3b2235f.js","8OQ7p":"icons.11c2347d.svg"}'));const c="https://www.thecocktaildb.com/api/json/v1/";async function a(t){const e=`${c}/1/search.php?f=${t}`;try{const t=await fetch(e);return await t.json()}catch{console.log(error.message)}}async function s(){const t=`${c}/1/random.php`;try{const e=await fetch(t);return await e.json()}catch{console.log(error.message)}}var i;i=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const l=document.querySelector(".markup-cards"),d=window.matchMedia("(max-width: 767px)"),u=window.matchMedia("(min-width: 1280px)");let v=6;function m(t,e){for(const r of t){const t=`<li class="card">\n                                    <img src="${r.strDrinkThumb}" alt="${r.strDrink}" />\n                                    <div class="card__info">\n                                    <p class="card__title theme__dark">${r.strDrink}</p>\n                                    <div class="card__btns">\n                                        <button type="button" class="card__btn">Learn more</button>\n                                        <button type="button" class="card__btn-add">\n                                        Add to\n                                        <svg class="card__icon" width="18" height="18">\n                                            <use href="${i}#icon-Heart"></use>\n                                        </svg>\n                                        </button>\n                                    </div>\n                                    </div>\n                                </li> `;e.innerHTML+=t}}console.log("mobil:",d.matches,"descktop:",u.matches),function(){d.matches?v=3:u.matches&&(v=9);for(let t=1;t<=v;t++)s().then((t=>{m(t.drinks,l)}))}();const f=document.querySelector(".hero__search-list"),h=document.querySelector(".markup-cards");f.addEventListener("click",(function(t){a(t.target.name).then((t=>function(t){let e=[];for(let r=0;r<t.length;r+=1)r<9&&(console.log(t[r].strDrink),e.push(`<li class="card">\n      <img src="${t[r].strDrinkThumb}" alt="${t[r].strDrink}" />\n      <div class="card__info">\n        <p class="card__title">${t[r].strDrink}</p>\n        <div class="card__btns">\n          <button type="button" class="card__btn">\n            Learn more\n          </button>\n          <button type="button" class="card__btn-add">\n            Add to\n            <svg class="card__icon" width="18" height="18">\n              <use href="./images/icons.svg#icon-Heart"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </li>`));h.innerHTML=e.join("")}(t.drinks)))}));const p=document.querySelector(".checkbox"),_=document.querySelector(".theme__light"),y=document.querySelector(".slider.round"),b=document.querySelector(".theme__dark"),g=document.querySelector(".navigation__home"),w=document.querySelector(".navigation__favorite");p.checked;y.addEventListener("click",(function(){document.body.classList.toggle("dark")?(b.style.color="var(--var-accent-color)",_.style.color="var(--var-primary-bg-color)",g.style.color="var(--var-primary-bg-color)",w.style.color="var(--var-primary-bg-color)"):(_.style.color="var(--var-accent-color)",b.style.color="var(--var-primary-text-color)",g.style.color="var(--var-primary-text-color)",w.style.color="var(--var-primary-text-color)")}));
//# sourceMappingURL=index.f3b2235f.js.map

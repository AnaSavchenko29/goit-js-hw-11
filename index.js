import{S as p,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",d="32589447-ffbdd7a8f0a573b29764024b7";function g(t="pug"){return fetch(`${m}?key=${d}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error("error");return o.json()})}const y=document.querySelector(".gallery-list");function h(t){const{tags:o,comments:s,downloads:n,largeImageURL:e,likes:r,views:i,webformatURL:f}=t;return`<li class="gallery-item">
            <div class="img-container">
             <a href="${e}">
              <img src="${f}" alt="${o}" />
              </a>
            </div>
            <ul class="info-list">
              <li class="info-item">
                <p class="info-name">Likes</p>
                <p class="info-value">${r}</p>
              </li>
              <li>
                <p class="info-name">Views</p>
                <p class="info-value">${i}</p>
              </li>
              <li>
                <p class="info-name">Comments</p>
                <p class="info-value">${s}</p>
              </li>
              <li>
                <p class="info-name">Downloads</p>
                <p class="info-value">${n}</p>
              </li>
            </ul>
          </li>`}const b=t=>{const o=t.map(h).join("");y.insertAdjacentHTML("beforeend",o)},c=document.querySelector(".search-container"),u=document.querySelector(".gallery-list"),F=new p(".gallery-list a"),a=document.querySelector(".loader");function L(t){t.preventDefault();const o=t.currentTarget,{query:s}=o.elements;u.innerHTML="",a.style.display="block";const n=s.value.trim();if(!n){l.error({position:"topRight",iconColor:"#FAFAFB",message:"Сan not be empty or contain only spaces!",backgroundColor:"#EF4040"}),a.style.display="none";return}g(n).then(e=>{const r=e.hits;r.length===0?(l.error({position:"topRight",iconColor:"#FAFAFB",message:"Sorry, there are no images matching <br/>your search query. Please try again!",backgroundColor:"#EF4040"}),c.reset()):(u.innerHTML="",b(r),F.refresh())}).catch(e=>{l.error({position:"topRight",iconColor:"#FAFAFB",message:"An error occurred. Please try again later!",backgroundColor:"#FF0000"}),console.log(e)}).finally(()=>{a.style.display="none"}),c.reset()}c.addEventListener("submit",L);
//# sourceMappingURL=index.js.map

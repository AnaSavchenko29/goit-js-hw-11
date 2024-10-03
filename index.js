import{S as u,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",p="32589447-ffbdd7a8f0a573b29764024b7";function d(o="pug"){return fetch(`${m}?key=${p}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error("error");return t.json()})}const g=document.querySelector(".gallery-list");function y(o){const{tags:t,comments:i,downloads:s,largeImageURL:e,likes:r,views:n,webformatURL:c}=o;return`<li class="gallery-item">
            <div class="img-container">
             <a href="${e}">
              <img src="${c}" alt="${t}" />
              </a>
            </div>
            <ul class="info-list">
              <li class="info-item">
                <p class="info-name">Likes</p>
                <p class="info-value">${r}</p>
              </li>
              <li>
                <p class="info-name">Views</p>
                <p class="info-value">${n}</p>
              </li>
              <li>
                <p class="info-name">Comments</p>
                <p class="info-value">${i}</p>
              </li>
              <li>
                <p class="info-name">Downloads</p>
                <p class="info-value">${s}</p>
              </li>
            </ul>
          </li>`}const h=o=>{const t=o.map(y).join("");g.insertAdjacentHTML("beforeend",t)},l=document.querySelector(".search-container"),b=document.querySelector(".gallery-list"),L=new u(".gallery-list a"),a=document.querySelector(".loader");function v(o){o.preventDefault();const t=o.currentTarget,{query:i}=t.elements;a.style.display="block",d(i.value.trim()).then(s=>{const e=s.hits;e.length===0?(f.error({position:"topRight",iconColor:"#FAFAFB",message:"Sorry, there are no images matching <br/>your search query. Please try again!",backgroundColor:"#EF4040"}),l.reset()):(b.innerHTML="",h(e),L.refresh())}).catch(s=>{console.error(s)}).finally(()=>{a.style.display="none"}),l.reset()}l.addEventListener("submit",v);
//# sourceMappingURL=index.js.map

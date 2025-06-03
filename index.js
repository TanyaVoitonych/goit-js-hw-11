import{a as f,S as m,i}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="50659589-688aed3ad83efd622a7c064e0",y="https://pixabay.com/api/";async function g(a){return(await f.get(y,{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader-wrapper");let h=new m(".gallery a");function b(a){const t=a.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:s,comments:d,downloads:u})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info-box">
          <p><b>Likes</b><br>${r}</p>
          <p><b>Views</b><br>${s}</p>
          <p><b>Comments</b><br>${d}</p>
          <p><b>Downloads</b><br>${u}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",t),h.refresh()}function L(){l.innerHTML=""}function w(){c.classList.remove("hidden")}function S(){c.classList.add("hidden")}const P=document.querySelector(".form");P.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.elements["search-text"].value.trim();if(!t){i.warning({message:"Please enter a search term."});return}w(),L();try{const o=await g(t);if(o.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(o.hits)}catch{i.error({message:"Something went wrong. Please try again later."})}finally{S()}});
//# sourceMappingURL=index.js.map

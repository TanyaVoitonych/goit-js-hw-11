import{a as f,S as m,i}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const y="50659589-688aed3ad83efd622a7c064e0",g="https://pixabay.com/api/";async function p(o){return(await f.get(g,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");let h=new m(".gallery a");function b(o){const t=o.map(({webformatURL:a,largeImageURL:n,tags:e,likes:r,views:s,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${a}" alt="${e}" loading="lazy" />
        </a>
        <div class="info-box">
          <p><b>Likes</b><br>${r}</p>
          <p><b>Views</b><br>${s}</p>
          <p><b>Comments</b><br>${u}</p>
          <p><b>Downloads</b><br>${d}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",t),h.refresh()}function L(){l.innerHTML=""}function w(){c.classList.remove("hidden")}function S(){c.classList.add("hidden")}const q=document.querySelector(".form");document.querySelector(".gallery");q.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){i.warning({message:"Please enter a search term."});return}w(),L();try{const a=await p(t);if(a.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(a.hits)}catch{i.error({message:"Something went wrong. Please try again later."})}finally{S()}});
//# sourceMappingURL=index.js.map

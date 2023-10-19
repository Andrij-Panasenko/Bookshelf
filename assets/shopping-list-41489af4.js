import{s as p,S as r,a as b,b as f,t as y}from"./modal-pop-up-baad9bfb.js";const d=document.querySelector(".shopping-book-list");document.querySelector(".shopping-book");document.querySelector(".header-menu-shop");const g=document.querySelector(".stub");d.addEventListener("click",S);function h(s){const a=s.map(({book_image:n,title:o,list_name:t,author:u,description:l,buy_links:c,_id:e})=>{const k=c.find(i=>i.name==="Amazon"),m=c.find(i=>i.name==="Apple Books");return`<li class="shopping-book" data-id="${e}">
        
        <div class="image-book">
             <img  class="image-book-shopping" src="${n}" alt="${l}" loading="lazy" />
        </div>

        <div class="book-info">
            <h3 class="shopping-book-title">${o}</h3>
            <p class="shopping-book-category">${t}</p>
            <p class="shopping-book-description">${l}</p>
            <p class="shopping-book-author">${u}</p>

            <div class="shopping-list-links">
                <a class="buy-links" href="${k.url}">
                    <img  class="buy-links-icon amazon"  src="${b}" alt="amazon" loading="lazy" />
                </a>  
                <a class="buy-links" href="${m.url}">
                    <img  class="buy-links-icon apple" width="16" height="16" src="${f}" alt="apple book" loading="lazy" />
                </a> 
            </div>
            
            <button type="button" class="button-shopping-list js-card-delete" data-id="${e}">
                <svg class="icon-fill js-card-delete" data-id="${e}">
                    <use href="${y}#icon-trash" > </use>
                </svg>
            </button>
        </div>
    </li>`}).join("");d.innerHTML=a}p.length?h(p):g.classList.remove("visually-hidden");function S(s){if(!s.target.classList.contains("js-card-delete"))return;const a=s.target.dataset.id,o=JSON.parse(localStorage.getItem(r)).filter(t=>t._id!==a);localStorage.setItem(r,JSON.stringify(o)),h(o),o.length||g.classList.remove("visually-hidden")}

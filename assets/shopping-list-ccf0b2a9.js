import{s as p,S as r,a as b,b as f,t as $}from"./modal-pop-up-4d34d6b4.js";const d=document.querySelector(".shopping-book-list"),g=document.querySelector(".stub");d.addEventListener("click",y);function k(o){const a=o.map(({book_image:e,title:s,list_name:t,author:h,description:l,buy_links:c,_id:i})=>{const u=c.find(n=>n.name==="Amazon"),m=c.find(n=>n.name==="Apple Books");return`<li class="shopping-book" data-id="${i}">
        
        <div class="image-book">
             <img  class="image-book-shopping" src="${e}" alt="${l}" loading="lazy" />
        </div>

        <div class="book-info">
            <h3 class="shopping-book-title">${s}</h3>
            <p class="shopping-book-category">${t}</p>
            <p class="shopping-book-description">${l}</p>
            <p class="shopping-book-author">${h}</p>

            <div class="shopping-list-links">
                <a class="buy-links" href="${u.url}">
                    <img  class="buy-links-icon amazon"  src="${b}" alt="amazon" loading="lazy" />
                </a>  
                <a class="buy-links" href="${m.url}">
                    <img  class="buy-links-icon apple" src="${f}" alt="apple book" loading="lazy" />
                </a> 
            </div>
            
            <button type="button" class="button-shopping-list js-card-delete" data-id="${i}">
                <svg class="icon-fill js-card-delete" data-id="${i}">
                    <use href="${$}#icon-trash" > </use>
                </svg>
            </button>
        </div>
    </li>`}).join("");d.innerHTML=a}p.length?k(p):g.classList.remove("visually-hidden");function y(o){if(!o.target.classList.contains("js-card-delete"))return;const a=o.target.dataset.id,s=JSON.parse(localStorage.getItem(r)).filter(t=>t._id!==a);localStorage.setItem(r,JSON.stringify(s)),k(s),s.length||g.classList.remove("visually-hidden")}

import{s as a}from"./modal-pop-up-ce244781.js";const u=document.querySelector(".shopping-book-list");document.querySelector(".button-shopping-list");document.querySelector(".shopping-book");document.querySelector(".header-menu-shop");const d=document.querySelector(".stub");function m(e){const l=e.map(({book_image:p,title:t,list_name:c,author:g,description:s,buy_links:i,_id:n})=>{const h=i.find(o=>o.name==="Amazon"),r=i.find(o=>o.name==="Apple Books");return`<li class="shopping-book" data-id="${n}">
        
        <div class="image-book">
             <img  class="image-book-shopping" src="${p}" alt="${s}" loading="lazy" />
        </div>

        <div class="book-info">
            <h3 class="shopping-book-title">${t}</h3>
            <p class="shopping-book-category">${c}</p>
            <p class="shopping-book-description">${s}</p>
            <p class="shopping-book-author">${g}</p>

            <div class="shopping-list-links">
                <a class="buy-links" href="${h.url}">
                    <img  class="buy-links-icon amazon"  src="../images/amazon-min.png" alt="amazon" loading="lazy" />
                </a>  
                <a class="buy-links" href="${r.url}">
                    <img  class="buy-links-icon apple" width="16" height="16" src="../images/book-shop-min.png" alt="apple book" loading="lazy" />
                </a> 
            </div>
            
            <button type="button" class="button-shopping-list" data-id="${n}">
                <svg class="icon-fill" width="16" height="16">
                    <use href="../images/icons.svg#icon-dump" > </use>
                </svg>
            </button>
        </div>
    </li>`}).join("");u.insertAdjacentHTML("beforeend",l)}a.length?m(a):d.classList.remove("visually-hidden");

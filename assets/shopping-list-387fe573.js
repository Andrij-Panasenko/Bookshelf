import"./modal-pop-up-164eaaad.js";const r=document.querySelector(".shopping-book-list");document.querySelector(".button-shopping-list");document.querySelector(".shopping-book");function d(o){const a=o.map(({book_image:t,title:p,list_name:l,author:c,description:i,buy_links:n,_id:e})=>{const g=n.find(s=>s.name==="Amazon"),h=n.find(s=>s.name==="Apple Books");return`<li class="shopping-book" data-id="${e}">
        
        <div class="image-book">
             <img  class="image-book-shopping" src="${t}" alt="${i}" loading="lazy" />
        </div>

        <div class="book-info">
            <h3 class="shopping-book-title">${p}</h3>
            <p class="shopping-book-category">${l}</p>
            <p class="shopping-book-description">${i}</p>
            <p class="shopping-book-author">${c}</p>

            <div class="shopping-list-links">
                <a class="buy-links" href="${g.url}">
                    <img  class="buy-links-icon amazon"  src="../images/amazon-min.png" alt="amazon" loading="lazy" />
                </a>  
                <a class="buy-links" href="${h.url}">
                    <img  class="buy-links-icon apple" width="16" height="16" src="../images/book-shop-min.png" alt="apple book" loading="lazy" />
                </a> 
            </div>
            
            <button type="button" class="button-shopping-list" data-id="${e}">
                <svg class="icon-fill" width="16" height="16">
                    <use href="../images/icons.svg#icon-dump" > </use>
                </svg>
            </button>
        </div>
    </li>`}).join("");r.insertAdjacentHTML("beforeend",a)}const u=document.querySelector(".header-menu-shop"),k=document.querySelector(".stub");u.addEventListener("click",m);function m(o){o.preventDeefalt(),(shoppingList=[])?k.classList.remove("visually-hidden"):d(shoppingList)}

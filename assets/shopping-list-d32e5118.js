import"./support-ukraine-44b87485.js";const u=document.querySelector(".shopping-book-list");document.querySelector(".button-shopping-list");document.querySelector(".shopping-book");function h(o){const t=o.map(({book_image:l,title:p,list_name:c,author:g,description:n,buy_links:i,id:e})=>{const r=i.find(s=>s.name==="Amazon"),d=i.find(s=>s.name==="Apple Books");return`<li class="shopping-book" data-id="${e}">
        
        <div class="image-book">
             <img  class="image-book-shopping" src="${l}" alt="${n}" loading="lazy" />
        </div>

        <div class="book-info">
            <h3 class="shopping-book-title">${p}</h3>
            <p class="shopping-book-category">${c}</p>
            <p class="shopping-book-description">${n}</p>
            <p class="shopping-book-author">${g}</p>

            <div class="shopping-list-links">
                <a class="buy-links" href="${r.url}">
                    <img  class="buy-links-icon amazon"  src="../images/amazon-min.png" alt="amazon" loading="lazy" />
                </a>  
                <a class="buy-links" href="${d.url}">
                    <img  class="buy-links-icon apple" width="16" height="16" src="../images/book-shop-min.png" alt="apple book" loading="lazy" />
                </a> 
            </div>
            
            <button type="button" class="button-shopping-list" data-id="${e}">
                <svg class="icon-fill" width="16" height="16">
                    <use href="../images/icons.svg#icon-dump" > </use>
                </svg>
            </button>
        </div>
    </li>`}).join("");u.insertAdjacentHTML("beforeend",t)}const k=document.querySelector(".header-menu-shop"),m=document.querySelector(".stub"),a=JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY))||[];k.addEventListener("click",b);function b(o){o.preventDeefalt(),(a=[])?m.classList.remove("visually-hidden"):h(a)}

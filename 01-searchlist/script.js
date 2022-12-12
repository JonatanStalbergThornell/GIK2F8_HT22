"use strict";


let bookList = [];
window.addEventListener("load", () => {
    getAll().then((apiBooks) => (bookList = apiBooks));
});
//const searchField = document.getElementById("searchField");

searchField.addEventListener("keyup", (e) => searchBooks(e.target.value));
/*searchField.addEventListener("keyup", (e) => 
    renderBooklist(
        bookList.filter(({title, author}) => {
            const searchTerm = e.target.value.toLowerCase();
            return title.toLowerCase().indexOf(searchTerm) >= 0 || author.toLowerCase().indexOf(searchTerm) >= 0
        })
    )
);*/


async function searchBooks(searchTerm) {
    const bookList = await getAll();
    /* Loopa igenom bookList
    För varje varv i loopen, ta det aktuella elementet (boken)
    Jämföra titeln med söktermen
    Om söktermen finns någonstans i titeln, lägg till elementet i ny lista (filteredList)
    Returnerar filteredList eller anropar renderBookList? */
    

    renderBooklist(
        bookList.filter(
        ({title, author}) => 
           title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
           author.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
        )
   );
}

function renderBooklist(bookList) {
    /*Element i HTML-listan visas eller döljs beroende på listans innehåll. */
    
    /*let html = `<ul class="book-list rounded-md border-2 border-blue-400 bg-white w-full mx-auto">`
    for(let i = 0; i < bookList.length; i++) {
        html += `<li 
                        class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b
                        border-indigo-700 cursor-pointer">
                    ${bookList[i].author} - ${bookList[i].title}  
                    </li>`
    }                
    html += `</ul>`;*/

    const existingElement = document.querySelector(".book-list");
    console.log(existingElement);

    const root = document.getElementById("root");

    existingElement && root.removeChild(existingElement);
    
    bookList.length > 0 && searchField.value && root.insertAdjacentHTML("beforeend", BookList(bookList));
}


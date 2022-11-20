"use strict";


const bookList = [
    {
        id: 1,
        author: "Charles Dickens",
        title: "Oliver Twist"
    },
    {
        id: 2,
        author: "William Shakespear",
        title: "Hamlet"
    }
];
const searchInput = null;

function handleKeyPress(input) {
    /* Ta emot/Läsa av värdet i inputfältet.
    Ska skicka värdet till searchBooks.
    searchBooks returnerar en filtrerad lista.
    Filtrerade listan skickas till en renderBooklist*/ 
    searchBooks(input);
};

function searchBooks(searchTerm) {
    /* Loopa igenom bookList
    För varje varv i loopen, ta det aktuella elementet (boken)
    Jämföra titeln med söktermen
    Om söktermen finns någonstans i titeln, lägg till elementet i ny lista (filteredList)
    Returnerar filteredList eller anropar renderBookList? */
    const filteredList = []
    for (let i = 0; i < bookList.length; i++) {
        const title = bookList[i].title.toLowerCase();
        if(title.indexOf(searchTerm.toLowerCase()) >= 0) {
            filteredList.push(bookList[i]);
        }
    }
    renderBooklist(filteredList);
}

function renderBooklist(list) {
    /*Element i HTML-listan visas eller döljs beroende på listans innehåll. */
    console.log(list)
}

handleKeyPress("ham");

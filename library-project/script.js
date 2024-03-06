const myLibrary = [];

myLibrary.push(
    {'title': 'Eye of the World', 'author': 'Robert Jordan', 'page':735, 'readStatus': true},
    {'title': 'The Great Hunt', 'author': 'Robert Jordan', 'page':935, 'readStatus': true},
    {'title': 'A Dragon Reborn', 'author': 'Robert Jordan', 'page':834, 'readStatus': false},
);

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    // this.bookInfo = function() {
    //     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;
    //}
}

//show book to library
function addBookToLibrary() {
    const bookListTable = document.createElement('table');
    bookListTable.setAttribute("id", "booktable");
    bookListTable.innerHTML = "<thead><th>Title</th><th>Author</th><th>Pages</th><th>Read?</th></thead>"
    for (book of myLibrary ) {
        const newRow = document.createElement("tr");
        const tdTitle = document.createElement("td");
        const tdAuthor = document.createElement("td");
        const tdPages = document.createElement("td");
        const tdRead = document.createElement("td");

        tdTitle.textContent = book.title;
        tdAuthor.textContent = book.author;
        tdPages.textContent = book.page;
        tdRead.textContent = book.readStatus;

        newRow.appendChild(tdTitle);
        newRow.appendChild(tdAuthor);
        newRow.appendChild(tdPages);
        newRow.appendChild(tdRead);

        bookListTable.appendChild(newRow);
    }

    const target = document.querySelector(".target");
    target.appendChild(bookListTable);
}

//MODAL INTERACTION
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      modalClose();
    }
  });


//add new book
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    //maninpute the object property
    if (obj.readStatus === 'on') {
        obj.readStatus = true;
    }
    else {
        obj.readStatus = false;
    };
    const newBook = obj;
    myLibrary.push(newBook);
    closeModal();
    bookTable = document.querySelector("#booktable");
    bookTable.remove();
    addBookToLibrary();
    form.reset();
    console.log(obj);
})

addBookToLibrary();
console.table(myLibrary);

//ADD REMOVE BUTTON ON EACH BOOK
//READ OR NOT READ
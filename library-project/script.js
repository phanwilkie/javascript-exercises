const myLibrary = [];
let id = 3;

myLibrary.push(
    {'id': 1,'title': 'Eye of the World', 'author': 'Robert Jordan', 'page':735, 'readStatus': true},
    {'id': 2,'title': 'The Great Hunt', 'author': 'Robert Jordan', 'page':935, 'readStatus': true},
    {'id': 3,'title': 'A Dragon Reborn', 'author': 'Robert Jordan', 'page':834, 'readStatus': false},
);

function Book(title, author, pages, readStatus) {
    this.id = bookID + 1;
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
    bookListTable.innerHTML = "<thead><th>ID</th><th>Title</th><th>Author</th><th>Pages</th><th>Read?</th><th>Options</th></thead>"
    for (book of myLibrary ) {
        const newRow = document.createElement("tr");
        const tdId = document.createElement("td");
        const tdTitle = document.createElement("td");
        const tdAuthor = document.createElement("td");
        const tdPages = document.createElement("td");
        const tdRead = document.createElement("td");
        const tdOptions = document.createElement("td");
        // const readCheckBoxLabel = document.createElement("label");
        // const readCheckBoxLabelBR = document.createElement("br");
        const readBookBtn = document.createElement("button");
        const btnTxtRead = document.createTextNode("Read / Unread");
        const deleteBookBtn = document.createElement("button");
        const btnTxt = document.createTextNode("Delete book");

        tdId.textContent = book.id;
        tdTitle.textContent = book.title;
        tdAuthor.textContent = book.author;
        tdPages.textContent = book.page;
        tdRead.textContent = book.readStatus;
        
        //Add checkbox option to table cell
        tdOptions.appendChild(readBookBtn);
        readBookBtn.appendChild(btnTxtRead);
        readBookBtn.setAttribute("class", "readBookBtn");
 
        tdOptions.appendChild(deleteBookBtn);
        deleteBookBtn.appendChild(btnTxt);
        deleteBookBtn.setAttribute("class", "deleteBookBtn");

        newRow.appendChild(tdId);
        newRow.appendChild(tdTitle);
        newRow.appendChild(tdAuthor);
        newRow.appendChild(tdPages);
        newRow.appendChild(tdRead);
        newRow.appendChild(tdOptions);

        bookListTable.appendChild(newRow);
    }

    const target = document.querySelector(".target");
    target.appendChild(bookListTable);
}

//ADD REMOVE BUTTON ON EACH BOOK
function deleteBook() {

}

//READ OR NOT READ
function readBook() {

}

//MODAL INTERACTION
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const idField = document.querySelector("#id");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    idField.value = Number(id) + 1;
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
    console.log(obj);
    myLibrary.push(newBook);
    id = idField.value;
    form.reset();
    closeModal();
    
    bookTable = document.querySelector("#booktable");
    bookTable.remove();
    addBookToLibrary();
})




addBookToLibrary();
console.table(myLibrary);


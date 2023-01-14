//object contructor

let myLibrary = [];
const libraryGrid = document.querySelector(".library-grid");

function Book(title, author, pages, read) {
  //book object contructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLib(t, a, p, r) {
  //function adding books to library
  let book = new Book(t, a, p, r);
  myLibrary.push(book);
  createBookDiv(t, a, p, r);
  console.log(book);
}

function createBookDiv(t, a, p, r) {
  const bookChild = document.createElement("div");
  const bookTitle = document.createElement("div");
  const bookAuthor = document.createElement("div");
  const bookPages = document.createElement("div");
  const bookRead = document.createElement("button");
  const removeButton = document.createElement("button");
  bookChild.classList.add("book-holder");
  bookRead.className = "book-holder-button";
  removeButton.className = "book-holder-button remove-button";
  removeButton.textContent = "Remove";
  bookRead.textContent = "Not Read";
  libraryGrid.appendChild(bookChild);
  bookChild.appendChild(bookTitle);
  bookChild.appendChild(bookAuthor);
  bookChild.appendChild(bookPages);
  bookChild.appendChild(bookRead);
  bookChild.appendChild(removeButton);
  bookTitle.textContent = t;
  bookAuthor.textContent = a;
  bookPages.textContent = p;
  if (r) {
    bookRead.className = "book-holder-button read-button-read";
    bookRead.textContent = "Read";
  }
}

addBookToLib("test", "book", 800, true);
addBookToLib("test", "book", 800, false);

//User Interface Actions

const addNewBook = document.querySelector(".add-new");
const formModal = document.querySelector(".new-book-modal");
const modalOverlay = document.querySelector(".overlay");

addNewBook.addEventListener("click", (e) => {
  formModal.classList.remove("hidden-modal");
  modalOverlay.classList.add("active");
});

const overlay = document.getElementById("overlay");

overlay.addEventListener("click", (e) => {
  overlay.onclick = closeModal();
});

function closeModal() {
  formModal.classList.add("hidden-modal");
  modalOverlay.classList.remove("active");
}

function testPrint() {
  console.log("test");
}
// //using object constructors

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// Book.prototype.info = function () {
//   return `${this.title} by ${this.author}, ${this.pages} pages long, has ${this.read}`;
// };

// const readyPlayerOne = new Book(
//   "Ready Player One",
//   "Ernest Cline",
//   400,
//   "read"
// );

// const harryPotter = new Book("Harry Potter", "J.K Rowling", 900, "not read");

// console.log(readyPlayerOne.info());
// console.log(harryPotter.info());

// //using classes

// class Novel {
//   constructor(title, writer, pages) {
//     this.title = title;
//     this.writer = writer;
//     this.pages = pages;
//   }

//   logRead() {
//     return `This signifies that ${this.title} by ${this.writer}, at ${this.pages} pages long has been read`;
//   }
// }

// const theDictionary = new Novel(
//   "The Dictionary",
//   "Pricehouse Publishing",
//   10000
// );

// console.log(theDictionary.logRead());

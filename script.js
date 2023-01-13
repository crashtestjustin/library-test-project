//object contructor

let myLibrary = [];

function Book(title, author, pages, read) {
  //create new books attributes
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLib(t, a, p, r) {
  //call to add books to library
  let book = new Book(t, a, p, r);
  console.log(book);
  myLibrary.push(book);
}

addBookToLib("test", "book", 900, true);
addBookToLib("test", "book2", 9000, false);
console.log(myLibrary);

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

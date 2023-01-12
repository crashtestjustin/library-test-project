let myLibrary = [];

function bookConstructor() {
  //create new books here
}

function addBookToLib() {
  //call to add books to library here
}

const addNewBook = document.querySelector(".add-new");

addNewBook.addEventListener("click", (e) => {
  const formModal = document.querySelector(".new-book-modal");
  const modalOverlay = document.querySelector(".overlay");
  formModal.classList.remove("hidden-modal");
  modalOverlay.classList.add("active");
});

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

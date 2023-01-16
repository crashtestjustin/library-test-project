// bookIndex = 0;

//object contructor

let myLibrary = [];
const libraryGrid = document.querySelector(".library-grid");
const submitForm = document.querySelector(".submit-button");

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
  console.log(myLibrary);
}

function createBookDiv(t, a, p, r) {
  const bookChild = document.createElement("div");
  const bookTitle = document.createElement("div");
  const bookAuthor = document.createElement("div");
  const bookPages = document.createElement("div");
  const bookRead = document.createElement("button");
  const removeButton = document.createElement("button");
  bookChild.classList.add("book-holder");
  bookChild.dataset.bookIndex = myLibrary.length - 1;
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
  } else {
    bookRead.className = "book-holder-button read-button-unread";
  }
}

submitForm.addEventListener("click", (e) => {
  e.preventDefault();
  const inputTitle = document.getElementById("title").value;
  const inputAuthor = document.getElementById("author").value;
  const inputPages = document.getElementById("pages").value;
  const hasRead = document.getElementById("has-read");
  if (hasRead.checked === true) {
    checkRead = true;
  } else {
    checkRead = false;
  }
  addBookToLib(inputTitle, inputAuthor, inputPages, checkRead);
  document.getElementById("new-book-form").reset();
  closeModal();
});

// addBookToLib("test", "book", 800, true);

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

document.addEventListener("click", (e) => {
  const removeButton = e.target.closest(".remove-button");
  const unreadButton = e.target.closest(".read-button-unread");
  const readButton = e.target.closest(".read-button-read");
  const bookChild = e.target.closest(".book-holder");
  if (removeButton) {
    let i = bookChild.dataset.bookIndex;
    console.log(bookChild);
    console.log(i);
    bookChild.remove();
    reindexLibrary();
    myLibrary.splice(i, 1);
    console.log(myLibrary);
  }
  if (unreadButton) {
    unreadButton.className = "book-holder-button read-button-read";
    unreadButton.textContent = "Read";
  }
  if (readButton) {
    readButton.className = "book-holder-button read-button-unread";
    readButton.textContent = "Not Read";
  }
});

function reindexLibrary() {
  const libraryBooks = document.querySelectorAll(".book-holder");
  index = 0;
  libraryBooks.forEach((book) => {
    book.dataset.bookIndex = index;
    index = index + 1;
  });
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

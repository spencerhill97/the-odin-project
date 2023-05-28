let myLibrary = [];

function Book(title, author, pages, finished) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.finished = finished;
  this.remove = function () {
    myLibrary = myLibrary.filter((book) => book.title !== this.title);
    displayBooks();
  };
  this.toggleRead = function () {
    this.finished = !this.finished;
    displayBooks();
  };
}

const harry = new Book(
  "harry potter and the chamber of secrets",
  "jk rowling",
  732,
  true
);
const holes = new Book("holes", "louis sachar", 312, false);
const goosebumps = new Book("goosebumps", "rl stein", 135, true);
const captain = new Book("captain underpants", "dav pilkey", 55, false);
const office = new Book("somehow i manage", "michael scott", 555, true);

myLibrary.push(harry, holes, goosebumps, captain, office);

const main = document.createElement("main");
document.body.append(main);

/*============== header ==============*/
const header = document.createElement("header");
header.classList.add("header");
main.append(header);

const title = document.createElement("h1");
title.innerText = "my library";
header.append(title);

/*============== book list ==============*/
const bookList = document.createElement("section");
bookList.classList.add("book-list");

main.append(bookList);

function displayBooks() {
  bookList.innerHTML = "";

  myLibrary.forEach((book) => {
    const heading = document.createElement("h2");
    heading.contentEditable = true;
    heading.classList.add("heading");
    heading.innerText = `"${book.title}"`;

    const author = document.createElement("p");
    author.contentEditable = true;
    author.classList.add("author");
    author.innerText = `${book.author}`;

    const pages = document.createElement("p");
    pages.contentEditable = true;
    pages.classList.add("pages");
    pages.innerText = `${book.pages} pages`;

    const completed = document.createElement("div");
    completed.classList.add("slider");

    const question = document.createElement("p");
    question.classList.add("question");
    question.innerText = "Finished?";

    const sliderBtn = document.createElement("span");
    sliderBtn.classList.add("slider-btn");
    completed.append(sliderBtn);

    if (book.finished === false) {
      sliderBtn.classList.toggle("false");
    }

    const read = document.createElement("p");
    read.classList.add("complete");
    read.innerHTML = `<i class="fa-solid fa-check"></i>`;
    completed.append(read);

    const unread = document.createElement("p");
    unread.classList.add("incomplete");
    unread.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    completed.append(unread);

    sliderBtn.addEventListener("click", () => {
      sliderBtn.classList.toggle("false");
      book.toggleRead();
    });

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    removeBtn.classList.add("remove-btn");
    removeBtn.setAttribute("type", "button");
    removeBtn.addEventListener("click", () => {
      book.remove();
    });

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-div");
    btnDiv.append(removeBtn);

    const newBook = document.createElement("article");
    newBook.classList.add("book-card");
    newBook.append(heading);
    newBook.append(author);
    newBook.append(pages);
    newBook.append(question);
    newBook.append(completed);
    newBook.append(btnDiv);

    bookList.append(newBook);
  });
}

displayBooks();

/*============== form ==============*/
const formOverlay = document.createElement("section");
formOverlay.classList.add("form-overlay", "hidden");
main.append(formOverlay);

const bookForm = document.createElement("form");
bookForm.setAttribute("action", "submitBook");
bookForm.setAttribute("id", "book-form");
formOverlay.append(bookForm);

const bookFieldset = document.createElement("fieldset");
bookForm.append(bookFieldset);

/*============== add book button ==============*/
const addBtn = document.createElement("button");
addBtn.classList.add("add-btn");
addBtn.innerHTML = `<i class="fa-solid fa-plus"></i> add book`;
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formOverlay.classList.toggle("hidden");
});
header.append(addBtn);

formOverlay.addEventListener("click", (e) => {
  if (!bookForm.contains(e.target)) {
    formOverlay.classList.toggle("hidden");
    bookForm.reset();
  }
});

const fieldsetLegend = document.createElement("legend");
fieldsetLegend.innerText = "new book info";
bookFieldset.append(fieldsetLegend);

/*============== title input ==============*/
const titleDiv = document.createElement("div");
titleDiv.classList.add("input-div");

const titleInput = document.createElement("input");
const titleLabel = document.createElement("label");
titleDiv.append(titleLabel);
titleDiv.append(titleInput);

titleInput.setAttribute("type", "text");
titleInput.setAttribute("id", "title");
titleInput.required = true;
titleLabel.innerText = "title";
titleLabel.setAttribute("for", "title");

bookFieldset.append(titleDiv);

/*============== author input ==============*/
const authorDiv = document.createElement("div");
authorDiv.classList.add("input-div");

const authorInput = document.createElement("input");
const authorLabel = document.createElement("label");
authorDiv.append(authorLabel);
authorDiv.append(authorInput);

authorInput.setAttribute("type", "text");
authorInput.setAttribute("id", "author");
authorInput.setAttribute("required", "undefined");
authorInput.required = true;
authorLabel.innerText = "author";
authorLabel.setAttribute("for", "author");

bookFieldset.append(authorDiv);

/*============== pages input ==============*/
const pagesDiv = document.createElement("div");
pagesDiv.classList.add("input-div");

const pagesInput = document.createElement("input");
const pagesLabel = document.createElement("label");
pagesDiv.append(pagesLabel);
pagesDiv.append(pagesInput);

pagesInput.setAttribute("type", "number");
pagesInput.setAttribute("id", "pages");
pagesInput.setAttribute("min", 0);
pagesInput.required = true;
pagesLabel.innerText = "pages";
pagesLabel.setAttribute("for", "pages");

bookFieldset.append(pagesDiv);

/*============== checkbox div ==============*/
const checkboxDirections = document.createElement("p");
checkboxDirections.classList.add("checkbox-directions", "label");
checkboxDirections.innerText = "Did you finish reading the book?";
bookFieldset.append(checkboxDirections);

const completedDiv = document.createElement("div");
completedDiv.classList.add("checkbox-div");
bookFieldset.append(completedDiv);

const completedLabel = document.createElement("label");
completedLabel.innerText = "yes";
completedLabel.classList.add("yes-label");
completedLabel.setAttribute("for", "yes");

const finishedInput = document.createElement("input");
finishedInput.setAttribute("type", "checkbox");
finishedInput.setAttribute("value", "yes");
finishedInput.setAttribute("name", "completed");
finishedInput.setAttribute("id", "yes");

completedDiv.append(completedLabel);
completedDiv.append(finishedInput);

/*============== submit btn ==============*/
const submitBtn = document.createElement("button");
submitBtn.classList.add("submit-btn");
submitBtn.setAttribute("type", "submit");
submitBtn.innerText = "submit";

bookFieldset.append(submitBtn);

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const finished = finishedInput.checked;

  console.log(finished);

  const newBook = new Book(title, author, pages, finished);
  myLibrary.push(newBook);
  bookForm.reset();
  formOverlay.classList.toggle("hidden");
  displayBooks();
});

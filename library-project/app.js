let myLibrary = [];

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

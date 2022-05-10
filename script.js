let myLibrary = [];

function Book(title, author, pagesNumber, read) {
    this.title = title,
        this.author = author,
        this.pageNumbers = pagesNumber;
    this.read = read;

    this.info = function () {
        return title + " by " + author + ", " + pagesNumber + " pages, " +
            (read ? " read" : "not read yet")

    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

hobbit = new Book("The Hobbit", "Tolkien", 288, false);
antifragile = new Book("Antifragile", "Taleb", 180, true);

console.log("Lista libri: ");

addBookToLibrary(hobbit);
addBookToLibrary(antifragile);

myLibrary.forEach(book => {
    console.log(book.info());
});


// user interface

const addBookForm = document.getElementById('addBookForm');
const booksGrid = document.getElementById('books-grid');

const updateBooksGrid = () => {
    resetBooksGrid()
    for (let book of library.books) {
        createBookCard(book)
    }
}

const resetBooksGrid = () => {
    booksGrid.innerHTML = ''
}

const createBookCard = (book) => {
    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const buttonGroup = document.createElement('div')
    const readBtn = document.createElement('button')
    const removeBtn = document.createElement('button')

    bookCard.classList.add('book-card')
    buttonGroup.classList.add('button-group')
    readBtn.classList.add('btn')
    removeBtn.classList.add('btn')
    readBtn.onclick = toggleRead
    removeBtn.onclick = removeBook

    title.textContent = `"${book.title}"`
    author.textContent = book.author
    pages.textContent = `${book.pages} pages`
    removeBtn.textContent = 'Remove'

    if (book.isRead) {
        readBtn.textContent = 'Read'
        readBtn.classList.add('btn-light-green')
    } else {
        readBtn.textContent = 'Not read'
        readBtn.classList.add('btn-light-red')
    }

    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    buttonGroup.appendChild(readBtn)
    buttonGroup.appendChild(removeBtn)
    bookCard.appendChild(buttonGroup)
    booksGrid.appendChild(bookCard)
}

const preparePage = () => {
    myLibrary.forEach(book => {
        bookCard = createBookCard(book);
        booksGrid.appendChild(bookCard);
    });

}

// events

window.onload = preparePage
// addBookForm.onsubmit = addBook
// removeBtn.onclick = removeBook

let library = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function () {
        return title + " by " + author + ", " + pages + " pages, " +
            (isRead ? " read" : "not read yet");
    }
}

function addBookToLibrary(book) {
    library.push(book);
}

hobbit = new Book("The Hobbit", "Tolkien", 288, false);
antifragile = new Book("Antifragile", "Taleb", 180, true);

console.log("Lista libri: ");

addBookToLibrary(hobbit);
addBookToLibrary(antifragile);

library.forEach(book => {
    console.log(book.info());
});


// user interface
const addBookBtn = document.getElementById('addBookBtn')
const addBookModal = document.getElementById('addBookModal')
const errorMsg = document.getElementById('errorMsg')
const overlay = document.getElementById('overlay')
const addBookForm = document.getElementById('addBookForm');
const booksGrid = document.getElementById('books-grid');



const updateBooksGrid = () => {
    resetBooksGrid()
    for (let book of library) {
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
    const readBtn = document.createElement('p')
    const removeBtn = document.createElement('button')

    bookCard.classList.add('book-card')
    buttonGroup.classList.add('button-group')
    readBtn.classList.add('btn')
    removeBtn.classList.add('btn')
    // readBtn.onclick = toggleRead
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


const setAddBookFormValidations = () => {
    const title = document.getElementById('title');

    console.log("inside validations");
    title.addEventListener("input", function (event) {
        if (title.validity.typeMismatch) {
            title.setCustomValidity("Mi aspetto un indirizzo non vuotoo!!!");
            title.reportValidity();
        } else if (title.validity.valueMissing) {
            console.log("non vuoto mi aspetto io eh");
            title.setCustomValidity("Mi aspetto un indirizzo non vuotoo!!!");
        } else {
            console.log("caso boh aposto direi");
            title.setCustomValidity("");
        }
    });
}

const preparePage = () => {
    updateBooksGrid();
    setAddBookFormValidations();
}

const openAddBookModal = () => {
    addBookForm.reset()
    addBookModal.classList.add('active')
    overlay.classList.add('active')
}

const closeAddBookModal = () => {
    addBookModal.classList.remove('active')
    overlay.classList.remove('active')
    errorMsg.classList.remove('active')
    errorMsg.textContent = ''
}


const closeAllModals = () => {
    closeAddBookModal()
    closeAccountModal()
}

const handleKeyboardInput = (e) => {
    if (e.key === 'Escape') closeAllModals()
}

const getBookFromInput = () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const isRead = document.getElementById('isRead').checked
    return new Book(title, author, pages, isRead)
}

const addBook = (e) => {
    e.preventDefault()
    const newBook = getBookFromInput()

    library.push(newBook);

    updateBooksGrid()

    closeAddBookModal()
}

const removeBook = (e) => {
    const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
        '"',
        ''
    )
    library = library.filter((book) => book.title !== title)

    updateBooksGrid()
}

// events

window.onload = preparePage
//removeBtn.onclick = removeBook

addBookBtn.onclick = openAddBookModal
overlay.onclick = closeAllModals
addBookForm.onsubmit = addBook

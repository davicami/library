/*
function Player(name, marker) {
  this.name = name
  this.marker = marker
  this.sayName = function() {
    console.log(name)
  }
}

book’s title, author, the number of pages, and whether or not you have read the book.

*/

function Book (title, author, pagesNumber, read) {
    this.title = title,
    this.author = author,
    this.pageNumbers = pagesNumber;
    this.read = read;

    this.info = function(){
        return title + " by " + author + ", " + pagesNumber + " pages, " +
        (read ? " read" : "not read yet") 

    }
}

// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
console.log("PROVA");
hobbit = new Book("The Hobbit", "Tolkien", 288, false);
console.log(hobbit.info());
antifragile = new Book("Antifragile", "Taleb", 180, true);
console.log(antifragile.info());
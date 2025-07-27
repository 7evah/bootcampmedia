interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string; // optional 
}

class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): Book | undefined {
    return this.books.find(book => book.isbn === isbn);
  }

  // Protected method to allow subclass access
  protected getAllBooks(): Book[] {
    return this.books;
  }
}

class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooks(): string[] {
    return this.getAllBooks().map(book => book.title);
  }
}

// Usage Example
const myDigitalLibrary = new DigitalLibrary("https://my-digital-library.com");

// Add some books
myDigitalLibrary.addBook({
  title: "The Pragmatic Programmer",
  author: "Andrew Hunt",
  isbn: "978-0201616224",
  publishedYear: 1999,
  genre: "Programming",
});

myDigitalLibrary.addBook({
  title: "1984",
  author: "George Orwell",
  isbn: "978-0451524935",
  publishedYear: 1949,
});

// Get details of a book
const book = myDigitalLibrary.getBookDetails("978-0451524935");
console.log("Book Details:", book);

// List all book titles
console.log("All Book Titles:", myDigitalLibrary.listBooks());

// Output website
console.log("Library Website:", myDigitalLibrary.website);

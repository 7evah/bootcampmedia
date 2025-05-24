const allBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
    alreadyRead: true
  },
  {
    title: "1984",
    author: "George Orwell",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezW8aJYHJ8wIKbzTh0I2HyuO0adeugSXUBA&s",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
  const bookDiv = document.createElement("div");

  // Create book details
  const bookInfo = document.createElement("p");
  bookInfo.textContent = `${book.title} written by ${book.author}`;

  // Set red color if already read
  if (book.alreadyRead) {
    bookInfo.style.color = "red";
  }

  // Create image element
  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  // Append details to div
  bookDiv.appendChild(bookInfo);
  bookDiv.appendChild(img);

  // Append div to section
  section.appendChild(bookDiv);
});

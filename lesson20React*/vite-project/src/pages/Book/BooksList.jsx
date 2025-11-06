import React, { useState } from "react";
import Book from "./Book";

const BooksList = () => {
  const books = [
    { name: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { name: "To Kill a Mockingbird", author: "Harper Lee" },
    { name: "1984", author: "George Orwell" },
    { name: "Pride and Prejudice", author: "Jane Austen" },
    { name: "The Catcher in the Rye", author: "J.D. Salinger" },
    { name: "Moby-Dick", author: "Herman Melville" },
    { name: "The Hobbit", author: "J.R.R. Tolkien" },
    { name: "The Alchemist", author: "Paulo Coelho" },
    { name: "War and Peace", author: "Leo Tolstoy" },
    { name: "The Little Prince", author: "Antoine de Saint-Exupéry" },
  ];
  const [arr, setArr] = useState(books);

  const deleteBook = (name) => {
    setArr(arr.filter((item) => item.name != name));
  };

  return (
    <div>
      {arr.map((item, index) => {
        return (
          <Book
            key={index}
            name={item.name}
            author={item.author}
            delFunction={deleteBook}
          />
        );
      })}
    </div>
  );
};

export default BooksList;

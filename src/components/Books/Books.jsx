import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";


const Books = () => {
  const books = useLoaderData();
  console.log(books)
  return (
    <div className="grid md:grid-cols-3 gap-8 mx-4">
      {
        books.map(book => <Book key={book.bookId} book={book}></Book>)
      }
    </div>
  );
};

export default Books;
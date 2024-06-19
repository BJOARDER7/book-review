import Book from "../Book/Book";
import { useEffect, useState } from "react";


const Books = () => {
  const [books, setBooks] = useState([]);
  const [showBooks, setShowBooks] = useState(6);
  

  useEffect( () => {
    fetch('books.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [])

  

  return (
    <div className="my-4">
    <div className="grid md:grid-cols-3 gap-4 md:gap-8 mx-2 md:mx-4 my-4 md:my-8">
      {
        books.slice(0, showBooks).map(book => <Book key={book.bookId} book={book}></Book>)
      }
    </div>

    <div className={showBooks === books.length && 'hidden'}>
      <button onClick={() => setShowBooks(books.length)} className="btn btn-outline btn-success">Show All</button>
    </div>
    </div>
  );
};

export default Books;
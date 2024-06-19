import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBookPage } from "../utility/utility";
import BookList from "../BookList/BookList";


const ListedBooks = () => {

  const books = useLoaderData();
  const [bookStored, setBookStored] = useState([]);
  

  useEffect( ()=> {
    const storedBookIds = getBookPage();
    
    if(books.length > 0){
      const bookAdded = [];
      for(const id of storedBookIds){
        const book = books.find(book => book.bookId === id);
        if(book){
          bookAdded.push(book);
        }
      }
      setBookStored(bookAdded);
      console.log(books)
    }
  }, [])

  

  return (
    <div className="mx-5 space-y-4">
      
      {
        bookStored.map(list => <BookList 
          key={list.bookId}
          list={list}
        ></BookList>)
      }

    </div>
  );
};

export default ListedBooks;
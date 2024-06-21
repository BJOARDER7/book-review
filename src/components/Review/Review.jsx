import { useEffect, useState } from "react";
import ReviewSection from "./ReviewSection/ReviewSection";


const Review = () => {
  const [books, setBooks] = useState([]);


  useEffect( () => {
    fetch('/books.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [])

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl md:text-4xl text-gray-800 m-4">
        Customer Review
      </h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  {
    books.slice(0,4).map(book => <ReviewSection
    key={book.bookId}
    book={book}
    ></ReviewSection>)
  }
  
</ul>
      
      </div>
  );
};

export default Review;
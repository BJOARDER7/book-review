import { useLoaderData } from "react-router-dom";
import BlogItem from "./BlogItem/BlogItem";


const Blog = () => {
  const books = useLoaderData();  



  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl md:text-4xl text-gray-800 m-4">
        Welcome to the Blog
      </h1>
      <h3 className="text-xl md:text-2xl text-gray-500 m-2">Our Book Lists</h3>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>        
        <th>Book</th>
        <th>Book Name</th>
        <th>Description</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row  */}
      {
        books.map(book => <BlogItem
        key={book.bookId}
        book={book}
        ></BlogItem>)
      }
      
      
    </tbody>
    
  </table>
</div>
    </div>
  );
};

export default Blog;
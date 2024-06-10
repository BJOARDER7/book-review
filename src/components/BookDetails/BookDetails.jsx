import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
  const books = useLoaderData();
  const {id} = useParams();
  
  const book = books.find(book => book.bookId == id);
  console.log(book, id)

  return (
    <div className="mx-5">
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={book.image} className="max-w-sm rounded-lg shadow-2xl p-12" />
    <div className="p-4">
      <h1 className="text-5xl font-bold">{book.bookName}</h1>
      <p className="py-4">By : <span>{book.author}</span></p>
      <hr />
      <p className="py-4">{book.category}</p>
      <hr />
      <p className="py-6"><span className="font-bold">Review: </span>{book.review}</p>      
      <p className="flex items-center gap-6 pb-4"><span className="font-bold">Tag</span> <span className="text-[#23BE0A]">#{book.tags[0]}</span> <span className="text-[#23BE0A]">#{book.tags[1]}</span></p>
      <hr />
      <div className="py-6">
        <table>
          <tbody>
            <tr>
            <td className="pe-12 py-1">Number of Pages:</td>
            <td>{book.totalPages}</td>            
            </tr>
            <tr>
            <td className="pe-12 py-1">Publisher:</td>
            <td>{book.publisher}</td>            
            </tr>
            <tr>
            <td className="pe-12 py-1">Year of Publishing:</td>
            <td>{book.yearOfPublishing}</td>            
            </tr>
            <tr>
            <td className="pe-12 py-1">Rating:</td>
            <td>{book.rating}</td>            
            </tr>
            
          </tbody>
        </table>       
      </div>
      <div className="flex items-center gap-6">
      <button className="btn btn-outline">Read</button>
      <button className="btn btn-info">Wishlist</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default BookDetails;
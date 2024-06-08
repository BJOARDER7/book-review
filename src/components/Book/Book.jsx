import { FaRegStar } from 'react-icons/fa';

const Book = ({book}) => {
  const {image, tags, bookName, author, category, rating } = book;

  return (
    <div className="card w-full bg-white shadow-md rounded-lg overflow-hidden">
    <div className="flex justify-center items-center bg-[#F3F3F3]">
    <img className="w-28 h-44 object-cover rounded-md" src={image} alt={bookName} />
    </div>    
    <div className=" card-body p-4">
    <div className="mt-4">
        {tags.map((tag, idx) => (
          <span key={idx} className="badge badge-primary mr-2">{tag}</span>
        ))}
      </div>
      <h2 className="font-bold text-xl mb-2 playfair-display-font">{bookName}</h2>
      <p className="text-gray-700">by {author}</p>
      <div className='flex justify-between items-center space-y-4'>
      <p className="text-gray-600">{category}</p>
      <p className='flex justify-center items-center gap-2'><span>{rating}</span> <FaRegStar></FaRegStar></p>
      </div>      
    </div>
  </div>
  );
};

export default Book;
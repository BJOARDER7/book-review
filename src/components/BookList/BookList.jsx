import PropTypes from 'prop-types';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi2";
import { GrDocumentText } from "react-icons/gr";
import { Link } from 'react-router-dom';

const BookList = ({list}) => {
  const {bookId, image, tags, bookName, author,  rating, totalPages, publisher, yearOfPublishing, category } = list;
  return (
    <div className="hero min-h-24 max-w-6xl bg-base-200 mx-auto rounded-md">
  <div className="hero-content lg:flex-row justify-between w-11/12">
    <img src={image} className="max-w-32 rounded-lg shadow-2xl p-4 w-1/5" />
    <div className="p-2 w-4/5">
      <h1 className="text-3xl font-bold">{bookName}</h1>
      <p className="py-2">By : <span>{author}</span></p>
      
      
                 
      <div className='flex flex-col gap-2'>
      <div className='flex gap-24'>
      <p className="flex items-center gap-4 pb-2"><span className="font-bold">Tag</span> <span className="text-[#23BE0A]">#{tags[0]}</span> <span className="text-[#23BE0A]">#{tags[1]}</span></p>
      <p className='flex items-center gap-2'><span><SlLocationPin /></span> Year of Publishing: <span>{yearOfPublishing}</span></p>
      </div>
      <div className='flex gap-12'>
        <p className='flex items-center gap-2'><span><HiOutlineUsers /></span> Publisher: <span> {publisher}</span></p>
        <p className='flex items-center gap-2'><span><GrDocumentText /></span> Page <span>{totalPages}</span></p>
      </div>
      <hr />
      <div className='flex items-center gap-8'>
        <p className='flex justify-center items-center bg-[#328EFF26] rounded-full py-2 px-4 text-[#328EFF]'>Category: <span>{category}</span></p>
        <p className='flex justify-center items-center bg-[#FFAC3326] rounded-full py-2 px-4 text-[#FFAC33]'>Rating: <span>{rating}</span></p>
        <Link to={`/book/${bookId}`}><button className='btn bg-[#23BE0A] rounded-full text-white'>View Details</button></Link>
      </div>
      </div>
      
      
    </div>
  </div>
</div>
  );
};

BookList.propTypes = {
  list: PropTypes.object
}

export default BookList;
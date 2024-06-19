import PropTypes from 'prop-types';

const BookList = ({list}) => {
  const {image, tags, bookName, author,  rating, totalPages, publisher, yearOfPublishing, category } = list;
  return (
    <div className="hero min-h-24 max-w-6xl bg-base-200 mx-auto rounded-md">
  <div className="hero-content lg:flex-row justify-between w-11/12">
    <img src={image} className="max-w-32 rounded-lg shadow-2xl p-4 w-1/5" />
    <div className="p-2 w-4/5">
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className="py-2">By : <span>{author}</span></p>
      
      
                 
      <div className='flex flex-col gap-2'>
      <div className='flex gap-12'>
      <p className="flex items-center gap-2 pb-2"><span className="font-bold">Tag</span> <span className="text-[#23BE0A]">#{tags[0]}</span> <span className="text-[#23BE0A]">#{tags[1]}</span></p>
      <p><span></span> Year of Publishing: <span>{yearOfPublishing}</span></p>
      </div>
      <div className='flex gap-12'>
        <p>Publisher: <span>{publisher}</span></p>
        <p>Page <span>{totalPages}</span></p>
      </div>
      <hr />
      <div className='flex gap-8'>
        <p className='flex justify-center items-center bg-[#328EFF26] rounded-full py-2 px-4 text-[#328EFF]'>Category: <span>{category}</span></p>
        <p className='flex justify-center items-center bg-[#FFAC3326] rounded-full py-2 px-4 text-[#FFAC33]'>Rating: <span>{rating}</span></p>
        <button className='btn bg-[#23BE0A] rounded-full text-white'>View Details</button>
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
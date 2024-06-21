import PropTypes from 'prop-types';


const ReviewSection = ({book}) => {
  const {bookName, review} = book;
  return (
    <li>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10">
      
      <div className="text-lg font-black">{bookName}</div>
      {review}
    </div>
    <hr/>
  </li>
  
  );
};

ReviewSection.propTypes = {
  book: PropTypes.object
}

export default ReviewSection;

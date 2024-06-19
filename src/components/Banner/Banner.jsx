import bannerImg from '../../assets/book1.jpg';

const Banner = () => {
  return (
    <div className="md:flex justify-center items-center bg-[#1313130D] rounded-lg space-y-4 md:mx-4">
      <div className="w-full md:w-3/5 space-y-4 md:space-y-12 px-4 md:px-12">
        <h2 className='text-xl md:text-6xl font-bold'>Books to freshen up your bookshelf</h2>
        <button className='bg-[#23BE0A] px-2 md:px-7 py-2 md:py-5 rounded md:rounded-lg text-white font-bold text-sm md:text-xl'>View The List</button>
      </div>
      <div className="w-full md:w-2/5 min-h-48 md:min-h-full mx-auto">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
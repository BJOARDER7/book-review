import bannerImg from '../../assets/book1.jpg';

const Banner = () => {
  return (
    <div className="flex justify-center items-center bg-[#1313130D] rounded-lg mx-4">
      <div className="w-3/5 space-y-12 px-12">
        <h2 className='text-6xl font-bold'>Books to freshen up your bookshelf</h2>
        <button className='bg-[#23BE0A] px-7 py-5 rounded-lg text-white font-bold text-xl'>View The List</button>
      </div>
      <div className="w-2/5 min-h-full">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
import notFound_bg from "../assets/no-results.png";

const Country_404 = () => {
  return (
    <div className='flex justify-center items-center w-full flex-col mt-10 '>
      <img
        className='w-[20%] min-w-[10rem]'
        src={notFound_bg}
        alt='Not Found'
      />
      <h1 className='text-4xl font-bold'>Country Not Found</h1>
    </div>
  );
};

export default Country_404;

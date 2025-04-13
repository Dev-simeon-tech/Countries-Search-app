import { useContext, useState } from "react";
import { CountriesContext } from "../context/countries-context";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const RegionFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { region, setRegion } = useContext(CountriesContext);

  const onSelectHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (region === e.currentTarget.innerText) {
      setRegion("Filter by Region");
    } else {
      setRegion(e.currentTarget.innerText);
    }
  };
  const onClickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      role='select'
      className='w-[60%] max-w-[15rem] shadow-[1px_0px_10px_-2px_rgba(0,0,0,0.25)] lg:w-[15rem] relative'
    >
      <button
        onClick={onClickHandler}
        className='bg-white w-full p-4 dark:bg-Dark-Blue flex justify-between items-center rounded-md'
      >
        <p>{region}</p>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className={`size-5 transition-transform duration-300 ${
            isOpen && "rotate-180"
          }`}
        >
          <path
            fillRule='evenodd'
            d='M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z'
            clipRule='evenodd'
          />
        </svg>
      </button>

      {isOpen && (
        <div className='bg-white absolute w-full dark:bg-Dark-Blue shadow-[1px_0px_10px_-2px_rgba(0,0,0,0.25)] py-4 lg:py-7 mt-3 rounded-md flex flex-col'>
          {regions.map((regionValue, index) => (
            <button
              key={index}
              className={` text-left lg:hover:bg-blue-400 px-8 py-1 ${
                regionValue === region ? "bg-blue-400" : ""
              }`}
              onClick={onSelectHandler}
            >
              {regionValue}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RegionFilter;

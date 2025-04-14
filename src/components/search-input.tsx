import { useContext } from "react";
import { CountriesContext } from "../context/countries-context";

const SearchInput = () => {
  const { searchFields, setSearchFields } = useContext(CountriesContext);

  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFields(e.target.value);
  };
  return (
    <div
      role='search'
      className='relative shadow-[1px_0px_10px_-2px_rgba(0,0,0,0.25)] lg:w-[40%]'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        aria-label='Search icon'
        className='size-6 absolute top-4 left-4 stroke-Dark-Gray dark:stroke-White'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
        />
      </svg>
      <input
        className='p-4 pl-14 w-full focus:outline-0 text-Dark-Gray dark:text-White dark:bg-Dark-Blue rounded-lg'
        onChange={onSearchHandler}
        value={searchFields}
        placeholder='Search a country...'
        type='text'
      />
    </div>
  );
};

export default SearchInput;

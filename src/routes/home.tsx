import { useContext, useState, useEffect, useMemo } from "react";
import { CountriesContext } from "../context/countries-context";
import { SkeletonHome } from "../components/ui/skeletonUi";

import SearchInput from "../components/search-input";
import RegionFilter from "../components/region-filter";
import CountryCard from "../components/country-card";
import Country_404 from "../components/country-404";

const Home = () => {
  const [showButton, setShowButton] = useState(false);
  const { countries, searchFields, region, loading } =
    useContext(CountriesContext);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const newFilteredCountries = useMemo(() => {
    return countries.filter((country) => {
      return (
        country.name.toLowerCase().includes(searchFields.toLowerCase()) &&
        (region === "Filter by Region" || country.region === region)
      );
    });
  }, [region, searchFields, countries]);

  useEffect(() => {
    setFilteredCountries(newFilteredCountries);
  }, [newFilteredCountries]);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // Show after 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          aria-label='Scroll to top'
          onClick={scrollToTop}
          className='fixed bottom-5 scroll-up-btn z-20 right-5 bg-White dark:bg-Dark-Blue shadow-[1px_0px_10px_-1px_rgba(0,0,0,0.25)] px-4 py-4 rounded-full  transition'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-6 transition-transform duration-500'
          >
            <path
              fillRule='evenodd'
              d='M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z'
              clipRule='evenodd'
            />
            <path
              fillRule='evenodd'
              d='M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      )}
      <div className='px-2 mt-8 lg:px-10 flex lg:flex-row gap-8 lg:items-center flex-col lg:justify-between'>
        <SearchInput />
        <RegionFilter />
      </div>
      <div className=' p-4 mt-3  lg:p-10'>
        {loading ? (
          <div className='grid gap-12 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]'>
            {new Array(5).fill(0).map((_, index) => (
              <SkeletonHome key={index} />
            ))}
          </div>
        ) : !filteredCountries.length && searchFields.length ? (
          <Country_404 />
        ) : (
          <div className='grid min-[105rem]:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] min-[81.25rem]:grid-cols-4 min-[63rem]:grid-cols-3 min-[37.5rem]:grid-cols-2  grid-cols-1 gap-8 lg:gap-14'>
            {filteredCountries.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;

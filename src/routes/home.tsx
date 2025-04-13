import { useContext, useState, useEffect, useMemo } from "react";
import { CountriesContext } from "../context/countries-context";
import { SkeletonHome } from "../components/ui/skeletonUi";

import SearchInput from "../components/search-input";
import RegionFilter from "../components/region-filter";
import CountryCard from "../components/country-card";

const Home = () => {
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

  return (
    <>
      <div className='px-2 mt-8 lg:px-10 flex lg:flex-row gap-8 lg:items-center flex-col lg:justify-between'>
        <SearchInput />
        <RegionFilter />
      </div>
      <div className='country-grid gap-8 p-4 mt-3 lg:place-items-center lg:p-10'>
        {loading
          ? new Array(5).fill(0).map((_, index) => <SkeletonHome key={index} />)
          : filteredCountries.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
      </div>
    </>
  );
};

export default Home;

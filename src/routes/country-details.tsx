import { useContext, useMemo } from "react";
import { useParams, useNavigate } from "react-router";

import { CountriesContext } from "../context/countries-context";
import { SkeletonCountryDetails } from "../components/ui/skeletonUi";
import notFound_bg from "../assets/no-results.png";

const CountryDetails = () => {
  const { countries, loading } = useContext(CountriesContext);
  const { country } = useParams<{ country: string }>();

  const navigate = useNavigate();

  const selectedCountry = useMemo(() => {
    return countries.find((countryValue) => countryValue.name === country);
  }, [countries, country]);

  if (loading) return <SkeletonCountryDetails />;

  return (
    <div>
      <div className='lg:w-[90%] lg:mx-auto px-4'>
        <button
          aria-label='Go back to previous page'
          onClick={() => navigate("/")}
          className='bg-white dark:bg-Dark-Blue shadow-[1px_0px_10px_-1px_rgba(0,0,0,0.25)] rounded-md px-4 py-2 mt-10 mb-10 flex items-center gap-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-6'
          >
            <path
              fillRule='evenodd'
              d='M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z'
              clipRule='evenodd'
            />
          </svg>
          <p>Back</p>
        </button>
      </div>

      {!selectedCountry ? (
        <div className='flex justify-center items-center flex-col mt-10 '>
          <img className='w-[20%]' src={notFound_bg} alt='Not Found' />
          <h1 className='text-4xl font-bold'>Country Not Found</h1>
        </div>
      ) : (
        <div className='lg:w-[90%] lg:mx-auto px-4 pb-10'>
          <div className='flex flex-col lg:flex-row gap-10 lg:justify-between lg:items-center mt-20'>
            <img
              className='lg:w-[35rem]'
              src={selectedCountry?.flags.png}
              alt=''
            />

            <article>
              <h2 className='text-3xl font-bold pb-8'>
                {selectedCountry?.name}
              </h2>

              <div className='flex-col flex gap-12 lg:flex-row'>
                <div className='space-y-3'>
                  <p>
                    Native Name:{" "}
                    <span className='font-extralight'>
                      {selectedCountry?.nativeName}
                    </span>
                  </p>
                  <p>
                    Population:{" "}
                    <span className='font-extralight'>
                      {selectedCountry?.population.toLocaleString()}
                    </span>
                  </p>
                  <p>
                    Region:{" "}
                    <span className='font-extralight'>
                      {selectedCountry?.region}
                    </span>
                  </p>
                  <p>
                    Sub region:{" "}
                    <span className='font-extralight'>
                      {selectedCountry?.subregion}
                    </span>
                  </p>
                  <p>
                    Capital:{" "}
                    <span className='font-extralight'>
                      {selectedCountry?.capital}
                    </span>
                  </p>
                </div>
                <div className='space-y-3'>
                  <p>
                    Top Level Domain:{" "}
                    <span className='font-extralight'>
                      {selectedCountry?.topLevelDomain}
                    </span>
                  </p>
                  <p>
                    Currencies:{" "}
                    <span className='font-extralight'>
                      {selectedCountry?.currencies
                        ?.map((currency) => currency.name)
                        .join(", ")}
                    </span>
                  </p>
                  <p>
                    Languages:{" "}
                    <span className='font-extralight'>
                      {selectedCountry?.languages
                        ?.map((language) => language.name)
                        .join(", ")}
                    </span>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;

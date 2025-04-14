import { CountriesType } from "../context/countries-context";
import { useNavigate } from "react-router";

type CountryCardPropTypes = {
  country: CountriesType;
};

const CountryCard = ({ country }: CountryCardPropTypes) => {
  const { name, population, flags, region, capital } = country;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate("countries/" + name);
  return (
    <div
      onClick={onNavigateHandler}
      className='rounded-lg overflow-hidden lg:max-w-[25rem] h-auto cursor-pointer shadow-lg'
    >
      <div className='overflow-hidden h-1/2'>
        <img
          className='h-full w-full lg:hover:scale-115 transition-transform duration-500  object-cover'
          src={flags.png}
          alt={name + " flag"}
        />
      </div>
      <article className='bg-white h-1/2 dark:bg-Dark-Blue p-8 text-lg'>
        <h2 className='font-bold mb-6 text-2xl'>{name}</h2>

        <p>
          Population:{" "}
          <span className='font-extralight'>{population.toLocaleString()}</span>
        </p>
        <p>
          Region: <span className='font-extralight'>{region}</span>
        </p>
        <p>
          capital: <span className='font-extralight'>{capital}</span>
        </p>
      </article>
    </div>
  );
};

export default CountryCard;

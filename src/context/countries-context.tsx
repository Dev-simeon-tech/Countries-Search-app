import { createContext, useState, useEffect } from "react";

type CountriesProviderProps = {
  children: React.ReactNode;
};

export type CountriesType = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  currencies: { name: string }[];
  languages: { name: string }[];
  borders: string[];
  alpha3Code: string;
};

type CountriesContextType = {
  searchFields: string;
  setSearchFields: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  countries: CountriesType[];
  loading: boolean;
};

export const CountriesContext = createContext({} as CountriesContextType);

export const CountriesProvider = ({ children }: CountriesProviderProps) => {
  const [countries, setCountries] = useState<CountriesType[] | []>([]);
  const [searchFields, setSearchFields] = useState("");
  const [region, setRegion] = useState("Filter by Region");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      setTimeout(async () => {
        try {
          const response = await fetch("/data.json");

          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const countriesData = await response.json();
          setCountries(countriesData);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      }, 3000);
    };
    fetchCountries();
  }, []);

  const value = {
    searchFields,
    setSearchFields,
    region,
    setRegion,
    countries,
    loading,
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};

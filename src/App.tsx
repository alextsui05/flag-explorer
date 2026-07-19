import { useState } from "react";

import "./App.css";
import Flag from "./components/Flag";

import type { CountryData, CountriesMap } from "./types";

import countriesData from "./countries.json";
import { multisearch } from "./lib/filter";
const countries = countriesData as CountriesMap;

function App() {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const selectedCountries: [string, CountryData][] = multisearch(
    countries,
    searchText,
  );

  return (
    <>
      <header>
        <h1>Flag explorer</h1>
      </header>
      <main>
        <div className="search">
          <input type="text" onChange={handleChange} />
        </div>
        <div className="flag-grid">
          {selectedCountries.map(([countryCode, country]) => (
            <Flag countryCode={countryCode.toLowerCase()} name={country.name} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;

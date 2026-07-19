import "./App.css";
import Flag from "./components/Flag";

import countries from "./countries.json";

function App() {
  const selectCountries = Object.entries(countries).filter(([,]) => {
    return true;
  });
  return (
    <>
      <header>
        <h1>Flag explorer</h1>
      </header>
      <main>
        <div className="flag-grid">
          {selectCountries.map(([countryCode, country]) => (
            <Flag countryCode={countryCode.toLowerCase()} name={country.name} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;

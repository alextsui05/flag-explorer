import type { CountriesMap, CountryData } from "../types";

export const multisearch = (
  countries: CountriesMap,
  query: string,
): [string, CountriesMap[string]][] => {
  if (!query) return Object.entries(countries);

  const terms = query.split(",").map((term) => term.trim());

  const combinedMap = new Map<string, CountriesMap[string]>();

  terms.forEach((term) => {
    const map = new Map<string, CountriesMap[string]>();

    Object.entries(countries).forEach(([countryCode, country]) => {
      if (matchAllFactors(country, term)) {
        map.set(countryCode, country);
      }
    });

    for (const [countryCode, country] of map) {
      combinedMap.set(countryCode, country);
    }
  });

  return [...combinedMap.entries()];
};

const matchAnyField = (country: CountryData, query: string): boolean => {
  const inverted = query.startsWith("!");
  const term = inverted ? query.substring(1) : query;
  const res =
    country.name.toLowerCase().startsWith(term.toLowerCase()) ||
    country.continent.toLowerCase() === term.toLowerCase() ||
    country.colors.some((color) => color.toLowerCase() === term.toLowerCase());
  return inverted ? !res : res;
};

const matchAllFactors = (country: CountryData, query: string): boolean => {
  const factors = query.split("&").map((factor) => factor.trim());
  return factors.every((factor) => matchAnyField(country, factor));
};

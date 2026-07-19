export interface CountryData {
  name: string;
  continent: string;
  colors: string[];
}

export type CountriesMap = Record<string, CountryData>;

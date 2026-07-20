export interface CountryData {
  name: string;
  continent: string;
  colors: string[];
  tags: string[];
}

export type CountriesMap = Record<string, CountryData>;

export interface ICountry {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area?: number;
    gini?: number;
    timezones: string[];
    borders: string[] | ICountry[];
    nativeName: string;
    numericCode?: string;
    currencies: ICountryCurrency[];
    languages: ICountryLanguage[];
    translations: ICountryTranslations;
    flag: string;
    regionalBlocs: ICountryRegionalBloc[];
    cioc?: string;
  }
  
  export interface ICountryCurrency {
    code?: string;
    name?: string;
    symbol?: string;
  }
  
  export interface ICountryLanguage {
    iso639_1?: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }
  
  export interface ICountryTranslations {
    de?: string;
    es?: string;
    fr?: string;
    ja?: string;
    it?: string;
    br: string;
    pt: string;
    nl?: string;
    hr?: string;
    fa: string;
  }
  
  export interface ICountryRegionalBloc {
    acronym: string;
    name: string;
    otherAcronyms: string[];
    otherNames: string[];
  }
  
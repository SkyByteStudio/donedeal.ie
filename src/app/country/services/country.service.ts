import { IHttpPromise } from 'angular';
import { ICountry } from '../country.model';

export class CountryService {

  static selector = 'countryService';

  constructor(private $http: angular.IHttpService, private $q: angular.IQService) {
    'ngInject';
  }

  getCountries(): IHttpPromise<ICountry[]> {
    return this.$http.get('https://restcountries.eu/rest/v2/all');
  }

  getCountriesByCodes(borders: string[]): IHttpPromise<ICountry[]> {
    const codes = borders.join(';');
    return this.$http.get(`https://restcountries.eu/rest/v2/alpha?codes=${codes}`);
  }

}

import * as angular from 'angular';
import 'angular-mocks';
import { CountryService } from './country.service';

describe('CountryService', () => {

  beforeEach(() => {
    angular
      .module('app', [])
      .service('countryService', CountryService);
    angular.mock.module('app');
  });

  it('should exist', angular.mock.inject((countryService: CountryService) => {
    expect(countryService).toBeDefined();
  }));

});

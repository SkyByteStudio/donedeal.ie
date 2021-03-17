import * as angular from 'angular';
import 'angular-mocks';
import { CountryListComponent } from './country-list.component';

describe('CountryListComponent component', () => {
  beforeEach(() => {
    angular
      .module('app', [])
      .component(CountryListComponent.selector, CountryListComponent);
    angular.mock.module('app');
  });

  it('should exist', angular.mock.inject(($componentController: any) => {
    const component = $componentController(CountryListComponent.selector, {}, {});
    expect(component).toBeDefined();
  }));

});

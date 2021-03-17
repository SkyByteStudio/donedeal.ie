/**
 * Import the Component styles
 */
import { ICountry } from '../country.model';
import { CountryService } from '../services/country.service';
import './country-list.component.scss';

class CountryListController {

  countries: ICountry[] = [];

  constructor(private $state: angular.ui.IStateService, private countryService: CountryService) {
    'ngInject';
  }

  $onInit() {
    this.fetchCountries();
  }

  public viewCountry(country: ICountry) {
    this.$state.go('country/view', {country});
  }

  private fetchCountries() {
    this.countryService.getCountries().then(
      countries => {
        this.countries = countries.data;
      }
    );
  }

}

export class CountryListComponent implements angular.IComponentOptions {
  static selector = 'countryList';
  static controller = CountryListController;
  static template = require('./country-list.component.html');
}
